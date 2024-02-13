import React, { useState } from "react";
import "./Css/LoginSignup.css";
import useLocalStorage from "use-local-storage";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign In");
  const [theme] = useLocalStorage("theme", "light");
  return (
    <div className="loginsignup" data-theme={theme}>
      {action === "Sign In" ? (
        <div className="loginsignup-container">
          <h1>{action}</h1>
          <div className="loginsignup-fields">
            <input type="email" placeholder="Your Email" />
            <input type="password" placeholder="Your Password" />
          </div>
          <span
            className="loginsignup-login"
            onClick={() => setAction("Reset Password")}
          >
            Forget Password ?
          </span>
          <button>Sign In</button>
          <p className="loginsignup-login">
            Dont Have An Account ?{" "}
            <span onClick={() => setAction("Sign Up")}>Register Here</span>
          </p>
        </div>
      ) : action == "Sign Up" ? (
        <div className="loginsignup-container">
          <h1>{action}</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="password" placeholder="Your Password" />
          </div>
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By Clicking , I agree to the terms of use</p>
          </div>
          <button>Sign Up</button>
          <p className="loginsignup-login">
            Already Have An Account ?{" "}
            <span onClick={() => setAction("Sign In")}>Login Here</span>
          </p>
        </div>
      ) : (
        <div className="loginsignup-container">
          <h1>{action}</h1>
          <div className="loginsignup-fields">
            <input type="email" placeholder="Your Email" />
            <button>Continue</button>
            <p className="loginsignup-login">
              Dont Have An Account ?{" "}
              <span onClick={() => setAction("Sign Up")}>Register Here</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;
