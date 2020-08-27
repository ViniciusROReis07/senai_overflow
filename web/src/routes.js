import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import { isSignedIn } from "./services/security";

const PrivateRoutes = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isSignedIn() ? (
          children
        ) : (
          <Redirect to={{ pathname: "/", state: { from: location } }} />
        )
      }
    />
  );
};

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <PrivateRoutes exact path="/home">
          <Home />
        </PrivateRoutes>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
