import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./pages/Articles";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

const App = () => (
  <Articles />
  // <Router>
  //   <div>
  //     {/* <Nav /> */}
  //     {/* <Switch> */}
  //       {/* <Route exact path="/" component={Books} /> */}
  //       <Route exact path="/api/nyt" component={Articles} />
  //       {/* <Route exact path="/books/:id" component={Detail} />
  //       <Route component={NoMatch} /> */}
  //     {/* </Switch> */}
  //   </div>
  // </Router>
);

export default App;