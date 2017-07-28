import { 
	registerSuccess, 
	registerPending, 
	registerFailed, 
	clearError, 
	saveUser,
	signOutPending,
	signOutSuccess } from '../actions/user'
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
	const { displayName, uid, email, photoURL} = loginUser.user
	loginUser.user !== null && typeof loginUser.user !== 'undefined'?
	store.dispatch(saveUser({
		displayName: displayName,
		uid : uid,
		email: email,
		photo: photoURL
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

export const signOut = async () => {
	store.dispatch(signOutPending())
	const auth = await loadFirebase('auth')
	var signOutResult = await auth.signOut()
	store.dispatch(signOutSuccess())
}
