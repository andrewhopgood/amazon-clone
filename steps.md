# Steps and installs

1. npm install -g firebase-tools
2. create firebase.js and paste
   const firebaseConfig = {
   apiKey: "AIzaSyC1ZVmoHBq4iSzYJzpJkqB-4Xt7oZLgMZM",
   authDomain: "clone-c1c5b.firebaseapp.com",
   databaseURL: "https://clone-c1c5b.firebaseio.com",
   projectId: "clone-c1c5b",
   storageBucket: "clone-c1c5b.appspot.com",
   messagingSenderId: "791265697520",
   appId: "1:791265697520:web:0e8f1f2ecba64231cfec35"
   };

take this code from project settings, config radio button

3. Material UI for icons

   1. npm install @material-ui/core
   2. search "icons" on site
   3. npm install @material-ui/icons

4. React Router

   1. npm install react-router-dom
   2. in order to implement we wrap the app with <Router />
   3. import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
   4. allows us to show diff components based on path
   5. default route ("/") always at bottom or it never gets listened to

5. easy way to render money

   1. npm i react-currency-format

6. the reducer plays an important role in pushing information "add to basket" into the data layer
