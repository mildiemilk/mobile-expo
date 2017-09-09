import { REHYDRATE } from 'redux-persist/constants'
import { ADD_TRANSACTION } from '../actions/transaction'

export default (state = {}, action) => {
	const { type, payload } = action 
	switch(type) {
		case ADD_TRANSACTION:
			return {
				...state,
				[payload.productId]: payload
			}
		case REHYDRATE:
			var incoming = action.payload.transaction
			if (incoming) return {...state, ...incoming}
			return state
		default: return state
	}
}
