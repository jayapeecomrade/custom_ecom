import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBt_ljm4f4qdSarIgETdhB4kRfESWDOjss",
  authDomain: "custom-ecom-project.firebaseapp.com",
  databaseURL: "https://custom-ecom-project.firebaseio.com",
  projectId: "custom-ecom-project",
  storageBucket: "custom-ecom-project.appspot.com",
  messagingSenderId: "731181585958",
  appId: "1:731181585958:web:7b261a097bc80887d8f8e7",
  measurementId: "G-E54HYG12YE"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;