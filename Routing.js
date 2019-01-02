import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Teaching from "./Teaching";
import Awards from "./Presentations";
import Presentations from "./Teaching";
import Publications from "./Research";
import Research from "./Awards";

const Routing = () => (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route path="/publications" component={Publications} /> */}
        <Route path="/awards" component={Awards} />
        <Route path="/presentations" component={Presentations} />
        <Route path="/publications" component={Publications} />
        <Route path="/research" component={Research} />
        <Route path="/teaching" component={Teaching} />
        
      </Switch>
    </Router>
  );
  
  export default Routing;