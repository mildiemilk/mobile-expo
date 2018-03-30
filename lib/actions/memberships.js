import asyncaction from './asyncaction'

export const SET_CHOSEN_MEMBERSHIP = 'SET_CHOSEN_MEMBERSHIP'
export const setChosenMembership = chosenMembership => ({
    type: SET_CHOSEN_MEMBERSHIP,
    payload: chosenMembership
})

export const SAVE_USER_MEMBERHSHIP_SUCCESS = 'SAVE_USER_MEMBERHSHIP_SUCCESS'
export const saveUserMembershipSuccess = () =>({type:SAVE_USER_MEMBERHSHIP_SUCCESS})

export const RESET_MEMBERSHIP_SUCCESS = 'RESET_MEMBERSHIP_SUCCESS'
export const resetMembershipSuccess = () => ({type:RESET_MEMBERSHIP_SUCCESS})

export const REMOVE_MEMBERSHIP = asyncaction('REMOVE_MEMBERSHIP')
export const removeMembershipPending = () =>({type:REMOVE_MEMBERSHIP.PENDING})
export const removeMembershipSuccess = () =>({type:REMOVE_MEMBERSHIP.SUCCESS})