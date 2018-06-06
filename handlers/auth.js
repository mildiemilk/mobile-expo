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

export const  loginWithFacebook = async () => {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      '400894103694409',
      { permissions: ['public_profile'] }
    );
    if (type === 'success') {
      const credential = await firebase.auth.FacebookAuthProvider.credential(token)
      firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => {});
    }
  }