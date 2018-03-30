import { SET_ALL_MEMBERSHIPS } from '../actions/member'
import { SET_CHOSEN_MEMBERSHIP, SAVE_USER_MEMBERHSHIP_SUCCESS, RESET_MEMBERSHIP_SUCCESS, SET_NEW_MEMBERSHIP_PASSWORD } from '../actions/memberships'

const initialState = {
    memberships: {},
    chosenMembership:{},
    pending: false,
    success: false
}

export default (state=initialState, {type,payload}) => {
    switch(type){
        case SET_NEW_MEMBERSHIP_PASSWORD.PENDING:
        case SET_ALL_MEMBERSHIPS.PENDING:
            return {...state, pending:true}
        case SET_ALL_MEMBERSHIPS.SUCCESS: 
            return {...state, memberships:payload, pending: false}
        case SET_ALL_MEMBERSHIPS.ERROR:
            return {...state, memberships: {}, pending:false}
        case SET_CHOSEN_MEMBERSHIP:
            return {...state, chosenMembership:payload}
        case SET_NEW_MEMBERSHIP_PASSWORD.SUCCESS:
        case SAVE_USER_MEMBERHSHIP_SUCCESS:
            return {...state, success:true, pending:false}
        case RESET_MEMBERSHIP_SUCCESS:
            return {...state, success:false, pending:false}
        default:
            return state
    }
}
