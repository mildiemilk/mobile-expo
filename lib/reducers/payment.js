import { SET_TOTAL, SET_PAYMENT_RESPONSE, SAVE_PAYMENT_IMAGE, SAVE_PAYMENT } from '../actions/payment'

const initialState = {
	total: 0,
	paymentResponse: {},
	paymentImage: '',
	pending: false,
	startedUploadImage: false
}

export default (state = initialState, action) =>{
	const { type, payload } = action
	switch(type) {
		case SET_TOTAL:
		return {
			...state,
			total: payload.total
		}
		case SET_PAYMENT_RESPONSE: 
		return {
			...state,
			paymentResponse: payload.paymentResponse
		}
		case SAVE_PAYMENT_IMAGE.PENDING:
		return {
			...state,
			pending: true,
			startedUploadImage: true
		}
		case SAVE_PAYMENT_IMAGE.SUCCESS:
		return {
			...state,
			pending:false
		}
		case SAVE_PAYMENT.PENDING:
		return {
			...state,
			pending: true
		}
		case SAVE_PAYMENT.SUCCESS:
		return {
			...state,
			pending:false
		}
		default: 
		return state
	}
}
