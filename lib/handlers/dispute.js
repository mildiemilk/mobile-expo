import axios from 'axios'
import loadFirebase from '../database'
import store from '../store'
import { getAllDisputeAction, updateStatus, uploadImage} from '../actions/disputes'

const SEND_EMAIL_DISPUTE_RESULT_PATH = 'send-email/dispute-result'

let BASE_URL
if(process.env.NODE_ENV !== 'production') 
	BASE_URL = 'http://localhost:3000'
else BASE_URL = 'https://sharemai.com'

async function callApi (path, data) {
	console.log(`${BASE_URL}/${path}`)
	return await axios({
		method: 'POST',		
		url: `${BASE_URL}/${path}`,
		data
	});
}

export const saveDispute = async (email, dispute, callback) => {
	try {
		const database = await loadFirebase('database')
		let disputeSet = dispute
		disputeSet.status = 'pending'
		disputeSet.successDate = null
		var disputes = await database
			.ref("disputes").push().set(disputeSet)
		await sendEmailDispute(email, 'สถานะการถอนเงิน: กำลังดำเนินการ')
		callback('success')
	} catch (error) {
		console.error('Status Error:', error)
		callback('fail')
	}
}
export const snapshotToArray = snapshot => {
	let returnArr = []

	snapshot.forEach(childSnapshot => {
		let item = childSnapshot.val()
		item.key = childSnapshot.key
		returnArr.push(item)
	})
	return returnArr
}
export const getAllDisputes = async () => {
	const database = await loadFirebase('database')
	var transaction = await database
		.ref("disputes")
		.limitToLast(100)
		.once('value')
		.then(snapshot => {
			store.dispatch(getAllDisputeAction(
				snapshotToArray(snapshot)
			))
		})
}
export const updateStatusDisputes = async (key,index) => {
	try {
		const database = await loadFirebase('database')
		var updates = {}
		updates['disputes/' + key + '/status'] = 'send'
		await database.ref().update(updates)
		const email = await getEmailByDisputeId(key)
		await sendEmailDispute(email, 'สถานะการถอนเงิน: ถอนเงินสำเร็จ')
		store.dispatch(updateStatus(index))
	} catch (error) {
		console.error('Status Error:', error)
	}
}

export const addDisputeImageHandlers = async (key,index,image) => {
	try {
		const database = await loadFirebase('database')
		const storage = await loadFirebase('storage')
		var updates = {}
		await storage
		.ref('disputes')
		.child(`${Date.now()}.jpg`)
		.put(image)
		.then( snapshot => {
			store.dispatch(uploadImage({index, image: snapshot.downloadURL})),
			updates['disputes/' + key + '/disputeImage'] = snapshot.downloadURL
		})
		await database.ref().update(updates)
	} catch (error) {
		console.error('image Error:', error)
	}
}

const sendEmailDispute = async (email, text) => {
	const data = {
		email,
		text
	}
	console.log('send email dispute', data)
	return await callApi(SEND_EMAIL_DISPUTE_RESULT_PATH, data)
}

const getEmailByDisputeId = async (disputeId) => {
	let db = await loadFirebase('database')
	const user = await db.ref().child(`disputes/${disputeId}/userUid`)
	let uid
	await user.once('value', response => uid = response.val())
	return await getEmailByUserId(uid)
}

const getEmailByUserId = async (uid) => {
	let db = await loadFirebase('database')
	const email = await db.ref().child(`users/${uid}/email`)
	let value
	await email.once('value', response => value = response.val())
	return value
}