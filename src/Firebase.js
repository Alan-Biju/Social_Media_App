import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
 var firebaseConfig = {
		apiKey: 'AIzaSyAAKwNecjpRVGNBMERj2IJHufB511NpN2U',
		authDomain: 'social-media-app-12e7f.firebaseapp.com',
		projectId: 'social-media-app-12e7f',
		storageBucket: 'social-media-app-12e7f.appspot.com',
		messagingSenderId: '106150020952',
		appId: '1:106150020952:web:24a0a850ec0b79ed3ac72d',
 };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
const db = firebase.firestore();

export default db;
