import firebase from 'firebase'
import config from '../../asset/json/firebaseConfig.json'

export default async function loadFirebase(mode) {
  try {
    firebase.initializeApp(config.test)
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)
    }
  }
  var firebaseMode
  switch (mode) {
    case 'auth':
      firebaseMode = firebase.auth()
      break
    case 'facebook':
      firebaseMode = new firebase.auth.FacebookAuthProvider()
      break
    case 'google':
      firebaseMode = new firebase.auth.GoogleAuthProvider()
      break
    case 'database':
      firebaseMode = firebase.database()
      break
    case 'storage':
      firebaseMode = firebase.app().storage('gs://shopnsharetest.appspot.com/')
    default:
      break
  }
  return firebaseMode
}
