
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css"

import "./assets/css/nucleo-svg.css"
import "./assets/css/soft-design-system.css?v=1.0.5"
// pages
import Index from "views/Index.js";
import SignInPage from "views/SignInPage";
import MyPage from "views/MyPage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route 
        path="/index" 
        render={(props) => <Index {...props} />} />
      <Route
        path="/signin"
        render={(props) => <SignInPage {...props} />}/>
     <Route
        path="/mypage"
        render={(props) => <MyPage {...props} />}/>

      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
