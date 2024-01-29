import React from "react";
import "./NavigationTrail.css";
import navigation_trail from "../Assets/Navigation_Trail.png";

const NavigationTrail = (props) => {
  const { product } = props;
  return (
    <div className="navigationtrail">
      Home <img src={navigation_trail} alt="" />
      SHOP <img src={navigation_trail} alt="" />
      {product.category} <img src={navigation_trail} alt="" />
      {product.name}
    </div>
  );
};

export default NavigationTrail;
