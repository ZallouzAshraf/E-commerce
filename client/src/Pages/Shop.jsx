import React from "react";
import "../App.css";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import useLocalStorage from "use-local-storage";

const Shop = () => {
  const [theme] = useLocalStorage("theme", "light");
  return (
    <div className="ShopApp" data-theme={theme}>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export default Shop;
