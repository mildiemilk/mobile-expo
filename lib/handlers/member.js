import store from '../store'
import { 
	registerMemberPending, 
	registerMemberSuccess, 
	registerMemberError, 
	signinMemberSuccess, 
	signinMemberError,
	setMembersPending,
	setMembersSuccess,
	getMembersError, 
	signinMemberPending,
	setMemberError,
	setMemberPending,
	setMemberSuccess,
	setMemberProductPending,
	setMemberPermissionSuccess
} from '../actions/member'
import { setMembershipProduct } from './product'
import loadFirebase from '../database'
import md5 from 'md5'

export const saveMembership = async (name, password, creatorUid) => {
	store.dispatch(registerMemberPending())
	const database = await loadFirebase('database')
	const md5password = md5(password)
	var updates = {}
	updates['/memberships/'+name] = JSON.parse(JSON.stringify({name,password:md5password,creatorUid}))
	updates['/users/'+creatorUid+'/membership'] = name
	updates['/members/'+creatorUid] = JSON.parse(JSON.stringify({membership:name, userUid:creatorUid, permission:'admin'}))
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
	const passwordValid = validatePassword(md5(password), membership.val().password)
	passwordValid || user.membership ?
		saveUserMembership(user, membershipName):
		store.dispatch(signinMemberError('พาสเวิดไม่ถูกต้องหรือ คุณเป็นสมาชิกอยู่แล้ว'))
}

const validatePassword = (password, fetchedPassword) => password === fetchedPassword

const validateUserMembership = (user, membershipName) => user.membership === membershipName ? 
	store.dispatch(signinMemberSuccess(user.membership)):store.dispatch(signinMemberError('ผู้ใช้เป็นสมาชิกของเมมเบอร์อื่นแล้ว'))

const saveUserMembership = async (user, membershipName) =>{
	store.dispatch(signinMemberPending())
	const database = await loadFirebase('database')	
	var updates = {}
	updates['/members/'+ user.uid] = JSON.parse(JSON.stringify({membership:membershipName, userUid:user.uid, permission:'member'}))
	updates['/users/'+user.uid+'/membership'] = membershipName
	await database.ref().update(updates).then( snap=>{
		store.dispatch(signinMemberSuccess(membershipName))
	},
	error => store.dispatch(signinMemberError('ชื่อ memberมีคนใช้แล้ว')))
}

export const setMembers = async(membership) => {
	console.log('membership',membership)
	store.dispatch(setMembersPending())
	const database = await loadFirebase('database')
	await database
		.ref("members")
		.orderByChild("membership")
		.equalTo(membership)
		.on("value", members => Object.keys(members.val()).map(key => setMemberUserInfo(members.val()[key])))
	store.dispatch(setMembersSuccess())
}

const setMemberUserInfo = async(member) => {
	store.dispatch(setMemberPending())
	const database = await loadFirebase('database')
	await database
		.ref("users")
		.orderByChild("membership")
		.equalTo(member.membership)
		.on("value", user => {
			store.dispatch(setMemberSuccess({
				...member,
				...user.val()[member.userUid]})
			)
			return setMembershipProduct(member.userUid)
		})
}

export const setMemberPermission = async(uid, permission)=>{
	const database = await loadFirebase('database')
	const updates = {}
	updates['/members/'+uid] = permission
	await database.ref().update(updates).then( snap=>{
		store.dispatch( setMemberPermissionSuccess(uid, permission) )
	},
	error => console.log('ไม่สามารถเซทmemberนี้ได้'))
} 
