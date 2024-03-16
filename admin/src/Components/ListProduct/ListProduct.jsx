import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import { MdDeleteForever } from "react-icons/md";

export default function ListProduct() {
  const [allproducts, setAllproducts] = useState([]);

  const fetchData = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllproducts(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeProduct = async (id) => {
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchData();
  };
  return (
    <div className="list-product">
      <h1>All Products List</h1>
      <div className="list-product-main">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="list-product-all">
        <hr />
        {allproducts.map((item, index) => {
          return (
            <div key={index}>
              <div className="list-product-main listproduct">
                <img src={item.image} alt="" className="list-product-img" />
                <p>{item.name}</p>
                <p>${item.old_price}</p>
                <p>${item.new_price}</p>
                <p>{item.category}</p>
                <MdDeleteForever
                  onClick={() => {
                    removeProduct(item.id);
                  }}
                  className="listproduct-remove"
                  color="red"
                />
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}
