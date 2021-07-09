import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home.js";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup.js";
import About from "./components/About.js";
import ErrorPage from "./components/ErrorPage.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/*">
          <ErrorPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
