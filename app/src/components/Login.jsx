import React from "react";
import { Link } from "react-router-dom";
import styles from "../ui/login.module.css";

const Login = () => {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <div className={styles.title}>
              <h1 className={`${styles.title} ${styles.titleLarge}`}>Login</h1>
              <p className={`${styles.title} ${styles.titleSubs}`}>
                New user? <span> </span>
                <span>
                  {/* <a href="/signup" className={styles.linkText}>
                    Create an account
                  </a> */}
                  <Link to="/signup" className={styles.linkText}>
                    Create an account
                  </Link>
                </span>
              </p>
            </div>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={styles.inputField}
                  placeholder="Email address"
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={styles.inputField}
                  placeholder="Password"
                />
              </div>
              <div className={styles.formGroup}>
                <Link
                  className={styles.linkText}
                  to="/forgot-password"
                  //onClick={this.handleClick()}
                >
                  Forgot Password
                </Link>

                <Link
                  className={styles.inputSubmit}
                  role="button"
                  to="/"
                  //onClick={this.handleClick()}
                >
                  Login
                </Link>
              </div>
            </form>
            <div className={styles.line}>
              <span className={styles.lineBar}></span>
              <span className={styles.lineText}>Or</span>
              <span className={styles.lineBar}></span>
            </div>
            <div className={styles.method}>
              <div className={styles.methodItem}>
                <Link
                  className={styles.buttonAction}
                  role="button"
                  to="/"
                  //onClick={this.handleClick()}
                >
                  <i
                    className={`${styles.icons} ${styles.iconsGoogle} ${styles.fab}`}
                  ></i>
                  <span>Login with Google</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
