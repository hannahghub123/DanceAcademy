// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx5zFoepFZG1h86dLLU9neuNwdPcxn5t4",
  authDomain: "danceacademy-b92b7.firebaseapp.com",
  projectId: "danceacademy-b92b7",
  storageBucket: "danceacademy-b92b7.appspot.com",
  messagingSenderId: "389270218640",
  appId: "1:389270218640:web:c02ec4cc74d34461a67515",
  measurementId: "G-2HSQSLWKPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)