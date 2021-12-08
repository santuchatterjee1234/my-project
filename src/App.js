import React from "react";
import Home from "./Home";
import About from "./About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul style={{listStyle:"none"}}>
            <li>
              <Link to="/" style={{textDecoration:"none"}}>Home</Link>
            </li>
            <li>
              <Link to="/about" style={{textDecoration:"none"}}>About</Link>
            </li>
          </ul>
        </nav>


        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
