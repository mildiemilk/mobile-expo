import loadFirebase from '../database'
import store from '../store'
import { getAllDisputeAction, updateStatus, uploadImage} from '../actions/disputes'

export const saveDispute = async (dispute, callback) => {
	try {
		const database = await loadFirebase('database')
		let disputeSet = dispute
		disputeSet.status = 'pending'
		disputeSet.successDate = null
		var disputes = await database
			.ref("disputes").push().set(disputeSet)
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
console.log('Arr', returnArr)
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
	console.log('image-->', image)
	await storage
	.ref('disputes')
	.child(`${Date.now()}.jpg`)
	.put(image)
	.then( snapshot => {
		console.log('snapshot', snapshot),
		store.dispatch(uploadImage({index, image: snapshot.downloadURL})),
		updates['disputes/' + key + '/disputeImage'] = snapshot.downloadURL
	}
	)
	await database.ref().update(updates)
} catch (error) {
	console.error('image Error:', error)
}
}