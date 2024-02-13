import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo.png";
import footer_logo_dark from "../Assets/logodark.jpg";
import instagram from "../Assets/instagram_icon.png";
import whatsapp from "../Assets/whatsapp_icon.png";
import facebook from "../Assets/facebook_icon.png";
import useLocalStorage from "use-local-storage";

const Footer = () => {
  const [theme] = useLocalStorage("theme", "light");
  return (
    <div className="footer" data-theme={theme}>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="icons-container">
          <img src={instagram} alt="" />
        </div>
        <div className="icons-container">
          <img src={facebook} alt="" />
        </div>
        <div className="icons-container">
          <img src={whatsapp} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
