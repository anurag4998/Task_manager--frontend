import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import readCookie from "../src/cookies/readcookie";
import Dashboard from "./components/dashboard";
import Login from "./components/login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  useEffect(() => {
    async function fetchcookie() {
      let a = await readCookie();
      setIsLoggedIn(a.loggedIn);
    }
    fetchcookie()
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/profile" component={Dashboard} />
        {isLoggedIn && (
          <Redirect to="/profile" component={Dashboard}></Redirect>
        )}
        <Route path="/" component={Login} exact={true} />

      </Switch>
    </BrowserRouter>
  );
};
export default App;
