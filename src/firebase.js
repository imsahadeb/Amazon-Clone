// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvspFcW7x7H7bB2J6qI68RMTJIjPjh0qQ",
  authDomain: "clone-d95a2.firebaseapp.com",
  projectId: "clone-d95a2",
  storageBucket: "clone-d95a2.appspot.com",
  messagingSenderId: "442658078539",
  appId: "1:442658078539:web:5e2777c90a848e4ec5f2ce",
  measurementId: "G-ZS8N29WPGT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);