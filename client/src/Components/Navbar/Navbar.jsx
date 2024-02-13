import React, { useContext, useRef, useState } from "react";
import "./style.css";
import cart_icon from "../Assets/cart_icon.png";
import cart_icon_white from "../Assets/cart_icon_white.png";
import logo from "../Assets/logo.png";
import logodark from "../Assets/logodark.jpg";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import dropdown_btn from "../Assets/dropdownbtn.png";
import sun from "../Assets/sun.png";
import moon from "../Assets/moon.png";
import useLocalStorage from "use-local-storage";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const { getTotalCart } = useContext(ShopContext);
  const menuRef = useRef();

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
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
    <div className="navbar" data-theme={theme}>
      <div className="nav-logo">
        <img src={theme === "light" ? logo : logodark} alt="" />
        <p id="nav-logo-dark">AshShopping</p>
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
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={theme === "light" ? cart_icon : cart_icon_white} />
        </Link>
        <div className="nav-cart-count">{getTotalCart()}</div>
      </div>
      <img
        src={theme === "light" ? moon : sun}
        alt="Mode"
        className="dark-mode-button"
        onClick={switchTheme}
      />
    </div>
  );
};

export default Navbar;
