import axios from 'axios'
import Router from 'next/router'
import store from '../store'
import { setPaymentResponse, setPaymentImage } from '../actions/payment'
import { getWallet } from './wallet'
import loadFirebase from '../database'

const publicKey='pkey_test_56u0cmouamrudc8eefv'
const secretKey='skey_test_56u0cmouwglb4b9etxp'

export const createToken = async ({ cardNumber, securityCode, expiryMonth, expiryYear, name }) => {
	const response = await axios({
		method: 'post',
		url:`https://vault.omise.co/tokens?card[name]=${name}&card[number]=${cardNumber}&card[security_code]=${securityCode}&card[expiration_month]=${expiryMonth}&card[expiration_year]=${expiryYear}`,
		auth: {
			username: 'pkey_test_56u0cmouamrudc8eefv'		
		}
	})
	return(response.data.id)
}


export const createPayment = async (amount, card, transactions) => {
	let db = await loadFirebase('database')
	let token = await createToken(card)
	axios.post(
		'/api/charges', {
			description: 'dateamountname',
			amount: amount,
			currency: 'thb',
			capture: true,
			card: token
	}).then( response => {
		store.dispatch(setPaymentResponse(response))
		if(response.status === 200 ){
			Object.keys(transactions).forEach(async  transaction => {
				let newTransactionId = await db.ref().child('transactions').push().key
				const { ownerUid, sellerUid, comissionOwner, comissionSeller } = transactions[transaction]
				let ownerWallet 
				let sellerWallet 
				await db.ref(`users/${ownerUid}/wallet`).on('value', response=> {ownerWallet = response.val()})
				await db.ref(`users/${sellerUid}/wallet`).on('value', response => {sellerWallet = response.val()})
				let updates = {}
				if(transactions[transaction].ownerUid === transactions[transaction].sellerUid){
					updates['/users/'+ownerUid +'/wallet'] = parseFloat(ownerWallet) + parseFloat(comissionOwner) + parseFloat(comissionSeller)
				} else {
					updates['/users/'+ownerUid +'/wallet'] = parseFloat(ownerWallet) + parseFloat(comissionOwner)
					updates['/users/'+sellerUid +'/wallet'] = parseFloat(sellerWallet) + parseFloat(comissionSeller)
				}
				updates['/transactions/'+newTransactionId] = transactions[transaction]
				updates['/users/'+sellerUid+'/comission-as-seller/'+newTransactionId] = comissionSeller
				updates['/users/'+ownerUid+'/comission-as-owner/'+newTransactionId] = comissionOwner
				await db.ref().update(updates)
			})
		}
	}).then( response => {
			// Router.push('/register?justbuy=true')
	})
}

export const savePaymentImage = async image => {
	const storage = await loadFirebase('storage')
	await storage
		.ref('receipts')
		.child(`payment_${Date.now()}.jpg`)
		.put(image[0])
		.then( snapshot => store.dispatch(setPaymentImage(snapshot.downloadURL)))
}
