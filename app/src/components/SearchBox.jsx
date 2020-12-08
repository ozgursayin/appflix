import React from "react";
import styles from "../ui/main.module.css";

const SearchBox = (props) => {
  const { page, movieNameSetter } = props;

  // const searchBoxPlaceholderSetter = (page) => {
  //   switch (page) {
  //     case "search":
  //       return "Search movies...";

  //     case "watchlist":
  //       return "Search movies on watchlist...";

  //     case "favorites": {
  //       return "Search favorite movies...";
  //     }
  //     default:
  //       return null;
  //   }
  // };

  // const placeholder = searchBoxPlaceholderSetter(page);
  if (page !== "search") {
    return <div> </div>;
  }

  return (
    <div>
      <div className={styles.searchBox}>
        <input
          type="search"
          placeholder="Search movies..."
          onChange={(e) => movieNameSetter(e)}
        />
      </div>
    </div>
  );
};

export default SearchBox;
