import store from '../store'
import { 
	registerMemberPending, 
	registerMemberSuccess, 
	registerMemberError, 
	signinMemberSuccess, 
	signinMemberError 
} from '../actions/member'
import loadFirebase from '../database'
import md5 from 'md5'

export const saveMembership = async (name, password, creatorUid) => {
	store.dispatch(registerMemberPending())
	const database = await loadFirebase('database')
	const md5password = md5(password)
	var updates = {}
	updates['/memberships/'+name] = JSON.parse(JSON.stringify({name,password:md5password,creatorUid}))
	updates['/users/'+creatorUid+'/membershipId'] = name
	updates['/members/'+creatorUid] = JSON.parse(JSON.stringify({member:name, userUid:creatorUid, permission:'admin'}))
	await database.ref().update(updates).then( snap=>{
		store.dispatch(registerMemberSuccess(name))
	},
	error => store.dispatch(registerMemberError('ชื่อ memberมีคนใช้แล้ว')))
}

export const addUserToMember = async(mermbershipId, userUid) => {
	const userMembership = await checkUserMembership(userUid)
	userMembership ? 'dispatch user already have membership': 'dispatch add user to member is ok'
}

export const checkUserMembership = async(userUid) => {
	const database = await loadFirebase('database')
	return await database.ref("members/"+userUid).once("value")
}
export const loginMembership = async(membershipName, password, user) =>{
	const database = await loadFirebase('database')
	const membership = await database.ref('/memberships/'+membershipName).once('value')
	const passwordValid = validatePassword(md5(password), membership.password)
	passwordValid?
		user.membershipId ?
			validateUserMembership(user, membershipName):
			saveUserMembership(user, membershipName):
		store.dispatch(signinMemberError('password is not match'))
}

const validatePassword = (password, fetchedPassword) => password === fetchedPassword

const validateUserMembership = (user, membershipName) => user.membershipId === membershipName ? 
	store.dispatch(signinMemberSuccess(user.membershipId)):store.dispatch(signinMemberError('ผู้ใช้เป็นสมาชิกของเมมเบอร์อื่นแล้ว'))

const saveUserMembership = (user, membershipName) =>{
	updates = {}
	updates = ['/members/'+ user.uid] = JSON.parse(JSON.stringify({member:membershipName, userUid:user.uid, permission:'member'}))
	updates = ['/users/'+user.uid+'/membershipId'] = membershipName
}