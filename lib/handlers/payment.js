import axios from 'axios'
import Router from 'next/router'
import store from '../store'
import { setPaymentResponse, setPaymentImage } from '../actions/payment'
import { addPayment as addPaymentAction, addTimeStamp as addTimeStampAction } from '../actions/transaction'
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


export const createPayment = async (amount, card, transactions, type, acquirer) => {
	let db = await loadFirebase('database')
	let token = await createToken(card)
	axios.post(
		'/api/charges', {
			description: 'dateamountname',
			amount: amount,
			currency: 'thb',
			capture: true,
			card: token
	}).then( async response => {
    await store.dispatch(setPaymentResponse(response))
    await store.dispatch(addPaymentAction({
      type: 'creditCard',
      acquirer: 'Omise',
      paymentDetail: response.data
    }))
		if(response.status === 200 ){
      let key = await db.ref().child('transactions').push().key
      let updates = {}
      await store.dispatch(addTimeStampAction())
      updates['/transactions/'+ key] = JSON.parse(JSON.stringify(store.getState().transaction))
      await db.ref().update(updates)
        .then(() => {
          alert('payment success')
          Router.push('/')
          const { sellerId, sponsorId, buyerId, price, comissionPercent, comissionCash } = updates['/transactions/' + key]
          updateUserTransaction(sellerId, sponsorId, buyerId, key)
          updateUserWallet(sellerId, sponsorId, price, comissionPercent, comissionCash)
        })
		}
	})
}

export const savePaymentImage = async image => {
  const storage = await loadFirebase('storage')
  const db = await loadFirebase('database')
	var key = await db.ref().child('transactions').push().key
	var updates = {}
	await storage
		.ref('receipts')
		.child(`payment_${Date.now()}.jpg`)
		.put(image[0])
    .then( snapshot => store.dispatch(setPaymentImage(snapshot.downloadURL)))
    .then( response => store.dispatch(addPaymentAction({paymentDetail: response.payload})))
    .then( () => store.dispatch(addTimeStampAction()))
    .then( () => updates['/transactions/'+ key] = JSON.parse(JSON.stringify(store.getState().transaction)))
	await db.ref().update(updates)
	.then(() => {
		alert('payment success')
		Router.push('/')
    const { sellerId, sponsorId, buyerId, price, comissionPercent, comissionCash } = updates['/transactions/' + key]
    updateUserTransaction(sellerId, sponsorId, buyerId, key)
    updateUserWallet(sellerId, sponsorId, price, comissionPercent, comissionCash)
	})
}

const updateUserTransaction = async (sellerUid, sponsorUid, buyerUid, transationId) => {
	saveTransaction(sellerUid, transationId)
	saveTransaction(sponsorUid, transationId)
	saveTransaction(buyerUid, transationId)
}

const saveTransaction = async (uid, transationId) => {
	let db = await loadFirebase('database')
	let transactionIds = await db.ref().child(`users/${uid}/transactionIds`)
	let newTransactionIds = []
	await transactionIds.once('value', response => { if(response.val()) newTransactionIds = response.val() })
	.then(() => {
		if(newTransactionIds.indexOf(transationId) === -1) {
			newTransactionIds.push(transationId)
		}
	})
	await transactionIds.set(newTransactionIds)
}

const updateUserWallet = async (sellerUid, sponsorUid, price, comissionPercent, comissionCash) => {
  let db = await loadFirebase('database')
  const sellerWallet = await db.ref().child(`users/${sellerUid}/wallet`)
  const sponsorWallet = await db.ref().child(`users/${sponsorUid}/wallet`)
  const service = db.ref().child(`stats/serviceBalance`)
  let sellerWalletBalance, sponsorWalletBalance, serviceBalance

  await sellerWallet.once('value', response => sellerWalletBalance = response.val())
  const sellerComission = price * 0.9 * (100 - comissionPercent)/100 - comissionCash

  await sponsorWallet.once('value', response => sponsorWalletBalance = response.val())
  const sponsorComission = price * 0.9 * comissionPercent/100 + comissionCash

  const serviceComission = price * 0.1
  await service.once('value', response => serviceBalance = response.val())

  if(sellerComission + serviceComission + sponsorComission == price) {
    sellerWalletBalance += sellerComission
    sponsorWalletBalance += sponsorComission
    serviceBalance += serviceComission

    if(sellerUid == sponsorUid) {
      sellerWalletBalance += sponsorComission
      await sellerWallet.set(sellerWalletBalance)
    }
    else {
      await sellerWallet.set(sellerWalletBalance)
      await sponsorWallet.set(sponsorWalletBalance)
    }      
    await service.set(serviceBalance)
  }
}