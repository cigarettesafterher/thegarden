// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCORqHx5X9DElnJ-tODtTNJmbyvu94i5TQ",
    authDomain: "eljardincigsafterher.firebaseapp.com",
    projectId: "eljardincigsafterher",
    storageBucket: "eljardincigsafterher.appspot.com",
    messagingSenderId: "524810506068",
    appId: "1:524810506068:web:30d197489634cf92f502c1",
    measurementId: "G-C2CB2VSPVX"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };