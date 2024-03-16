import React from "react";
import "./NavigationTrail.css";
import navigation_trail from "../Assets/Navigation_Trail.png";
import useLocalStorage from "use-local-storage";

const NavigationTrail = (props) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const { product } = props;
  return (
    <div className="navigationtrail" data-theme={theme}>
      Home <img src={navigation_trail} alt="" />
      SHOP <img src={navigation_trail} alt="" />
      {product.category} <img src={navigation_trail} alt="" />
      {product.name}
    </div>
  );
};

export default NavigationTrail;
