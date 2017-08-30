import { SET_TOTAL, SET_PAYMENT_RESPONSE } from '../actions/payment'
import {REHYDRATE} from 'redux-persist/constants'

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
		default: 
		return state
	}
}
