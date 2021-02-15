import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


var firebaseConfig = {
  apiKey: "AIzaSyA0kNAGrAwtmd2N0tHab1qsQS_6_fTtNsw",
  authDomain: "pc-builder-501d8.firebaseapp.com",
  projectId: "pc-builder-501d8",
  storageBucket: "pc-builder-501d8.appspot.com",
  messagingSenderId: "1002323375148",
  appId: "1:1002323375148:web:cbb10e77b35098a135cd89"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();

  export { firebase, db };
