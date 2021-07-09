import React , {useState} from "react";
import "../App.css";
import signuppic from "./images/signup.svg";
import { Link } from "react-router-dom";

const Signup = () => {
const [user , setUser] = useState({
  name: "", email: "", phone: "", work: "", password: "", cpassword: ""
});

let name , value;

function handleInput(e) {
  console.log(e);
  name = e.target.name;
  value = e.target.value;
  setUser({...user , [name] : value});
  console.log(user);
}

  return (
    <section className="signup">
      <div className="container mt-5">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title">Sign up</h2>

            <form className="register-form" id="register-form">
              <div className="form-group">
                <label htmlFor="name">
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  placeholder="Your Name"
                  value={user.name}
                  onChange={handleInput}
                  
                />
              </div>

              <div className="form-group">
                <label htmlFor="email"></label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Your email"
                  value={user.email}
                  onChange={handleInput}

                />
              </div>

              <div className="form-group">
                <label htmlFor="phone"></label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  placeholder="Your phone"
                  value={user.phone}
                  onChange={handleInput}
                />
              </div>


              <div className="form-group">
                <label htmlFor="work"></label>
                <input
                  type="text"
                  name="work"
                  id="work"
                  autoComplete="off"
                  placeholder="Your work"
                  value={user.work}
                  onChange={handleInput}
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
                  value={user.password}
                  onChange={handleInput}
                />
              </div>

              <div className="form-group">
                <label htmlFor="cpassword"></label>
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  autoComplete="off"
                  placeholder="confirm password"
                  value={user.cpassword}
                  onChange={handleInput}
                />
              </div>

              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  value="register"
                />
              </div>
            </form>
          </div>
          <div className="signup-image">
            <figure>
              <img src={signuppic} alt="Image" />
            </figure>

            <Link to="/login" className="signup-image-link">
              I am already register
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
