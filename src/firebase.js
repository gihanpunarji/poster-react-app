// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf3kMRCC25rv-1xo9hbiDN6ClTf_UxUkM",
  authDomain: "react-poster-app.firebaseapp.com",
  projectId: "react-poster-app",
  storageBucket: "react-poster-app.appspot.com",
  messagingSenderId: "487876204983",
  appId: "1:487876204983:web:669f5cbb136421ca407032"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();

const auth = getAuth(app);

export {
  auth
}
