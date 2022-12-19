// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZ7apPp4_nFUUbkMM0jS8QiB6oaMwCDbc",
    authDomain: "reddit-clone-ef461.firebaseapp.com",
    projectId: "reddit-clone-ef461",
    storageBucket: "reddit-clone-ef461.appspot.com",
    messagingSenderId: "506234357314",
    appId: "1:506234357314:web:32e928e29dea1a8a80cfdb"
};

// Initialize Firebase for SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { firestore, auth, storage, app };