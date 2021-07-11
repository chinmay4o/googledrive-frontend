import React, { useState } from "react";
import signinpic from "./images/login.svg";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  async function handleLogin(e) {
    e.preventDefault();

    const data = await fetch("http://localhost:5003/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (data.status == 422 || !user) {
      alert("invalid credentials");
      console.log("invalid credentials");
    } else {
      console.log("successful login credentials");

      history.push("/");
    }
  }

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
                    autoComplete="off"
                    placeholder="Your email"
                    onChange={(e) => {
                      setUser({ ...user, email: e.target.value });
                    }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password"></label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="Your password"
                    onChange={(e) => {
                      setUser({ ...user, password: e.target.value });
                      console.log(user);
                    }}
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Log in"
                    onClick={handleLogin}
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
