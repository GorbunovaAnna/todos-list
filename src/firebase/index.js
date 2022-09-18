import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
// signOut(auth) <<<=== async

// КОНФИГ У КАЖДОГО СВОЙ!!!!!
const firebaseConfig = {
  apiKey: "AIzaSyCbGCyCz8VVD5OXqyPv4JzLvpYFINDTSbE",
  authDomain: "todos-80af9.firebaseapp.com",
  projectId: "todos-80af9",
  storageBucket: "todos-80af9.appspot.com",
  messagingSenderId: "340724397632",
  appId: "1:340724397632:web:84421dacdb1a9e8f7551a5",
  measurementId: "G-5Y00RMKXVB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const registerUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(userCredential);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

export const signInUser = (email, password) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("login", user);
        resolve(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(error);
      });
  });
};

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });
