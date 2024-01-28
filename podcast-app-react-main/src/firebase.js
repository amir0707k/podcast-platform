// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7f3C_c8pW4bnthSym7m4KjTkggEeyMgw",
  authDomain: "podcast-app-react-e1080.firebaseapp.com",
  projectId: "podcast-app-react-e1080",
  storageBucket: "podcast-app-react-e1080.appspot.com",
  messagingSenderId: "777366066665",
  appId: "1:777366066665:web:d8d9d6a56447eeec60e778",
  measurementId: "G-Q29Z4KDT3Z"
};

// const analytics = getAnalytics(app);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {auth, db, storage}

