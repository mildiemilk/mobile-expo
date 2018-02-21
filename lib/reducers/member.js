import { REGISTER_MEMBER, SIGNIN_MEMBER } from '../actions/member'

const initialState = {
	register: false
}

export default (state = initialState, action) =>{
	switch(action.type) {
		case REGISTER_MEMBER:
		return ({
			...state,
			register: true
		})
		case SIGNIN_MEMBER:
		return ({
			...state,
			register:false
		})
		default: 
		return state
	}
}
