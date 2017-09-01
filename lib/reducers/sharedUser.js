import {REHYDRATE} from 'redux-persist/constants'
import {
	SET_SELLER
} from '../actions/user'

const initialState = {
	sharedUserUid: ''
}

export default (state = initialState, action) => {
	const { type, payload } = action 
	switch(type) {
		case SET_SELLER:
		return {
			...state,
			sharedUserUid: payload
		}
		case REHYDRATE:
			var incoming = action.payload.sharedUser
			if (incoming) return {...state, ...incoming}
			return state
		default: 
		return {
			...initialState
		}
	}
}
