import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/home.js";
import Layouts from "./hoc/Layout/layout.js";

class Routes extends Component {
  render() {
    return (
      <Layouts>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Layouts>
    );
  }
}

export default Routes;
