import React from "react";
import "./Navbar.css";
import profil from "../../assets/profil.svg";
import logo from "../../assets/logo.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="" className="nav-logo" />
      <img src={profil} alt="" className="nav-profil" />
    </div>
  );
}
