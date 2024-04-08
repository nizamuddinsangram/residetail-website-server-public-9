// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-eh4jHO-HohAHAxNq2hXe7CWj7XZYYjk",
  authDomain: "residential-website-9eea9.firebaseapp.com",
  projectId: "residential-website-9eea9",
  storageBucket: "residential-website-9eea9.appspot.com",
  messagingSenderId: "640601035855",
  appId: "1:640601035855:web:3bbc24c0e5c2b4a24d063a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
