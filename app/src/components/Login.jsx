import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../ui/login.module.css";
import { useAuth } from "../contexts/AuthContext";
import Spinner from "./spinner.svg";

const Login = () => {
  const { login } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };
  if (loading) {
    return (
      <div className={styles.loading}>
        <img src={Spinner} alt="Loading..." />
      </div>
    );
  }

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <div className={styles.title}>
              <div hidden={!error} className={styles.errorMessage}>
                {error}
              </div>

              <h1 className={`${styles.title} ${styles.titleLarge}`}>Login</h1>
              <p className={`${styles.title} ${styles.titleSubs}`}>
                New user? <span> </span>
                <span>
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
                  ref={emailRef}
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
                  ref={passwordRef}
                />
              </div>
              <div className={styles.formGroup}>
                <Link className={styles.linkText} to="/forgot-password">
                  Forgot Password
                </Link>

                <Link
                  className={styles.inputSubmit}
                  role="button"
                  to="/"
                  type="submit"
                  onClick={handleSubmit}
                  disabled={loading}
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
