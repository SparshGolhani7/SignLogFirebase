// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz2E0vBWp2PxOZvrEpsPi81HnpH87ebdQ",
  authDomain: "reactsignuplogin.firebaseapp.com",
  databaseURL: "https://reactsignuplogin-default-rtdb.firebaseio.com",
  projectId: "reactsignuplogin",
  storageBucket: "reactsignuplogin.firebasestorage.app",
  messagingSenderId: "210473808881",
  appId: "1:210473808881:web:07e2e16707183840baca50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
