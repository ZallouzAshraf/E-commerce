import React from "react";
import "./RelatedProducts.css";
import data_product from "../Assets/data";
import Item from "../Items/Item";
import useLocalStorage from "use-local-storage";

const RelatedProducts = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  return (
    <div className="relatedproducts" data-theme={theme}>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
