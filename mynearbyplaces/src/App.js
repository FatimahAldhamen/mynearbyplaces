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
       <HashRouter basename="/mynearbyplaces">
        <Switch>
          <Route exact path="/mynearbyplaces/" component={Home} />
          <Route exact path="/mynearbyplaces/searchresults" component={SearchResults} />
          <Route exact path="/mynearbyplaces/:id/update" component={Update} />
          <Route exact path="/mynearbyplaces/:id/details" component={Details} />
          <Route exact path="/mynearbyplaces/addplace" component={AddPlace} />
        </Switch>
      </Router>
    </div>
  )
}

export default App

