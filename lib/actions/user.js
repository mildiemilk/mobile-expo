import asyncAction from './asyncaction'

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
