import React, { useState } from "react";

// React Router DOM
import { Link, useHistory } from "react-router-dom";

// CSS
import "../assets/css/Login.css";
import logo from "../assets/img/amazon_PNG24.png";

// Context API
import { SET_LOGIN_STATUS, SET_USER } from "../state/actions.js";
import { useStateValue } from "../state/StateProvider";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{}, dispatch] = useStateValue();

  const signIn = (e) => {
    e.preventDefault();
    /*login logic
    .........*/
    // then if user is fetched from the server, authenticate it
    dispatch({
      type: SET_LOGIN_STATUS,
      loginStatus: true,
    });
    dispatch({
      type: SET_USER,
      user: {
        id: 1,
        first_name: "Manuel",
        token: "123",
      },
    });
    history.push("/"); //back to home page
  };

  const register = (e) => {
    e.preventDefault();
    /*register logic
    .........*/
    // then if user is authenticated
    history.push("/"); //back to home page
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={logo} alt="" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
          <p>
            By signing-in you agree to Amazon Clone's Conditions of Use & Sale.
            Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <button onClick={register} className="login__registerButton">
            Create your Amazon account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
