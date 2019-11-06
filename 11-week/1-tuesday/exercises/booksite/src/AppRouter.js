import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import Page from "./pages/Page";

export default function AppRouter() {
  return (
    <Router>
      <ul className="menu">
        <li className="menu-item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-item">
          <Link to="/books">Books</Link>
        </li>
        <li className="menu-item">
          <Link to="/authors">Authors</Link>
        </li>
        <li className="menu-item">
          <Link to="/year">Year</Link>
        </li>
        <li className="menu-item">
          <Link to="/genres">Genres</Link>
        </li>
        <li className="menu-item">
          <Link to="/reviews">Reviews</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <Page name="Home" />
        </Route>
        <Route exact path="/books">
          <Page name="Books" />
        </Route>
        <Route exact path="/authors">
          <Page name="Authors" />
        </Route>
        <Route exact path="/genres">
          <Page name="Genres" />
        </Route>
        <Route exact path="/reviews">
          <Page name="Reviews" />
        </Route>
        <Route exact path="/year">
          <Page name="Year" />
        </Route>
        <Route exact path="/genres">
          <Page name="Genres" />
        </Route>
      </Switch>
    </Router>
  );
}
