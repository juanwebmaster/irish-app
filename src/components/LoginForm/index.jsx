import React from "react";
import "./index.style.scss";
const LoginForm = () => {
  return (
    <div className="form-body">
      <input className="input-username" type="text" placeholder="Username" />
      <input className="input-password" type="text" placeholder="Password"/>
      <div className="forgot-password"><p>Forgot your password?&nbsp;<a href="/">Click here</a></p></div>
    </div>
  )
  
};

export default LoginForm;
