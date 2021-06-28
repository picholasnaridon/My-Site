
import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router";
import { HashRouter } from "react-router-dom";
import "./assets/scss/material-kit-react.css?v=1.1.0";
import LandingPage from "./views/LandingPage/LandingPage.jsx";


ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path="/" component={LandingPage} />
    </div>
  </HashRouter>,
  document.getElementById("root")
);