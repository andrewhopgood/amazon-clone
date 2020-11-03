import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>>", authUser);

      if (authUser) {
        //if user is logged in we will set user to whoever is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //if user is logged out, set user to null value (no one logged in)
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    }); //listening for authentication state change ie. login/logout
  }, []); //only runs when app component loads

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
