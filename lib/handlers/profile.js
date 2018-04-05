import store from '../store'
import { getProfile as getProfileAction,
         getTable as getTableAction,
         addProfileDetail as addProfileDetailAction,
         addProfileImage as addProfileImageAction,
        } from '../actions/profile'
import { updateUserPending, updateUserSuccess} from '../actions/user'
import loadFirebase from '../database'
import Router from 'next/router'
import { async } from '@firebase/util';
import { updateStatus } from '../actions/disputes';

export const getProfile = async (userUid) => {
  let db = await loadFirebase('database')
  const user = await db.ref(`users/${userUid}`).once('value').then(response => response.val())
  await store.dispatch(getProfileAction(user))
}

export const getTable = async (transactionIds) => {
  let db = await loadFirebase('database')
  const item = await transactionIds? transactionIds.map(transactionId => db.ref(`transactions/${transactionId}`).once('value')
  .then(response => {
    return {
      ...response.val(),
      transactionId
    }
  })) :null
  if(item)
  Promise.all(item).then(res => store.dispatch(getTableAction(res)))
}

export const addProfileDetail = async(profile, userUid) => {
  store.dispatch(updateUserPending())
  const database = await loadFirebase('database')
  store.dispatch((addProfileDetailAction(profile)))
  console.log('profile=',profile)
  const updates = {}
  Object.keys(profile).map( key => {
    updates[`/users/${userUid}/${key}`] = profile[key]
  } )
	await database.ref().update(updates).then( snap => {
    store.dispatch(updateUserSuccess())
		Router.push('/profile')
  })
}


export const addProfileImage = async(image) => {
  const storage = await loadFirebase('storage')
	await storage
		.ref('profilePhotos')
		.child(`${Date.now()}.jpg`)
    .put(image)
    .then( snapshot => store.dispatch(addProfileImageAction(snapshot.downloadURL)))
}

export const updateUserBankAccount = async(userUid, bankName, bankAccountName, bankAccountNumber) => {
  store.dispatch(updateUserPending())
  const database = await loadFirebase('database')
  var updates = {} 
  updates['/users/'+userUid+'/bankName'] = bankName
  updates['/users/'+userUid+'/bankAccountName'] = bankAccountName
  updates['/users/'+userUid+'/bankAccountNumber'] = bankAccountNumber
	await database.ref().update(updates).then( snap => {
		store.dispatch(updateUserSuccess())
		Router.push('/profile')
	})
}
