import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAURl5mgN2CAD3mJViC5AjhDfVpJFRhwAk",
  authDomain: "budgetbuddy-e35dc.firebaseapp.com",
  projectId: "budgetbuddy-e35dc",
  storageBucket: "budgetbuddy-e35dc.firebasestorage.app",
  messagingSenderId: "898980477707",
  appId: "1:898980477707:web:b009f7740a8dd25bfb800e",
  measurementId: "G-DGYKRQRX79"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(); // Google provider for authentication

export { auth, googleProvider };
