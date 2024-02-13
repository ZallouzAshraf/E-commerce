import React from "react";
import "./Popular.css";
import data_product from "../Assets/data";
import Item from "../Items/item";
import useLocalStorage from "use-local-storage";

const Popular = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  return (
    <div className="popular" data-theme={theme}>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
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

export default Popular;
