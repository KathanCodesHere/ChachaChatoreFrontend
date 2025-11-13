import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDA80tfP6L6kw_IPegn9iF620X65IWweZo",
  authDomain: "chachachatore-34c12.firebaseapp.com",
  projectId: "chachachatore-34c12",
  storageBucket: "chachachatore-34c12.firebasestorage.app",
  messagingSenderId: "923338051116",
  appId: "1:923338051116:web:901edd5cb522a365950b89",
  measurementId: "G-FL2QNZ0V9E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
