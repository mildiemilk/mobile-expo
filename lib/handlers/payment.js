import axios from 'axios'
import Router from 'next/router'
import store from '../store'
import { setPaymentResponse, savePaymentImageSuccess, savePaymentImagePending, savePaymentPending, savePaymentSuccess } from '../actions/payment'
import { addPayment as addPaymentAction, addTimeStamp as addTimeStampAction, transactionApproved, addDateAndImage } from '../actions/transaction'
import { getWallet } from './wallet'
import loadFirebase from '../database'

export const createPayment = async (transaction, refno) => {
	let db = await loadFirebase('database')
	let key = await db.ref().child('transactions').push().key
	let updates = {}
	transaction.acquirer = 'Thaiepay'
	transaction.refno = refno
	updates['/transactions/'+ key] = JSON.parse(JSON.stringify(transaction))
	await db.ref().update(updates)
}

export const savePaymentImage = async (image, transaction) => {
	await store.dispatch(savePaymentImagePending())
	const storage = await loadFirebase('storage')
	const db = await loadFirebase('database')
	if(verifyTransaction(transaction)){
		await storage
		.ref('receipts')
		.child(`payment_${Date.now()}.jpg`)
		.put(image[0])
		.then( async (snapshot) => {
			const updateTransaction = ({...transaction,timestamp:Date().toString(), paymentImage:snapshot.downloadURL, paymentStatus: 'pending' })
			var key = await db.ref().child('transactions').push().key
			var updates = {}
			updates['/transactions/'+ key] = updateTransaction
			await db.ref().update(updates)
			await store.dispatch(addDateAndImage(updateTransaction.timestamp, updateTransaction.paymentImage))
			await store.dispatch(savePaymentImageSuccess())
		})
	} else {
		alert('transaction is not verified')
	}
}

const verifyTransaction = transaction => {
	return transaction.productId !== "" && transaction.sellerId !== "" && transaction.sponsorId !== "" 
}

export const approveBankTransferTransaction = async (transactionId,{sellerId, sponsorId, buyerId, price, comissionCash}) => {
		let database = await loadFirebase('database')
		var updates = {}
		updates['/transactions/' + transactionId + '/paymentStatus/']= 'approve'
		await database.ref().update(updates)
		await updateUserTransaction(sellerId, sponsorId, buyerId, transactionId)
		await updateUserWallet(sellerId, sponsorId, price, comissionCash)
		await store.dispatch(transactionApproved(transactionId))
}

export const updateUserTransaction = async (sellerUid, sponsorUid, buyerUid, transationId) => {
	if(sellerUid)
		saveTransaction(sellerUid, transationId)
	if(sponsorUid)
		saveTransaction(sponsorUid, transationId)
	if(buyerUid) 
		saveTransaction(buyerUid, transationId)
}

export const saveTransaction = async (uid, transationId) => {
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

export const updateUserWallet = async (sellerUid, sponsorUid, price, comissionCash) => {
	let db = await loadFirebase('database')
	const sellerWallet = await db.ref().child(`users/${sellerUid}/wallet`)
	const sponsorWallet = await db.ref().child(`users/${sponsorUid}/wallet`)
	const service = db.ref().child(`stats/serviceBalance`)
	let sellerWalletBalance, sponsorWalletBalance, serviceBalance

	await sellerWallet.once('value', response => sellerWalletBalance = response.val())
	const sellerComission = price * 0.9 - comissionCash

	await sponsorWallet.once('value', response => sponsorWalletBalance = response.val())
	const sponsorComission = comissionCash

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
