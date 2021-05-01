import React, { useEffect } from "react";
import "./App.css";

// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

// React Router DOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Context API
import { useStateValue } from "./state/StateProvider";

function App() {
  const [{ loginStatus, user }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    if (loginStatus) {
      // the user is logged in
      console.log("login status >>>>>", loginStatus);
      console.log("User is logged in >>>>>", user);
      // fetch the logged user info
    } else {
      // the user logged out
      console.log("login status >>>>>", loginStatus);
      console.log("User >>>>>", user);
      // dispatch({
      //   type: SET_USER,
      //   user: null,
      // });
    }
  }, []);

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
