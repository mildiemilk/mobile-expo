import { ADD_TRANSACTION, ADD_BUYER_ID, ADD_SELLER_ID, ADD_SPONSOR_ID, ADD_TRANSACTION_ID, ADD_PRODUCT_DETAIL, ADD_TIME_STAMP, ADD_DELIVERY_DETAIL, ADD_PAYMENT } from '../actions/transaction'
import { SET_PRODUCT_BY_ID } from '../actions/product'
import { SET_PAYMENT_IMAGE } from '../actions/payment'

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
	timestamp:'',
	name:'',
	address1:'',
	address2:'',
	province: '',
	postalCode: '',
	phoneNumber: '',
	payment: {
		type: '',
		acquirer: '',
		paymentDetail: ''
	}
}

export default (state = defaultTransaction, action) => {
	const { type, payload } = action 
	switch(type) {
		case ADD_TRANSACTION:
			const { transactionId, productId, quantity, comissionCash, comissionPc, price, sellerId, buyerId, sponsorId, address1, address2, postalCode, city } = payload
			return {
				...state,
				transactionId,
				productId,
				quantity,
				sellerId,
				buyerId,
				address1,
				address2,
				postalCode,
				city
			}
		case SET_PRODUCT_BY_ID.SUCCESS:
			return {
				...state,
				price : payload.price,
				name: payload.name,
				userUid: payload.userUid,
				comissionCash: payload.comissionCash,
				comissionPc: payload.comissionPc
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
		case ADD_DELIVERY_DETAIL:
			return {
				...state,
				name: payload.name,
				address1: payload.address1,
				address2: payload.address2,
				province: payload.province,
				postalCode: payload.postalCode,
				phoneNumber: payload.phoneNumber
			}
		case ADD_PAYMENT:
			return {
				...state,
				payment: {
					...state.payment,
					type: payload.type,
					acquirer: payload.acquirer
				}
			}
		case SET_PAYMENT_IMAGE:
			return {
				...state,
				payment: {
					...state.payment,
					paymentDetail: payload
				}
			}
		default: return state
	}
}
