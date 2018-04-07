import asyncaction from './asyncaction'

export const REGISTER = asyncaction('REGISTER')
export const registerPending = () => ({type: REGISTER.PENDING})
export const registerFailed = error => ({type: REGISTER.ERROR,payload: {error: error}})
export const registerSuccess = () => ({type: REGISTER.SUCCESS})

export const CLEAR_ERROR = 'CLEAR_ERROR'
export const clearError = () => ({
	type: CLEAR_ERROR
})

export const SAVE_USER = asyncaction('SAVE_USER')
export const saveUserPending = () =>({type: SAVE_USER.PENDING})
export const saveUser = ({displayName, uid, email, profileImage}) => ({
	type: SAVE_USER.SUCCESS,
	payload: {name: displayName,uid,email,profileImage}
})

export const SIGN_OUT = asyncaction('SIGN_OUT')
export const signOutPending = () => ({type: SIGN_OUT.PENDING})
export const signOutSuccess = () => ({type: SIGN_OUT.SUCCESS})

export const SET_SELLER = 'SET_SELLER'
export const setSeller = sellerUid => ({type: SET_SELLER,payload: sellerUid})

export const SET_PRODUCT_OWNER = 'SET_PRODUCT_OWNER'
export const setProductOwner = productOwner => ({type: SET_PRODUCT_OWNER,payload: productOwner })

export const SAVE_PRODUCT_BUYER = 'SAVE_PRODUCT_OWNER'
export const saveProductBuyer = productOwner => ({type: SET_PRODUCT_OWNER,payload: productOwner })

export const SET_USER_WALLET = 'SET_USER_WALLET'
export const setUserWallet = wallet => ({type: SET_USER_WALLET,payload: wallet })

export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const setUserByUid = userProfile => ({
	type: SET_USER_PROFILE,
	payload: userProfile
})

export const SET_USER_MEMBER = 'SET_USER_MEMBER'
export const setUserMember = member => ({type:SET_USER_MEMBER,payload: member})

export const RESET_PENDING = 'RESET_PENDING'
export const resetPending = () =>({type:RESET_PENDING})

export const UPDATE_USER = asyncaction('UPDATE_USER')
export const updateUserPending = () => ({type:UPDATE_USER.PENDING})
export const updateUserSuccess = () => ({type:UPDATE_USER.SUCCESS})
export const updateUserErrror = () => ({type:UPDATE_USER.ERROR})
