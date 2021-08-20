
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss";
//import "assets/demo/demo.css";
// pages
import Index from "views/Index.js";
// import NucleoIcons from "views/NucleoIcons.js";
// import LandingPage from "views/examples/LandingPage.js";
// import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/RegisterPage.js";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route 
        path="/index" 
        render={(props) => <Index {...props} />} />
      <Route
        path="/register"
        render={(props) => <RegisterPage {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
