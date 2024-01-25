import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

//firebase config
const firebaseConfig = {
    apiKey: "AIzaSyD6zM7fbWvLgSXLr9aeQmfGrZ9641Q_N3Y",
    authDomain: "json-view-e9ab2.firebaseapp.com",
    projectId: "json-view-e9ab2",
    storageBucket: "json-view-e9ab2.appspot.com",
    messagingSenderId: "742236741105",
    appId: "1:742236741105:web:1af3a657a06f8315f9f850"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the Firestore database
const db = firebase.firestore();

export default db;
