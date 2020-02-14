import React from "react";
import Main from "../Pages/Main";
import Login from "../Pages/Login";
import "../Pages/Login.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/main" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
