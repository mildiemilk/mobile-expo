import asyncaction from './asyncaction'

export const REGISTER_MEMBER = asyncaction('REGISTER_MEMBER')
export const registerMemberPending = () => ({type:REGISTER_MEMBER.PENDING})
export const registerMemberSuccess = () => ({type:REGISTER_MEMBER.SUCCESS})
export const registerMemberError = message => ({type:REGISTER_MEMBER.ERROR, payload:message})


export const SIGNIN_MEMBER = asyncaction('SIGNIN_MEMBER')
export const signinMemberPending = () => ({type:SIGNIN_MEMBER.PENDING})
export const signinMemberSuccess = membershipName => ({type:SIGNIN_MEMBER.SUCCESS,payload:membershipName})
export const signinMemberError = () => ({type:SIGNIN_MEMBER.ERROR})

export const VALIDATE_KEY = 'VALIDATE_KEY'
export const validateKey = key =>({type:VALIDATE_KEY ,payload: key})

export const SET_MEMBERS = asyncaction('SET_MEMBERS')
export const setMembersPending = () => ({type:SET_MEMBERS.PENDING})
export const setMembersSuccess = members => ({type:SET_MEMBERS.SUCCESS, payload: members })
export const setMembersError = error => ({type:SET_MEMBERS.ERROR, payload: error})

export const SET_MEMBER = asyncaction('SET_MEMBER')
export const setMemberPending = () => ({type:SET_MEMBER.PENDING})
export const setMemberSuccess = (userUid, member) => ({type:SET_MEMBER.SUCCESS, payload:{userUid, member} })
export const setMemberError = error => ({type:SET_MEMBER.ERROR, payload: error})

export const SET_MEMBER_PRODUCT = asyncaction('SET_MEMBER_PRODUCT')
export const setMemberProductPending = () => ({type: SET_MEMBER_PRODUCT.PENDING})
export const setMemberProductSuccess = (key, product) => ({type: SET_MEMBER_PRODUCT.SUCCESS,payload: {key,product}})
export const setMemberProductError = () => ({type: SET_MEMBER_PRODUCT.ERROR})

export const SET_MEMBER_PERMISSION = asyncaction('SET_MEMBER_PERMISSION')
export const setMemberPermissionPending = () => ({type: SET_MEMBER_PERMISSION.PENDING})
export const setMemberPermissionSuccess = (uid, permission) => ({type: SET_MEMBER_PERMISSION.SUCCESS,payload: {uid,permission}})
export const setMemberPermissionError = () => ({type: SET_MEMBER_PERMISSION.ERROR})

export const SET_MEMBER_BY_EMAIL = 'SET_MEMBER_BY_EMAIL'
export const setMemberByEmail = (emails) => ({type:SET_MEMBER_BY_EMAIL, payload:emails})
