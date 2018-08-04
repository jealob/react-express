import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Nav, Footer} from "./components/Nav";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";

const App = () => (
  <Router>
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/results" component={Results} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
