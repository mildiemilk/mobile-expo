import loadFirebase from '../database'
import store from '../store'
import {getAllDisputeAction} from '../actions/disputes'

export const saveDispute = async (dispute,callback) =>{
	try {
        const database = await loadFirebase('database');
        let disputeSet = dispute;
        disputeSet.status = 'pending';
        disputeSet.successDate = null;
		var disputes = await database
		.ref("disputes").push().set(disputeSet);
		callback('success');
	  } catch (error) {
		console.error('Status Error:',error);
		callback('fail');
	  }
}
export const snapshotToArray = snapshot => {
	let returnArr = [];

	snapshot.forEach(childSnapshot => {
			let item = childSnapshot.val(); 
			item.key = childSnapshot.key;
			returnArr.push(item);
	});

	return returnArr;
};
export const getAllDisputes = async () => {
	const database = await loadFirebase('database')
	var transaction = await database
		.ref("disputes")
		.limitToLast(100)
		.once('value')
		.then( snapshot => {
			store.dispatch(getAllDisputeAction(
				snapshotToArray(snapshot)
			))
		})
}
export const updateStatusDisputes = async (key,val,callback) =>{
	try {
		const database = await loadFirebase('database');
		var updates = {};
		updates['disputes/' + key+'/status'] = val;
		await database.ref().update(updates);
		callback('success');
	  } catch (error) {
		console.error('Status Error:',error);
		callback('fail');
	  }
}