import store from '../store'
import Router from 'next/router'
import loadFirebase from '../database'
import {addPayment as addPaymentAction, addProductTransaction as addProductTransactionAction, addDeliveryDetail as addDeliveryDetailAction, getAllTransactions} from '../actions/transaction'

export const calculateComission = (price, sponsorComissionCash, sellerComissionPc) => {
	let sponsorComission = (parseFloat(sponsorComissionCash) + parseFloat(price) * (parseFloat(sellerComissionPc)/100))
	return ({
			sponsor: sponsorComission,
			seller: parseFloat(price) * 0.90 - sponsorComission
	})
}

export const addProductTransaction = async (item) => {
	await store.dispatch(addProductTransactionAction(item))
	Router.push('/checkout')
}

export const addDeliveryDetail = async (name, phoneNumber, email, address1, address2, province, postalCode) => {
	await store.dispatch(addDeliveryDetailAction(name, phoneNumber, email, address1, address2, province, postalCode))
	Router.push('/payment')
}


export const addPayment = (type, acquirer) => {
	store.dispatch(addPaymentAction({type, acquirer}))
}

export const getAllPendingTransactions= async () => {
	const database = await loadFirebase('database')
	var transaction = await database
		.ref("transactions")
		.limitToLast(100)
		.once('value')
		.then( snapshot=> store.dispatch(getAllTransactions(snapshot.val())))
}
