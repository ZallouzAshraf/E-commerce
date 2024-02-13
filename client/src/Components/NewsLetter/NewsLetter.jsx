import React from "react";
import "./NewsLetter.css";
import useLocalStorage from "use-local-storage";

const NewsLetter = () => {
  const [theme] = useLocalStorage("theme", "light");
  return (
    <div className="newsletter" data-theme={theme}>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div className="newsletter-email">
        <input type="email" placeholder="You Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
