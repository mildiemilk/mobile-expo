import firebase from 'firebase'
import store from '../store'
import { saveUser } from '../lib/actions/user'
import config from '../database/config.json'

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

firebase.auth().onAuthStateChanged((user) => {
  if (user != null) {
    console.log("We are authenticated now!");
  }

  // Do other things
});

export const loginWithFacebook = async () => {
   return Expo.Facebook.logInWithReadPermissionsAsync(
      '139659809933718',
      { permissions: ['public_profile'] }
    ).then((
       ({type, token} ) => {
    if (type === 'success') {
      console.log('auth successseiei')
      const credential = firebase.auth.FacebookAuthProvider.credential(token)
      return firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => {
        console.log('loginWithFacebook error', error)
      });
    } else {
      throw new Error()
    }
  }))
}

export const logoutFacebook = () => {
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    console.log('logout success')
  }, (error) => {
    // An error happened.
    console.log('logout fail', error)
  });
}