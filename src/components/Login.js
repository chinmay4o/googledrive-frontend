import React from "react";
import signinpic from "./images/login.svg";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="signin">
        <div className="container mt-5">
          <div className="signin-content">
          <div className="signin-image">
                <figure>
                  <img src={signinpic} alt="Image" />
                </figure>

                <Link to="/signup" className="signin-image-link">
                  create account
                </Link>
              </div>
            <div className="signin-form">
              <h2 className="form-title">Sign In</h2>
              <form className="register-form" id="register-form">
                
                <div className="form-group">
                  <label htmlFor="email"></label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autocomplete="off"
                    placeholder="Your email"
                  />
                </div>

               
                <div className="form-group">
                  <label htmlFor="password"></label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autocomplete="off"
                    placeholder="Your password"
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Log in"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
