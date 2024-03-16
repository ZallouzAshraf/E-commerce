import React, { useEffect, useState } from "react";
import "./NewCollections.css";
import Item from "../Items/Item";
import useLocalStorage from "use-local-storage";

const NewCollections = () => {
  const [theme] = useLocalStorage("theme", "light");
  const [newcollections, setNewcollections] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/newcollections").then((response) =>
      response.json().then((data) => setNewcollections(data))
    );
  }, []);
  return (
    <div className="new-collections" data-theme={theme}>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {newcollections.map((item, i) => {
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

export default NewCollections;
