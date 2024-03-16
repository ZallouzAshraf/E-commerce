import React, { useState } from "react";
import "./AddProduct.css";
import upload_icon from "../../assets/upload_area.svg";

export default function AddProduct() {
  const [image, setImage] = useState();
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;
    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });
    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);

      //Ajout du Produit a la BD
      await fetch("http://localhost:4000/AddProduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.success
            ? alert("Product Added")
            : alert("Failed To Add Product");
        });
    }
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <div className="add-product">
      <div className="addproduct-fields">
        <p>Product Title</p>
        <input
          type="text"
          name="name"
          value={productDetails.name}
          onChange={changeHandler}
          placeholder="Name"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-fields">
          <p>Price</p>
          <input
            type="text"
            name="old_price"
            value={productDetails.old_price}
            onChange={changeHandler}
            placeholder="Old Price"
          />
        </div>
        <div className="addproduct-fields">
          <p>New Price</p>
          <input
            type="text"
            name="new_price"
            value={productDetails.new_price}
            onChange={changeHandler}
            placeholder="new Price"
          />
        </div>
      </div>
      <div className="addproduct-fields">
        <p>Product Category</p>
        <select
          name="category"
          value={productDetails.category}
          onChange={changeHandler}
          className="product-select"
        >
          <option value="Women">Women</option>
          <option value="Men">Men</option>
          <option value="Kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-fields">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_icon}
            alt=""
            className="uploaded_photo"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button
        onClick={() => {
          Add_Product();
        }}
        className="addproduct_btn"
      >
        Add Product
      </button>
    </div>
  );
}
