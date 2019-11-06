import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import Clock from "./components/Clock";

export default function AppRouter() {
  return (
    <Router>
      <ul className="menu">
        <li className="menu-item">
          <Link to="/">Clock</Link>
        </li>
        <li className="menu-item">
          <Link to="/alarm">Alarm</Link>
        </li>
        <li className="menu-item">
          <Link to="/timer">Timer</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <Clock />
        </Route>
      </Switch>
    </Router>
  );
}
