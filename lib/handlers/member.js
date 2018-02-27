import store from '../store'
import { registerMemberPending, registerMemberSuccess } from '../actions/member'
import loadFirebase from '../database'
import md5 from 'md5'

export const saveMembership = async (name, password, creatorUid) => {
	store.dispatch(registerMemberPending())
	const database = await loadFirebase('database')
	const md5password = md5(password)
	const key = database.ref().child('memberships').push().key
	var updates = {}
	updates['/memberships/'+key] = JSON.parse(JSON.stringify({name,password:md5password,creatorUid}))
	// updates['/users/'+creatorUid] =JSON.parse(JSON.stringify({membershipId:key}))
	await database.ref().update(updates)
	store.dispatch(registerMemberSuccess())
}

export const addUserToMember = async(mermbershipId, userUid) => {
	const userMembership = await checkUserMembership(userUid)
	userMembership ? 'dispatch user already have membership': 'dispatch add user to member is ok'
}

export const checkUserMembership = async(userUid) => {
	const database = await loadFirebase('database')
	return await database.ref("members/"+userUid).once("value")
}
