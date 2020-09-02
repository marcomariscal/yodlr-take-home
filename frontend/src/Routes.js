import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import Admin from "./Admin";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default Routes;
