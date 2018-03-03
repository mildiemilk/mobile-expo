import { REGISTER_MEMBER, VALIDATE_KEY, SIGNIN_MEMBER, SET_MEMBERS, SET_MEMBER, SET_MEMBER_PRODUCT } from '../actions/member'

const initialState = {
	register: false,
	keyIsValid: true,
	members:{},
	products:{},
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
		case SET_MEMBER_PRODUCT.SUCCESS:
		return({
			...state,
			products:{
				...state.products,
				[action.payload.key]:action.payload.product
			}
		})
		default: 
		return state
	}
}
