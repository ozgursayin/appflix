import React from "react";
import styles from "../ui/main.module.css";

const SearchBox = (props) => {
  const { page } = props;

  const searchBoxPlaceholderSetter = (page) => {
    switch (page) {
      case "search":
        return "Search movies...";

      case "watchlist":
        return "Search movies on watchlist...";

      case "favorites": {
        return "Search favorite movies...";
      }
      default:
        return null;
    }
  };

  const placeholder = searchBoxPlaceholderSetter(page);

  return (
    <div>
      <div className={styles.searchBox}>
        <input type="search" placeholder={placeholder} />
      </div>
    </div>
  );
};

export default SearchBox;
