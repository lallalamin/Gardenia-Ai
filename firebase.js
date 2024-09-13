// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEZmyYDzRgMqO28TAgHO8m6h_dWMPXCQU",
  authDomain: "gardenia-ai-263c8.firebaseapp.com",
  projectId: "gardenia-ai-263c8",
  storageBucket: "gardenia-ai-263c8.appspot.com",
  messagingSenderId: "32768576784",
  appId: "1:32768576784:web:720e50cab932d182766995",
  measurementId: "G-11025WFBVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
// const analytics = getAnalytics(app);

export{
    app,
    firestore
}