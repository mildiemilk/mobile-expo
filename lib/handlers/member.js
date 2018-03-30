import Router from 'next/router'
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
	setMemberPermissionSuccess,
	setMemberByEmail,
	setMembershipFromMemberByEmail,
	setAllMembershipsPending,
	setAllMembershipsSuccess,
	setAllMembershipsError
} from '../actions/member'
import { setMembershipProduct } from './product'
import loadFirebase from '../database'
import { 
	saveUserMembershipSuccess,	
	removeMembershipPending, 
	removeMembershipSuccess } from '../actions/memberships'
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
		store.dispatch(saveUserMembershipSuccess())
		Router.push('/member')
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

export const loginMembership = async(membership, password, user) =>{
	const database = await loadFirebase('database')
	const passwordValid = validatePassword(md5(password), membership.password)
	passwordValid?
		saveUserMembership(user, membership.name):
		store.dispatch(signinMemberError('พาสเวิดไม่ถูกต้องหรือ คุณเป็นสมาชิกอยู่แล้ว'))
}

const validatePassword = (password, fetchedPassword) => password === fetchedPassword

const validateUserMembership = (user, membershipName) => user.membership === membershipName ? 
	store.dispatch(signinMemberSuccess(user.membership)):store.dispatch(signinMemberError('ผู้ใช้เป็นสมาชิกของเมมเบอร์อื่นแล้ว'))

export const saveRequestedByEmailUserMembership = async (user, membershipName)  => {
	const database = await loadFirebase('database')	
	await database.ref('memberByEmails')
	.orderByChild("email")
	.equalTo(user.email)
	.once("value")
	.then(
		snapshot => snapshot.val()? Object.keys(snapshot.val()).map(key => database.ref('memberByEmails/'+key).remove()):null
	)
	await saveUserMembership(user,membershipName)
}

const saveUserMembership = async (user, membershipName) =>{
	store.dispatch(signinMemberPending())
	const database = await loadFirebase('database')	
	var updates = {}
	updates['/members/'+ user.uid] = JSON.parse(JSON.stringify({membership:membershipName, userUid:user.uid, permission:'member'}))
	updates['/users/'+user.uid+'/membership'] = membershipName
	await database.ref().update(updates).then( snap => {
		store.dispatch(signinMemberSuccess(membershipName))
		Router.push('/member')
	},
	error => store.dispatch(signinMemberError('ชื่อ memberมีคนใช้แล้ว')))

	location.reload()
}

export const removeUserMembership = async (user) => {
	store.dispatch(removeMembershipPending())
	const database = await loadFirebase('database')
	var removes = ['/members/'+user.uid, '/users/'+user.uid+'/membership']
	await database.ref('/users/'+user.uid).child('membership').remove().then( ()=>{})	
	await database.ref('/members/').child(user.uid).remove().then( snap => {
		store.dispatch(removeMembershipSuccess())
		alert('ยกเลิกสำเร็จ')
		location.reload()
	}, error=>alert(error.message))
}

export const setMembers = async(membership) => {
	if(membership){
		store.dispatch(setMembersPending())
		const database = await loadFirebase('database')
		await database
			.ref("members")
			.orderByChild("membership")
			.equalTo(membership)
			.on("value", members => Object.keys(members.val()).map(userUid => setMemberUserInfo(userUid, members.val()[userUid])))
		store.dispatch(setMembersSuccess())
	}
}

const setMemberUserInfo = async(userUid, member) => {
	store.dispatch(setMemberPending())
	const database = await loadFirebase('database')
	await database
		.ref("users")
		.orderByChild("membership")
		.equalTo(member.membership)
		.on("value", user => {
			store.dispatch(setMemberSuccess(userUid,
				{
				...member,
				...user.val()[userUid]})
			)
			return member.permission !== "freeze" ? setMembershipProduct(userUid) : null
		})
}

export const setMemberPermission = async(uid, permission)=>{
	const database = await loadFirebase('database')
	const updates = {}
	updates['/members/'+uid+'/permission'] = permission
	await database.ref().update(updates).then( snap=>{
		store.dispatch( setMemberPermissionSuccess(uid, permission) )
	},
	error => console.log('ไม่สามารถเซทmemberนี้ได้'))
} 

export const addMemberByEmail = async(email, membership) => {
	if(membership){
		const database = await loadFirebase('database')
		const key = database.ref().child('memberByEmails').push().key
		const updates = {}
		updates['/memberByEmails/'+key]= {
			email:email,
			membership:membership
		}
		await database.ref().update(updates).then(async( snap )=> {
			await getMemberByEmailsByMembership(membership)
		})
	}
}

export const getMemberByEmailsByMembership = async(membership) => {
	if(membership){
		const database =await loadFirebase('database')
		await database.ref('memberByEmails')
			.orderByChild("membership")
			.equalTo(membership)
			.once("value")
			.then( 
				snapshot => store.dispatch(setMemberByEmail(extractEmails( snapshot.val())))
			)
	}
}

export const getMemberByEmailsByEmail = async(email) => {
	const database =await loadFirebase('database')
	await database.ref('memberByEmails')
		.orderByChild("email")
		.equalTo(email)
		.once("value")
		.then( 
			snapshot => store.dispatch(setMembershipFromMemberByEmail(extractMembers( snapshot.val())))
		)
}

const extractEmails = membershipByEmail => Object.keys(membershipByEmail).map( key => membershipByEmail[key].email)
const extractMembers = membershipByEmail => Object.keys(membershipByEmail).map( key => membershipByEmail[key].membership)

export const getAllMemberships = async () => {
	store.dispatch(setAllMembershipsError())
	const database =await loadFirebase('database')
	await database.ref('memberships')
		.once("value")
		.then(
			snapshot => store.dispatch(setAllMembershipsSuccess(snapshot.val()))
		)
}