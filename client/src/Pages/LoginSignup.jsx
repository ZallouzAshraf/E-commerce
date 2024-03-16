import React, { useState } from "react";
import "./Css/LoginSignup.css";
import useLocalStorage from "use-local-storage";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign In");
  const [theme] = useLocalStorage("theme", "light");
  const [UserData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setUserData({ ...UserData, [e.target.name]: e.target.value });
  };

  const register = async () => {
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UserData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };
  const login = async () => {
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UserData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };
  return (
    <div className="loginsignup" data-theme={theme}>
      {action === "Sign In" ? (
        <div className="loginsignup-container">
          <h1>{action}</h1>
          <div className="loginsignup-fields">
            <input
              value={UserData.email}
              onChange={changeHandler}
              type="email"
              name="email"
              placeholder="Your Email"
            />
            <input
              value={UserData.password}
              onChange={changeHandler}
              type="password"
              name="password"
              placeholder="Your Password"
            />
          </div>
          <button onClick={() => login()}>Sign In</button>
          <p className="loginsignup-login">
            Dont Have An Account ?{" "}
            <span onClick={() => setAction("Sign Up")}>Register Here</span>
          </p>
        </div>
      ) : action == "Sign Up" ? (
        <div className="loginsignup-container">
          <h1>{action}</h1>
          <div className="loginsignup-fields">
            <input
              value={UserData.username}
              onChange={changeHandler}
              type="text"
              name="username"
              placeholder="Your Username"
            />
            <input
              value={UserData.email}
              onChange={changeHandler}
              type="email"
              name="email"
              placeholder="Your Email"
            />
            <input
              value={UserData.password}
              onChange={changeHandler}
              type="password"
              name="password"
              placeholder="Your Password"
            />
          </div>
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By Clicking , I agree to the terms of use</p>
          </div>
          <button onClick={() => register()}>Sign Up</button>
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
