import asyncaction from './asyncaction'

export const REGISTER_MEMBER = asyncaction('REGISTER_MEMBER')
export const registerMemberPending = () => ({type:REGISTER_MEMBER.PENDING})
export const registerMemberSuccess = () => ({type:REGISTER_MEMBER.SUCCESS})
export const registerMemberError = () => ({type:REGISTER_MEMBER.ERROR})


export const SIGNIN_MEMBER = asyncaction('SIGNIN_MEMBER')
export const signinMemberPending = () => ({type:SIGNIN_MEMBER.PENDING})
export const signinMemberSuccess = () => ({type:SIGNIN_MEMBER.SUCCESS})
export const signinMemberError = () => ({type:SIGNIN_MEMBER.ERROR})


