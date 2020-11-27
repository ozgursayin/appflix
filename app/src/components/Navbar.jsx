import React from "react";
import styles from "../ui/main.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className={styles.tabs}>
        <NavLink to="/" exact activeClassName={styles.active}>
          Search Movies
        </NavLink>
        <NavLink to="/favorites" activeClassName={styles.active}>
          My Favorites
        </NavLink>
        <NavLink to="/watchlist" activeClassName={styles.active}>
          My Watch List
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
