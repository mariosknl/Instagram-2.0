// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC35wGWvi_4TIxxUWEUVm8gI_LeQ0EeTx4",
  authDomain: "insta-2-f11e9.firebaseapp.com",
  projectId: "insta-2-f11e9",
  storageBucket: "insta-2-f11e9.appspot.com",
  messagingSenderId: "58059701856",
  appId: "1:58059701856:web:640fd4170c68fe3cc80d05",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
