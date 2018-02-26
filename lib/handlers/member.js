import store from '../store'


export const saveMembership = async (name, password, creatorUid) => {
	store.dispatch(REGISTER_MEMBER)
	const database = await loadFirebase('database')
	const key = database.ref().child('memberships'.push().key)
	var updates = {}
	updates['/memberships/'+key] = JSON.parse(JSON.stringify({name,password,creatorUid}))
}

export const addUserToMember = async(mermbershipId, userUid) => {
	const userMembership = await checkUserMembership(userUid)
	userMembership ? 'dispatch user already have membership': 'dispatch add user to member is ok'
}

export const checkUserMembership = async(userUid) => {
	const database = await loadFirebase('database')
	return await database.ref("members/"+userUid).once("value")
}
