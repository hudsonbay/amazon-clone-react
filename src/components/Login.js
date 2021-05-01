import React from "react";

// React Router DOM
import { Link } from "react-router-dom";

// CSS
import "../assets/css/Login.css";
import logo from "../assets/img/amazon_PNG24.png";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={logo} alt="" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <button className="login__signInButton">Sign In</button>
          <p>
            By signing-in you agree to Amazon Clone's Conditions of Use & Sale.
            Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <button className="login__registerButton">
            Create your Amazon account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
