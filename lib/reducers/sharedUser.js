import {
	SAVE_SHARED_USER
} from '../actions/sharedUser'

const initialState = {
	sharedUserUid: ''
}

export default (state = initialState, action) => {
	const { type, payload } = action 
	switch(type) {
		case SAVE_SHARED_USER:
		return {
			...state,
			sharedUserUid: payload
		}
		default: 
		return {
			initialState
		}
	}
}