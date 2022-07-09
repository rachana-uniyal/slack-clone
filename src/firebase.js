import {initializeApp}  from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-wL07zxK6zB2RAxWof-ukjds8K8dkGIw",
  authDomain: "slack-clone-fe934.firebaseapp.com",
  projectId: "slack-clone-fe934",
  storageBucket: "slack-clone-fe934.appspot.com",
  messagingSenderId: "985275772131",
  appId: "1:985275772131:web:2ca2a4357dc68db9d529d6"
};

const firebaseApp =  initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider();

export {db, auth, provider };







// const firebaseConfig = {
//   apiKey: "AIzaSyB-wL07zxK6zB2RAxWof-ukjds8K8dkGIw",
//   authDomain: "slack-clone-fe934.firebaseapp.com",
//   projectId: "slack-clone-fe934",
//   storageBucket: "slack-clone-fe934.appspot.com",
//   messagingSenderId: "985275772131",
//   appId: "1:985275772131:web:2ca2a4357dc68db9d529d6"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig)
// const db = firebaseApp.firestore();
// const auth = firebase.auth;
// const provider = new firebase.auth.GoogleAuthProvider();

// export  default auth 
// export { provider }
// export { db } 
