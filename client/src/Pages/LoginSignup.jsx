import React from "react";
import "./Css/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Your Password" />
        </div>
        <button>Sign Up</button>
        <p className="loginsignup-login">
          Already Have An Account ? <span>Login Here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Clicking , I agree to the terms of use</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
