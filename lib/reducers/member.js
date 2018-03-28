import { REGISTER_MEMBER, VALIDATE_KEY, SIGNIN_MEMBER, SET_MEMBERS, SET_MEMBER, SET_MEMBER_PRODUCT, SET_MEMBER_PERMISSION, SET_MEMBER_BY_EMAIL, SET_MEMBERSHIP_FROM_MEMBER_BY_EMAIL } from '../actions/member'

const initialState = {
	register: false,
	keyIsValid: true,
	members:{},
	products:{},
	error: '',
	pending: false,
	addByEmail:[],
	requestMembership: []
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
				[action.payload.userUid]: action.payload.member
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
		case SET_MEMBER_PERMISSION.SUCCESS:
		return({
			...state,
			members:{
				...state.members,
				[action.payload.uid]:{
					...state.members[action.payload.uid],
					permission:action.payload.permission
				}
			}
		})
		case SET_MEMBER_BY_EMAIL:
		return({
			...state,
			addByEmail:action.payload
		})
		case SET_MEMBERSHIP_FROM_MEMBER_BY_EMAIL:
		return ({
			...state,
			requestMembership: action.payload
		})
		default: 
		return state
	}
}
