import store from '../store'
import Router from 'next/router'
import loadFirebase from '../database'
import {addPayment as addPaymentAction, addProductTransaction as addProductTransactionAction, addDeliveryDetail as addDeliveryDetailAction} from '../actions/transaction'
import {getTable as getTableAction} from '../actions/profile'

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

export const setOrderStatus = async (transactionId,status) => {
	if(status ==='view'){
		return 
	}
	console.log('stauts', status, transactionId)
	let db = await loadFirebase('database')
  const newStatus = db.ref().child(`transactions/${transactionId}/status`)
	await newStatus.set(status)
	const transactions = store.getState().profile.transactionIds
	const item = await transactions.map(e => db.ref(`transactions/${e.transactionId}`).once('value')
  .then(response => {
    return {
      ...response.val(),
      transactionId: e.transactionId
    }
	}))
  Promise.all(item).then(res => store.dispatch(getTableAction(res)))
}
export const addPayment = (type, acquirer) => {
	store.dispatch(addPaymentAction({type, acquirer}))
}