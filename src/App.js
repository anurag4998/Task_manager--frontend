import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import readCookie from "../src/cookies/readcookie";
import Dashboard from "./components/dashboard";
import Login from "./components/login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  useEffect(() => {
    let a = readCookie();
    setIsLoggedIn(a.loggedIn);
    console.log(isLoggedIn);
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        {isLoggedIn && (
          <Redirect to="/profile" component={Dashboard}></Redirect>
        )}
        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
