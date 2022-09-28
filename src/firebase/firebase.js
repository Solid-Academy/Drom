import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = firebase.initializeApp({
  apiKey: "AIzaSyA_qZkgH-rtLay9fcIWcEqp0q7gWS_eYFI",
  authDomain: "drom-38ebb.firebaseapp.com",
  projectId: "drom-38ebb",
  storageBucket: "drom-38ebb.appspot.com",
  messagingSenderId: "710058749116",
  appId: "1:710058749116:web:f0e324a41248e468f834b9",
  measurementId: "G-84NHM77MRX"
});
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const db = firebase.firestore();

export default firebase;


