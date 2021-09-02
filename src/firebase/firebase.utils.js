import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import { initializeApp } from 'firebase/app';

// import firebase from 'firebase/app';
// // In order to keep your code functioning after updating your dependency
// // from v8 to v9 beta, change your import statements to use the "compat" version
// // of each import.
// // fix here https://stackoverflow.com/questions/68946446/how-do-i-fix-a-firebase-9-0-import-error-attempted-import-error-firebase-app

const config = {
  apiKey: 'AIzaSyAgVN1OwxNXGktJEMawer8MsnMF7CUjawc',
  authDomain: 'crwn-db-42.firebaseapp.com',
  projectId: 'crwn-db-42',
  storageBucket: 'crwn-db-42.appspot.com',
  messagingSenderId: '109997000994',
  appId: '1:109997000994:web:254e0b9594be9221c87d7b',
  measurementId: 'G-RH0H8YV25V',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if (!userAuth) means if the userAuth object does NOT exist, if this is not false
  if (!userAuth) return; //just return, dont do anything

  // const userRef = firestore.doc('users/123434sdf');

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // console.log(firestore.doc('users/123434sdf'));

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
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

//..........................................................
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   blahblahblah
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//''''''''''''''''''''''''''''
// const app = initializeApp(config);
