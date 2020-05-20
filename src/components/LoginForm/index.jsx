import React from "react";

import history from "../../history";
import Routes from "../../constants/Routes";

import "./index.style.scss";
const LoginForm = () => {
  return (
    <div className="form-body">
      <input className="input-username" type="text" placeholder="Username" />
      <input className="input-password" type="text" placeholder="Password"/>
      <div className="forgot-password"><p>Forgot your password?&nbsp;<a href="/">Click here</a></p></div>
      <div className="login-button" onClick={() => history.push(Routes.home)}>Login</div>
    </div>
  )
  
};

export default LoginForm;
