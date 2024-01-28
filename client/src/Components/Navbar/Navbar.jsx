import React, { useState } from "react";
import "./style.css";
import cart_icon from "../Assets/cart_icon.png";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  const menuItems = [
    { label: "Shop", type: "shop", dest: "/" },
    { label: "Men", type: "men", dest: "/men" },
    { label: "Women", type: "women", dest: ".women" },
    { label: "Kids", type: "kids", dest: "/kids" },
  ];

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>ASH-SHOPPING</p>
      </div>
      <ul className="nav-menu">
        {menuItems.map((item) => (
          <li key={item.type} onClick={() => setMenu(item.type)}>
            <Link to={item.dest} style={{ textDecoration: "none" }}>
              {item.label}
            </Link>
            {menu === item.type ? <hr /> : <></>}
          </li>
        ))}
      </ul>
      <div className="nav-login-cart">
        <Link to="/Login">
          <button>Login</button>{" "}
        </Link>
        <Link to="/cart">
          <img src={cart_icon} />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
