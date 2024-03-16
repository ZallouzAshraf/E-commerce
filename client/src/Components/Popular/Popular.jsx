import React, { useEffect, useState } from "react";
import "./Popular.css";
import Item from "../Items/Item";
import useLocalStorage from "use-local-storage";

const Popular = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/popularwomen")
      .then((response) => response.json())
      .then((data) => setPopular(data));
  }, []);
  return (
    <div className="popular" data-theme={theme}>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popular.map((item, i) => {
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
