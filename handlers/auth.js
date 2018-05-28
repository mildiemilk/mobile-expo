import firebase from 'firebase'
import store from '../store'
import config from '../database/config.json'

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export const  loginWithFacebook = async () => {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      '400894103694409',
      { permissions: ['public_profile'] }
    );
  
    if (type === 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token)
      firebase.auth().signInWithCredential(credential).catch((error) => {
      });
    }
  }