import store from '../store'
import Router from 'next/router'
import loadFirebase from '../database'
import {
	addPayment as addPaymentAction, 
	addProductTransaction as addProductTransactionAction, 
	addDeliveryDetail as addDeliveryDetailAction,
	getAllTransactions,
	getAllPendingPaymentTransactionsPending,
	getAllPendingPaymentTransactionsSuccess} from '../actions/transaction'
import {getTable as getTableAction} from '../actions/profile'

export const calculateComission = (price, sponsorComissionCash, sellerComissionPercent) => {
	let sponsorComission = (parseFloat(sponsorComissionCash) + parseFloat(price) * (parseFloat(sellerComissionPercent)/100))
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
export const snapshotToArray = snapshot => {
    let returnArr = []

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val()
        item.key = childSnapshot.key
        returnArr.push(item)
    })

    return returnArr
}
export const getAllPendingTransactions= async () => {
	const database = await loadFirebase('database')
	var transaction = await database
		.ref("transactions")
		.limitToLast(100)
		.once('value')
		.then( snapshot=> {store.dispatch(getAllTransactions(snapshotToArray(snapshot)))})
}
export const updateStatusTransactions = async (key,val,callback) =>{
	try {
		const database = await loadFirebase('database')
		var updates = {}
		updates['transactions/' + key+'/status'] = val
		var transaction = await database
		.ref().update(updates)
		callback('success')
	  } catch (error) {
		console.error('Status Error:',error)
		callback('fail')
	  }
}

export const getAllPendingPaymentTransactions = async () => {
	store.dispatch(getAllPendingPaymentTransactionsPending())
	const database = await loadFirebase('database')
	var transaction =await database
		.ref("transactions")
		.orderByChild('paymentStatus')
		.equalTo('pending')
		.once('value')
	store.dispatch(getAllPendingPaymentTransactionsSuccess(transaction.val()))
}
