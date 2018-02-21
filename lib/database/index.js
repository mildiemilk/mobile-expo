import firebase from 'firebase'

const config = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.FIREBASE_DATABASEURL,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID
}

export default async function loadFirebase(mode) {
  console.log('.enc', process.env)
  try {
    firebase.initializeApp(config)
  } catch (err) {
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
    case 'firestore':
      firebaseMode = firebase.firestore()
      break
    case 'storage':
      firebaseMode = firebase.app().storage('gs://shopnsharetest.appspot.com/')
    default:
      break
  }
  return firebaseMode
}
