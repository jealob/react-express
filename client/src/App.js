import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Nav, Footer} from "./components/Nav";
import Home from "./pages/Home";
import Saved from "./pages/Saved";

const App = () => (
  <Router>
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/saved" component={Saved} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
