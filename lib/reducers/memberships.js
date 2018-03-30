import { SET_ALL_MEMBERSHIPS } from '../actions/member'
import { SET_CHOSEN_MEMBERSHIP, SAVE_USER_MEMBERHSHIP_SUCCESS, RESET_MEMBERSHIP_SUCCESS } from '../actions/memberships'

const initialState = {
    memberships: {},
    chosenMembership:{},
    pending: false,
    success: false
}

export default (state=initialState, {type,payload}) => {
    switch(type){
        case SET_ALL_MEMBERSHIPS.PENDING:
        return {...state, pending:true}
        case SET_ALL_MEMBERSHIPS.SUCCESS: 
        return {...state, memberships:payload, pending: false}
        case SET_ALL_MEMBERSHIPS.ERROR:
        return {...state, memberships: {}, pending:false}
        case SET_CHOSEN_MEMBERSHIP:
        return {...state, chosenMembership:payload}
        case SAVE_USER_MEMBERHSHIP_SUCCESS:
        return {...state, success:true}
        case RESET_MEMBERSHIP_SUCCESS:
        return {...state, success:false}
        default:
        return state
    }
}
