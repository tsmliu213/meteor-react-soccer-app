import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "../imports/ui/App.js";
import Example from "../imports/ui/Example";
import Lost from "../imports/ui/Lost";

Meteor.startup(() => {
  ReactDOM.render(
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/example" component={Example} />
        <Route component={Lost} />
      </Switch>
    </Router>,
    document.getElementById("app")
  );
});
