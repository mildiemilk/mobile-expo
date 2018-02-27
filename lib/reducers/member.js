import { SET_REGISTER_MEMBER, REGISTER_MEMBER, VALIDATE_KEY, SIGNIN_MEMBER } from '../actions/member'

const initialState = {
	register: false,
	keyIsValid: true,
	error: ''
}

export default (state = initialState, action) =>{
	switch(action.type) {
		case SET_REGISTER_MEMBER:
		return ({
			...state,
			register: true
		})
		case SIGNIN_MEMBER:
		return ({
			...state,
			register:false
		})
		case VALIDATE_KEY:
		return ({
			...state,
			keyIsValid: action.payload,
			error: ''
		})
		case REGISTER_MEMBER.ERROR:
		return({
			...state,
			error: action.payload
		})
		default: 
		return state
	}
}
