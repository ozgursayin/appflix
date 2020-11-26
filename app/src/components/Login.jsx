import React from "react";
import "../ui/login.css";

const Login = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="card">
          <div className="title">
            <h1 className="title title-large">Login</h1>
            <p className="title title-subs">
              New user?{" "}
              <span>
                <a href="#" className="linktext">
                  Create an account
                </a>
              </span>
            </p>
          </div>
          <form className="form">
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                className="input-field"
                placeholder="Email address"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                id="password"
                className="input-field"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <a href="./index.html" className="linktext">
                Forgot Password
              </a>
              <input
                type="button"
                name="submit"
                className="input-submit"
                value="Login"
              />
            </div>
          </form>
          <div className="line">
            <span className="line-bar"></span>
            <span className="line-text">Or</span>
            <span className="line-bar"></span>
          </div>
          <div className="method">
            <div className="method-item">
              <a href="#" className="btn-action">
                <i className="icons icons-google fab fa-google"></i>
                <span>Login with Google</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
