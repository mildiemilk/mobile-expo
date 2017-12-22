import { SET_TOTAL, SET_PAYMENT_RESPONSE, SET_PAYMENT_IMAGE } from '../actions/payment'
import {REHYDRATE} from 'redux-persist'

const initialState = {
	total: 0,
	paymentResponse: {}
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
		case REHYDRATE:
		var incoming = action.payload.payment
		if (incoming) return {...state, ...incoming}
		return state
		default: 
		return state
	}
}
