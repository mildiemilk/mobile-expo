import loadFirebase from '../database'
import store from '../store'
import { setUserByUid } from '../actions/user'

export const getUserbyUid = async (userUid) => {
	console.log("/users/" + userUid)
	const database = await loadFirebase('database')
	let user = await database
		.ref("users/" + userUid).once('value')
		.then(userData => {
			store.dispatch(setUserByUid(userData.val()))
		})

	return user
}
export const subUserWallet = async (userUid, subWallet, callback) => {
	try {
		const database = await loadFirebase('database')
		let updates = {}
		let userupdate = await database
			.ref("users/" + userUid).once('value')
			.then(userData => {
				const walletData = userData.val()
				updates["users/" + userUid + "/wallet"] = walletData.wallet - subWallet
			});
		console.log('User Update :', updates)
		await database.ref().update(updates)
		getUserbyUid(userUid)
		callback('success')
	} catch (error) {
		console.error('Status Error:', error)
		callback('fail')
	}
}