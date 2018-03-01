import { REGISTER_MEMBER, VALIDATE_KEY, SIGNIN_MEMBER, SET_MEMBERS, SET_MEMBER } from '../actions/member'

const initialState = {
	register: false,
	keyIsValid: true,
	members:{},
	error: '',
	pending: false
}

export default (state = initialState, action) =>{
	switch(action.type) {
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
		case SET_MEMBERS.PENDING:
		return({
			...state,
			pending:true
		})
		case SET_MEMBERS.SUCCESS:
		return({
			...state,
			pending:false
		})
		case SET_MEMBERS.ERROR:
		return({
			...state,
			error: payload
		})

		case SET_MEMBER.SUCCESS:
		return({
			...state,
			members:{
				...state.members,
				[action.payload.userUid]: action.payload
			}
		})

		default: 
		return state
	}
}
