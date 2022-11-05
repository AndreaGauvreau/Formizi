
import { initializeApp } from "firebase/app";
import "firebase/compat/auth"
import firebase from "firebase/compat/app"

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "formizi-69c6a.firebaseapp.com",
  projectId: "formizi-69c6a",
  storageBucket: "formizi-69c6a.appspot.com",
  messagingSenderId: "312025621973",
  appId: "1:312025621973:web:a10f76b62c10165ca0495c"
});



export const auth= app.auth()

export default app