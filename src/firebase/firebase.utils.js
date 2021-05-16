import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB27m3UdM5U8uMJpQ25nhWBBwt3PMPE5mg",
  authDomain: "crwn-db-d8fbd.firebaseapp.com",
  projectId: "crwn-db-d8fbd",
  storageBucket: "crwn-db-d8fbd.appspot.com",
  messagingSenderId: "606791121988",
  appId: "1:606791121988:web:6ed379a52ce99af1c29011",
  measurementId: "G-HRMDRYRSJG",
};

//create user profile in firestore when user logs in using O-auth the first time

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //return if user signsout

  console.log("creating user");
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(`error creating an user` + err.message);
    }
  }
  //check if user already exists

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
