/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import * as firebase from 'firebase';
import {GoogleSignin} from '@react-native-community/google-signin';

const firebaseConfig = {
  apiKey: 'AIzaSyBtTsCF5BYbETiiFXnlnBo1laqyHKEkUyY',
  authDomain: 'mychat-30f37.firebaseapp.com',
  projectId: 'mychat-30f37',
  storageBucket: 'mychat-30f37.appspot.com',
  messagingSenderId: '3572488955',
  appId: '1:3572488955:web:e247a5201055df737d2e5e',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/userinfo.profile'],
  webClientId:
    '3572488955-b7ggech8nspm9bruitbf7c9dfn8uh5oj.apps.googleusercontent.com',
});

AppRegistry.registerComponent(appName, () => App);
