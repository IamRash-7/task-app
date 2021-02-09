import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBIReYC6boGcPxEbhBLqCHc-NwSB3BCs5I",
  authDomain: "news-app-40831.firebaseapp.com",
  projectId: "news-app-40831",
  storageBucket: "news-app-40831.appspot.com",
  messagingSenderId: "1055321891245",
  appId: "1:1055321891245:web:e1b65c6eac6ba4231cc124",
  measurementId: "G-LJR5SFSZ6Q",
};

const initFirebase = firebase.initializeApp(firebaseConfig);
const db = initFirebase.firestore();

export default db;