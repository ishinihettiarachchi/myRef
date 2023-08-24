// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZLw8C6VGlrqtsuiOFlrlUvPQzQk8OkOk",
  authDomain: "reference-repo.firebaseapp.com",
  projectId: "reference-repo",
  storageBucket: "reference-repo.appspot.com",
  messagingSenderId: "182464643868",
  appId: "1:182464643868:web:194506364e3c7391b770d9",
  measurementId: "G-7BT5M2PJCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);