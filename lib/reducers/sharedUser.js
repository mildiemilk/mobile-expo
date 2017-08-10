import {
	SAVE_SHARED_USER
} from '../actions/sharedUser'

const initialState = {
	sharedUserUid: ''
}
import {REHYDRATE} from 'redux-persist/constants'

export default (state = initialState, action) => {
	const { type, payload } = action 
	switch(type) {
		case SAVE_SHARED_USER:
		return {
			...state,
			sharedUserUid: payload
		}
		case REHYDRATE:
			var incoming = action.payload.myReducer
			if (incoming) return {...state, ...incoming, specialKey: processSpecial(incoming.specialKey)}
			return state
		default: 
		return {
			initialState
		}
	}
}
