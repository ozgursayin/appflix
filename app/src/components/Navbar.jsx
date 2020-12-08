import React, { useState } from "react";
import styles from "../ui/main.module.css";
import { NavLink, Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch (err) {
      setError(err);
      console.log(error);
    }
  };
  return (
    <div className={styles.navBar}>
      <div className={styles.navBarTop}>
        <div className={styles.username}>
          <strong>{currentUser.email}</strong>
        </div>
        <Link
          className={styles.logout}
          role="button"
          type="submit"
          to="/"
          onClick={handleLogout}
          hidden={currentUser.isAnonymous}
        >
          Log Out
        </Link>
      </div>

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
        <span>
          <div>{/* <div>{currentUser}</div> */}</div>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
