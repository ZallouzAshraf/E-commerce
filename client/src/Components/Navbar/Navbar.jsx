import React, { useContext, useRef, useState } from "react";
import "./style.css";
import cart_icon from "../Assets/cart_icon.png";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import dropdown_btn from "../Assets/dropdownbtn.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCart } = useContext(ShopContext);
  const menuRef = useRef();

  const menuItems = [
    { label: "Shop", type: "shop", dest: "/" },
    { label: "Men", type: "men", dest: "/men" },
    { label: "Women", type: "women", dest: "/women" },
    { label: "Kids", type: "kids", dest: "/kids" },
  ];

  const dropdown = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>ASH-SHOPPING</p>
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdown}
        src={dropdown_btn}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
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
        <div className="nav-cart-count">{getTotalCart()}</div>
      </div>
    </div>
  );
};

export default Navbar;
