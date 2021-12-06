// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4XRrfeGggREnkk0LcA1oswhx5O4jI2I8",
  authDomain: "insta20-faccd.firebaseapp.com",
  projectId: "insta20-faccd",
  storageBucket: "insta20-faccd.appspot.com",
  messagingSenderId: "50878236144",
  appId: "1:50878236144:web:4d9d1a6a142e2241a64935",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
