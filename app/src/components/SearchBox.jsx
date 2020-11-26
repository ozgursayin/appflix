import React from "react";
import "../ui/main.css";

const SearchBox = () => {
  return (
    <div>
      <div className="search-bar">
        <input type="search" placeholder="Search movies ..." />
      </div>
    </div>
  );
};

export default SearchBox;
