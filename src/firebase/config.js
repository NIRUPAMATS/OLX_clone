import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWFRrOmt2xZYExDKbgYboFu9N0_AZ7d74",
    authDomain: "olx-demo-b621d.firebaseapp.com",
    projectId: "olx-demo-b621d",
    storageBucket: "olx-demo-b621d.appspot.com",
    messagingSenderId: "689850930921",
    appId: "1:689850930921:web:5a5001b22516cd58330278",
    measurementId: "G-FXQVS53GCQ"
  };
export default firebase.initializeApp(firebaseConfig)