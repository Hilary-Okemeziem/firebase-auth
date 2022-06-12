// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: "fir-auth-a98f5.firebaseapp.com",
  projectId: "fir-auth-a98f5",
  storageBucket: "fir-auth-a98f5.appspot.com",
  messagingSenderId: "468862101100",
  appId: "1:468862101100:web:c785f31e3dfdbd19751a49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app