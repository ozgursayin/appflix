import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../ui/login.module.css";
import { useAuth } from "../contexts/AuthContext";
import Spinner from "../assets/spinner.svg";

const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
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
              <h1 className={`${styles.title} ${styles.titleLarge}`}>
                Recover Password
              </h1>
              <div hidden={!error} className={styles.errorMessage}>
                {error}
              </div>
              <div hidden={!message} className={styles.successMessage}>
                {message}
              </div>
            </div>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  ref={emailRef}
                  className={styles.inputField}
                  placeholder="Email address"
                />
              </div>

              <div className={styles.formGroup}>
                <Link className={styles.linkText} role="button" to="/login">
                  Back to Login
                </Link>

                <button
                  className={styles.inputSubmit}
                  onClick={handleSubmit}
                  disabled={message.length}
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;
