import axios from 'axios'
import Router from 'next/router'
import store from '../store'
import { setPaymentResponse } from '../actions/payment'
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
				let newTransactionId = await db.ref().child('transactions').push().key;
				let updates = {}
				let sellerObject = {
					[newTransactionId]: transactions[transaction].comissionSeller
				}
				let ownerObject = {
					[newTransactionId]: transactions[transaction].comissionOwner
				}
				updates['/transactions/'+newTransactionId] = transactions[transaction]
				updates['/wallets/'+transactions[transaction].sellerUid+'/comission-as-seller/'] = sellerObject
				updates['/wallets/'+transactions[transaction].ownerUid+'/comission-as-owner/'] = ownerObject
				await db.ref().update(updates)
			})
		}
	}).then( response => {
			Router.push('/register?justbuy=true')
	})
}
