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

const signinWithProvider = async ( providerMedia ) => {
	store.dispatch(registerPending())
	const auth = await loadFirebase('auth')
	const provider = await loadFirebase(providerMedia)
	// var loginUser
	// loginUser = await auth.getRedirectResult()
	// loginUser = await loginUser.user === null 
	// ? await auth.signInWithPopup(provider).then(loginUser => 
	// 	addUserToDatabaseAndStore(loginUser.user.displayName, loginUser.user.uid, loginUser.user.displayName, loginUser.user.email, loginUser.user.photoURL)
	// ): loginUser
	// if(loginUser.user !== null && typeof loginUser.user !== 'undefined'){
	// 	await addUserToDatabaseAndStore(loginUser.user.displayName, loginUser.user.uid, loginUser.user.displayName, loginUser.user.email, loginUser.user.photoURL)
	// }
	await auth.signInWithPopup(provider).then(loginUser => 
		addUserToDatabaseAndStore(loginUser.additionalUserInfo.profile.id, loginUser.credential.accessToken, loginUser.user.displayName, loginUser.user.uid, loginUser.user.email)
	)
}
export const addUserToDatabaseAndStore = async (profileID, accessToken, displayName, uid, email) =>{
	const profileImage = 'https://graph.facebook.com/'+ profileID +'/picture?access_token='+ accessToken
	await store.dispatch(saveUser({
		displayName,
		uid,
		email,
		profileImage
	}))
	const database = await loadFirebase('database')
	const data = 
	{ 
		name: displayName,
		email,
		profileImage
	}
	var updates = {}
	updates['/users/'+ uid] = data
	await database.ref().update(updates)
	Router.push('/profile')
}
export const signinWithFacebook = (page) => signinWithProvider('facebook')

export const signinWithGoogle = () => signinWithProvider('google')

export const registerWithEmail = async (email, password)=>{
	const db = await loadFirebase('auth')
	registerPending()
	return db.createUserWithEmailAndPassword(email, password)
	.then(
		successReturn => store.dispatch(registerSuccess())
	)
	.then(
		() => {
			alert('register success')
			Router.push('/')
		}
	)
	.catch(
		error =>{ 
			registerFailed(error.code)
			alert(error.message)
		}
	)
}

export const signInWithEmail = async (email, password)=>{
	const db = await loadFirebase('auth')
	registerPending()
	return db.signInWithEmailAndPassword(email, password)
	.then(
		successReturn => store.dispatch(registerSuccess())
	)
	.then(
		() => alert('sign in !')
	)
	.then(
		() => Router.push('/')
	)
	.catch(
		error =>{ 
			registerFailed(error.code)
			alert(error.message)
		}
	)
}

export const signOut = async () => {
	store.dispatch(signOutPending())
	const auth = await loadFirebase('auth')
	var signOutResult = await auth.signOut()
	await store.dispatch(signOutSuccess())
	window.location.href = '/login'
}
