import React from "react";
import styles from "../ui/main.module.css";

const SearchBox = (props) => {
  const { page, movieNameSetter } = props;

  if (page !== "search") {
    return <div className={styles.searchBox}> </div>;
  }

  return (
    <div>
      <div className={styles.searchBox}>
        <input
          type="search"
          placeholder="Search movies..."
          onChange={movieNameSetter}
        />
      </div>
    </div>
  );
};

export default SearchBox;
