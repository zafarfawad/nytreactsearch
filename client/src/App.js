import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./pages/Articles";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () =>  (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Articles} />
      </Switch>
    </div>
  </Router>
);

export default App;