import loadFirebase from '../database'
import store from '../store'
import { setWallet } from '../actions/wallet'

const getWallet = async (userUid, walletOwner) => {
	const database = await loadFirebase('database')
	let wallet = await database
		.ref("/wallet/"+userUid).once('value')
		.then( wallet => {
			store.dispatch(setWallet(walletOwner, wallet.balance, userUid))
			return wallet.balance
		})
	return wallet
}
