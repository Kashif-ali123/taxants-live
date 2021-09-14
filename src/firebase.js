import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBhlWIDrDYRvmumQoomX0uYdLAy3H4tNxc",
    authDomain: "taxants-62c41.firebaseapp.com",
    projectId: "taxants-62c41",
    storageBucket: "taxants-62c41.appspot.com",
    messagingSenderId: "805822246037",
    appId: "1:805822246037:web:b7f6e36c069f78dd7bbf9c",
    measurementId: "G-DJFVFSXPSS"
  };
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;