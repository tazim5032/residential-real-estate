import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC0RvztaXu7QF_cjlI0YmNItVDfUh_a-Xs",
  authDomain: "residential-b3feb.firebaseapp.com",
  projectId: "residential-b3feb",
  storageBucket: "residential-b3feb.appspot.com",
  messagingSenderId: "569955106336",
  appId: "1:569955106336:web:ab849b40deaf6d8ae64645"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;