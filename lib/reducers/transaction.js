import { ADD_TRANSACTION, ADD_BUYER_ID, ADD_SELLER_ID, ADD_SPONSOR_ID, ADD_TRANSACTION_ID, ADD_PRODUCT_DETAIL, ADD_TIME_STAMP } from '../actions/transaction'

const defaultTransaction = {
	transactionId:'',
	productId:'',
	quantity:'',
	comissionPc:0,
	comissionCash:0,
	price:0,
	sellerId:'',
	buyerId:'',
	sponsorId:'',
	timestamp:''
}

export default (state = defaultTransaction, action) => {
	const { type, payload } = action 
	switch(type) {
		case ADD_TRANSACTION:
			const { transactionId, productId, quantity, comissionCash, comissionPc, price, sellerId, buyerId, sponsorId } = payload
			return {
				...state,
				transactionId,
				productId,
				quantity,
				comissionCash,
				comissionPc,
				price,
				sellerId,
				buyerId,
				sponsorId
			}
		case ADD_TRANSACTION_ID:
			return {
				...state,
				transactionId: payload
			}
		case ADD_SELLER_ID:
			return {
				...state,
				sellerId: payload
			}
		case ADD_SPONSOR_ID:
			return {
				...state,
				sponsorId: payload
			}
		case ADD_BUYER_ID:
			return {
				...state,
				buyerId
			}
		case ADD_PRODUCT_DETAIL:
			return {
				...state,
				productId: payload.productId,
				comissionPc: payload.comissionPc,
				comissionCash: payload.comissionCash,
				price: payload.price,
				sellerId: payload.sellerId
			}
		case ADD_TIME_STAMP:
			return {
				...state,
				timestamp: payload
			}
		default: return state
	}
}
