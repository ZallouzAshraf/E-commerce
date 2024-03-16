import React, { useContext } from "react";
import "../App.css";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import NavigationTrail from "../Components/NavigationTrail/NavigationTrail";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";
import useLocalStorage from "use-local-storage";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div style={{ background: "var(--background)" }} data-theme={theme}>
      <NavigationTrail product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
