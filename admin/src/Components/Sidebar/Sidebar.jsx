import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import addproduct_icon from "../../assets/Product_Cart.svg";
import listproduct_icon from "../../assets/Product_list_icon.svg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Link to={"/Addproduct"}>
        <div className="sidebar-item">
          <img src={addproduct_icon} alt="" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={"/Listproduct"}>
        <div className="sidebar-item">
          <img src={listproduct_icon} alt="" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
}
