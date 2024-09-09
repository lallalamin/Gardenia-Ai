// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCukIbpa2BGl7EF4iFYbk1m3Is45tU3yKY",
  authDomain: "gardenia-ai.firebaseapp.com",
  projectId: "gardenia-ai",
  storageBucket: "gardenia-ai.appspot.com",
  messagingSenderId: "133810334693",
  appId: "1:133810334693:web:b4aeb83b430fd393f0dd0c",
  measurementId: "G-E2BRBVDK7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const analytics = getAnalytics(app);

export{
    app,
    firestore
}