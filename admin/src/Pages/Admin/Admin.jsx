import React from "react";
import "./Admin.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import ListProduct from "../../Components/ListProduct/ListProduct";
import AddProduct from "../../Components/AddProduct/AddProduct";

export default function Admin() {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/Addproduct" element={<AddProduct />} />
        <Route path="/ListProduct" element={<ListProduct />} />
      </Routes>
    </div>
  );
}
