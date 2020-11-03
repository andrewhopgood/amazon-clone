import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC1ZVmoHBq4iSzYJzpJkqB-4Xt7oZLgMZM",
  authDomain: "clone-c1c5b.firebaseapp.com",
  databaseURL: "https://clone-c1c5b.firebaseio.com",
  projectId: "clone-c1c5b",
  storageBucket: "clone-c1c5b.appspot.com",
  messagingSenderId: "791265697520",
  appId: "1:791265697520:web:0e8f1f2ecba64231cfec35",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); //initialize database
const auth = firebase.auth();

export { db, auth }; //export the db ,auth
