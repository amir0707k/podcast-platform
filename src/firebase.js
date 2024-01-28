// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0cdN7-OIeAWpLJ0VpI_sAQ5InsqjSIQw",
  authDomain: "podcast-react-app-rec-7abf8.firebaseapp.com",
  projectId: "podcast-react-app-rec-7abf8",
  storageBucket: "podcast-react-app-rec-7abf8.appspot.com",
  messagingSenderId: "205976415289",
  appId: "1:205976415289:web:177592cf3c6fe95e8cb1e8",
  measurementId: "G-7HNMFMSCLB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };
