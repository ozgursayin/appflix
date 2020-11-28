import React from "react";
import { Link } from "react-router-dom";
import styles from "../ui/login.module.css";

const ForgotPassword = () => {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <div className={styles.title}>
              <h1 className={`${styles.title} ${styles.titleLarge}`}>
                Recover Password
              </h1>
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
                <Link
                  className={styles.linkText}
                  role="button"
                  to="/login"
                  //onClick={this.handleClick()}
                >
                  Back to Login
                </Link>
                {/* <input
                  type="button"
                  name="submit"
                  className={styles.inputSubmit}
                  value="Reset Password"
                /> */}
                <Link
                  className={styles.inputSubmit}
                  role="button"
                  to="/"
                  //onClick={this.handleClick()}
                >
                  Reset Password
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;
