import React from "react";
import "./index.style.scss";
import LoginForm from "../../components/LoginForm";
import Logo from '../../assets/logo.png'
const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-header"></div>
      <div className="login-logo">
        <img src={Logo} alt="description"></img>
      </div>
      <div className="admin-panel">Admin</div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
