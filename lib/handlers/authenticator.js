import { registerSuccess, registerPending, registerFailed, clearError, saveUser } from '../actions/user'
import Router from 'next/router'
import store from '../store'
import loadFirebase from '../database'

const signinWithProvider = async (providerMedia) => {
	store.dispatch(registerPending())
	const auth = await loadFirebase('auth')
	const provider = await loadFirebase(providerMedia)
	var loginUser
	loginUser = await auth.getRedirectResult()
	loginUser = await loginUser.user === null ? auth.signInWithRedirect(provider) : loginUser
	loginUser.user !== null && typeof loginUser.user !== 'undefined'?
	store.dispatch(saveUser({
		displayName: loginUser.user.displayName,
		uid : loginUser.user.uid,
		email: loginUser.user.email,
		photo: loginUser.user.photoURL
	}))
	: null
	store.dispatch(registerSuccess())
	store.dispatch(Router.push('/'))
}
export const signinWithFacebook = () => signinWithProvider('facebook')
export const signinWithGoogle = () => signinWithProvider('google')

export const registerWithEmail = async ({email, password, registerSuccess, registerPending, registerFailed})=>{
	const db = await loadFirebase('auth')
	registerPending()
	return db.createUserWithEmailAndPassword(email, password)
	.then(
		successReturn => registerSuccess()
	)
	.then(
		() => store.dispatch(Router.push('/'))
	)
	.catch(
		error =>{ 
			registerFailed(error.message)
			alert(error.errorMessage)
		}
	)
}