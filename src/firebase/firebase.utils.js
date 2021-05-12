import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = 
    {
        apiKey: "AIzaSyB27m3UdM5U8uMJpQ25nhWBBwt3PMPE5mg",
        authDomain: "crwn-db-d8fbd.firebaseapp.com",
        projectId: "crwn-db-d8fbd",
        storageBucket: "crwn-db-d8fbd.appspot.com",
        messagingSenderId: "606791121988",
        appId: "1:606791121988:web:6ed379a52ce99af1c29011",
        measurementId: "G-HRMDRYRSJG"
      }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
