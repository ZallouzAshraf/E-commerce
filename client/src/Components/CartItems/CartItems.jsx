import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotal, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div className="cartitems-format cartitems-main" key={item.id}>
              <img className="carticon-product" src={item.image} alt="" />
              <p>{item.name}</p>
              <p>${item.new_price}</p>
              <button className="cartitems-quantity">
                {cartItems[item.id]}
              </button>
              <p>${item.new_price * cartItems[item.id]}</p>
              <img
                className="carticon-remove"
                src={remove_icon}
                onClick={() => removeFromCart(item.id)}
                alt=""
              />
            </div>
          );
          return null;
        }
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>SubTotal</p>
              <p>${getTotal()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p> Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotal()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code , enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Promo Code" name="" id="" />
            <button>Submit</button>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default CartItems;
