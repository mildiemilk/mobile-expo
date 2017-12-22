import { SET_TOTAL, SET_PAYMENT_RESPONSE, SET_PAYMENT_IMAGE } from '../actions/payment'

const initialState = {
	total: 0,
	paymentResponse: {},
	paymentImage: ''
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
		case SET_PAYMENT_IMAGE:
		return {
			...state,
			paymentImage: payload
		}
		default: 
		return state
	}
}
