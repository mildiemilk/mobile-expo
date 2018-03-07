import {GET_ALL_TRANSACTIONS, SET_PENDING_PAYMENT_TRANSACTION } from '../actions/transaction'

const transactions = {
	pendingTransactions: [],
	pendingPaymentTransactions:[]
}

export default(state = transactions, action) => {
	const {type, payload} = action
	switch (type) {
		case GET_ALL_TRANSACTIONS:
			return ({
				...state,
				pendingTransactions:payload
			})
		case SET_PENDING_PAYMENT_TRANSACTION.SUCCESS:
			return({
				...state,
				pendingPaymentTransactions: {
					...state.pendingPaymentTransactions,
					...payload
				}
			})
		default:
			return state
		}
}
