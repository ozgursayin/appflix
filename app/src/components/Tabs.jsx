import React from "react";
import "../ui/main.css";

const Tabs = () => {
  return (
    <div>
      <div className="tabs">
        <a href="www.google.com" className="active">
          Search Movies
        </a>
        <a href="www.google.com"> My Favorites </a>
        <a href="www.google.com"> My Watch List </a>
      </div>
    </div>
  );
};

export default Tabs;
