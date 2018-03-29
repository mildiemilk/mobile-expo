import { 
	ADD_TRANSACTION, 
	ADD_BUYER_ID,
	ADD_SELLER_ID, 
	ADD_SPONSOR_ID, 
	ADD_TRANSACTION_ID, 
	ADD_PRODUCT_DETAIL, 
	ADD_TIME_STAMP, 
	ADD_DELIVERY_DETAIL, 
	ADD_PAYMENT, 
	ADD_PRODUCT_ID,
	ADD_QUANTITY,
	MINUS_QUANTITY,
	ADD_BANK_TRANSFER
} from '../actions/transaction'
import { SET_PRODUCT_BY_ID } from '../actions/product'
import { SAVE_PAYMENT_IMAGE } from '../actions/payment'

const defaultTransaction = {
	productId:'',
	productName:'',
	quantity:1,
	comissionCash:0,
	price:0,
	sellerId:'',
	buyerId:'',
	sponsorId:'',
	timestamp:'',
	name:'',
	phoneNumber: '',
	email:'',
	address1:'',
	address2:'',
	province: '',
	postalCode: '',
	payment: {
		type: '',
		acquirer: '',
		paymentDetail: ''
	},
	status: 'pending'
}

export default (state = defaultTransaction, action) => {
	const { type, payload } = action 

	switch(type) {
		case ADD_TRANSACTION:
			const { transactionId, comissionCash, price, sellerId, buyerId, sponsorId, address1, address2, postalCode, city, email } = payload
			const productId = payload.productUid
			const quantity = payload.productQuantity
			return {
				...state,
				productId,
				quantity
			}

		case SET_PRODUCT_BY_ID.SUCCESS:
			return {
				...state,
				price : payload.price,
				productName : payload.productName,
				comissionCash: payload.comissionCash}

		case ADD_TRANSACTION_ID: return {...state,transactionId: payload}

		case ADD_PRODUCT_ID: return {...state,productId: payload}

		case ADD_SELLER_ID: return {...state,sellerId: payload}

		case ADD_SPONSOR_ID: return {...state,sponsorId: payload}

		case ADD_BUYER_ID: return {...state,	buyerId: payload}

		case ADD_PRODUCT_DETAIL:
			return {
				...state,
				comissionCash: payload.comissionCash,
				price: payload.price,
				sellerId: payload.sellerId
			}

		case ADD_TIME_STAMP:return {...state,timestamp: payload}

		case ADD_DELIVERY_DETAIL:
			return {
				...state,
				...payload
			}

		case ADD_PAYMENT:
			return {
				...state,
				payment: {
					type: payload.type || state.payment.type,
					acquirer: payload.acquirer || state.payment.acquirer,
					paymentDetail: payload.paymentDetail || ''
				}
			}
		case ADD_BANK_TRANSFER: return {...state,payment:{...state.payment, bank: payload}}

		case ADD_QUANTITY: return {...state, quantity: state.quantity+1}

		case MINUS_QUANTITY: return {...state, quantity: state.quantity > 0 ? state.quantity-1 : 0}

		case SAVE_PAYMENT_IMAGE.SUCCESS:
		return {
			...state,
			payment: {
				...state.payment,
				paymentImage: action.payload
			}
		}
		default: return state
	}
}
