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
