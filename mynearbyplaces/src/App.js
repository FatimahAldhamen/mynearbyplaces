import React from 'react';
import "./App.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Update from "./routes/Update";
import Details from "./routes/Details";
import AddPlace from "./routes/AddPlace";
import SearchResults from "./routes/SearchResults";

const App = () => {
  return (
    <div>
       <HashRouter basename="/mynearbyplaces/">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/searchresults/:location/:place" component={SearchResults} />
          <Route exact path="/:id/update" component={Update} />
          <Route exact path="/:id/details" component={Details} />
          <Route exact path="/addplace" component={AddPlace} />
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App

