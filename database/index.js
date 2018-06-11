import firebase from 'firebase'
import config from './config.json'
 
export default async () => {
    try {
      firebase.initializeApp(config)
    } catch (err) {
      if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
      }
    }
    return firebase
}
  