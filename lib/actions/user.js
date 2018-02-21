import asyncAction from './asyncaction'
import wallet from '../reducers/wallet'

export const REGISTER_PENDING = 'REGISTER_PENDING'
export const registerPending = () => ({
	type: REGISTER_PENDING
})

export const REGISTER_FAILED = 'REGISTER_FAILED'
export const registerFailed = (error) => {
	return({
	type: REGISTER_FAILED,
	payload: {
		error: error
	}
})}

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const registerSuccess = () => ({
	type: REGISTER_SUCCESS
})

export const CLEAR_ERROR = 'CLEAR_ERROR'
export const clearError = () => ({
	type: CLEAR_ERROR
})

export const SAVE_USER = asyncAction('SAVE_USER')
export const saveUserPending = () =>({type: SAVE_USER.PENDING})
export const saveUser = ({displayName, uid, email, photoURL}) => ({
	type: SAVE_USER.SUCCESS,
	payload: {
		name: displayName,
		uid: uid,
		email: email,
		photo: photoURL
	}
})

export const SIGN_OUT_PENDING = 'SIGN_OUT_PENDING'
export const signOutPending = () => ({
	type: SIGN_OUT_PENDING
})

export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS'
export const signOutSuccess = () => ({
	type: SIGN_OUT_SUCCESS
})

export const SET_SELLER = 'SET_SELLER'
export const setSeller = sellerUid => ({
	type: SET_SELLER,
	payload: sellerUid
})

export const SET_PRODUCT_OWNER = 'SET_PRODUCT_OWNER'
export const setProductOwner = productOwner => ({
	type: SET_PRODUCT_OWNER,
	payload: productOwner 
})

export const SAVE_PRODUCT_BUYER = 'SAVE_PRODUCT_OWNER'
export const saveProductBuyer = productOwner => ({
	type: SET_PRODUCT_OWNER,
	payload: productOwner 
})
export const SET_USER_WALLET = 'SET_USER_WALLET'
export const setUserWallet = wallet => ({
	type: SET_USER_WALLET,
	payload: wallet 
})
export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const setUserByUid = ({address,name,phone,transactionIds,wallet}) => ({
	type: SET_USER_PROFILE,
	payload: {
		address,name,phone,transactionIds,wallet
	}
})

export const SET_USER_MEMBER = 'SET_USER_MEMBER'
export const setUserMember = member => ({
	type:SET_USER_MEMBER,
	payload: member
})
