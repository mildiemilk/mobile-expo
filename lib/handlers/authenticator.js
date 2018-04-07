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
	var loginUser
	loginUser = await auth.getRedirectResult()
	loginUser = await loginUser.user === null ? auth.signInWithRedirect(provider) : loginUser
	loginUser.user !== null && typeof loginUser.user !== 'undefined'?
	addUserToDatabaseAndStore(loginUser.additionalUserInfo.profile.id, loginUser.credential.accessToken, loginUser.user.displayName, loginUser.user.uid, loginUser.user.email)
	: null
}
export const addUserToDatabaseAndStore = async (profileID, accessToken, displayName, uid, email) =>{
	const profileImage = 'https://graph.facebook.com/'+ profileID +'/picture?access_token='+ accessToken
	const database = await loadFirebase('database')
	var updates = {}
	database.ref('users/'+uid).once('value').then(user => {
		if(!user.val()){
			updates['/users/'+ uid + '/name/'] = displayName
			updates['/users/'+ uid + '/email/'] = email 
			updates['/users/' + uid + '/profileImage/'] = profileImage
			database.ref().update(updates)
			store.dispatch(saveUser({
				displayName,
				uid,
				email,
				profileImage
			}))
		} else {
			store.dispatch(saveUser({
				displayName: user.val().name,
				uid: uid,
				email: user.val().email,
				profileImage:profileImage
			}))
		}
	})
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
