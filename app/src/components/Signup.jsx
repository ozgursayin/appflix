import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../ui/login.module.css";
import { useAuth } from "../contexts/AuthContext";

const Signup = () => {
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, loginGuest } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleGuestSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await loginGuest();
      history.push("/");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <div className={styles.title}>
              <div hidden={!error} className={styles.errorMessage}>
                {error}
              </div>
              <h1 className={`${styles.title} ${styles.titleLarge}`}>
                Sign Up
              </h1>
              <p className={`${styles.title} ${styles.titleSubs}`}>
                Existing user?
                <span>
                  <Link
                    className={styles.linkText}
                    to="/login"
                    //onClick={this.handleClick()}
                  >
                    <span> </span> Log in
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
                  ref={emailRef}
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="username"
                  name="username"
                  id="username"
                  className={styles.inputField}
                  placeholder="Username"
                  ref={usernameRef}
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
                <input
                  type="password"
                  name="password"
                  id="confirm-password"
                  className={styles.inputField}
                  placeholder="Confirm Password"
                  ref={passwordConfirmRef}
                />
              </div>
              <div className={styles.formGroup}>
                <Link
                  className={styles.linkText}
                  //className={styles.inputSubmit}
                  role="button"
                  type="submit"
                  to="/"
                  onClick={handleGuestSubmit}
                >
                  <span> </span> Continue as Guest
                </Link>
                <span> </span>
                <Link
                  disabled={loading}
                  className={styles.inputSubmit}
                  role="button"
                  type="submit"
                  to="/signup"
                  onClick={handleSubmit}
                >
                  Sign up
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
                  to="/"
                  //onClick={this.handleClick()}
                >
                  <i
                    className={`${styles.icons} ${styles.iconsGoogle} ${styles.fab}`}
                  ></i>
                  <span>Sign up with Google</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Signup;