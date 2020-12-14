import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../ui/login.module.css";
import { useAuth } from "../contexts/AuthContext";
import Spinner from "../assets/spinner.svg";

const Signup = () => {
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
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
              <h1 className={`${styles.title} ${styles.titleLarge}`}>
                Sign Up
              </h1>
              <p className={`${styles.title} ${styles.titleSubs}`}>
                Existing user?
                <span>
                  <Link className={styles.linkText} to="/login">
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default Signup;
