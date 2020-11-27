import React from "react";
import styles from "../ui/login.module.css";

const Signup = () => {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <div className={styles.title}>
              <h1 className={`${styles.title} ${styles.titleLarge}`}>
                Sign Up
              </h1>
              <p className={`${styles.title} ${styles.titleSubs}`}>
                Existing user?
                <span>
                  <a href="/" className={styles.linkText}>
                    <span> </span> Sign In
                  </a>
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
                  type="username"
                  name="username"
                  id="emausernameil"
                  className={styles.inputField}
                  placeholder="Username"
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
                <input
                  type="password"
                  name="password"
                  id="confirm-password"
                  className={styles.inputField}
                  placeholder="Confirm Password"
                />
              </div>
              <div className={styles.formGroup}>
                <a href="./" className={styles.linkText}>
                  Continue as Guest
                </a>
                <span> </span>
                <input
                  type="button"
                  name="submit"
                  className={styles.inputSubmit}
                  value="Sign up"
                />
              </div>
            </form>
            <div className={styles.line}>
              <span className={styles.lineBar}></span>
              <span className={styles.lineText}>Or</span>
              <span className={styles.lineBar}></span>
            </div>
            <div className={styles.method}>
              <div className={styles.methodItem}>
                <a href="google.com" className={styles.buttonAction}>
                  <i
                    className={`${styles.icons} ${styles.iconsGoogle} ${styles.fab}`}
                  ></i>
                  <span>Sign up with Google</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Signup;
