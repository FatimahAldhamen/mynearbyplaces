import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Update from "./routes/Update";
import Details from "./routes/Details";
import AddPlace from "./routes/AddPlace";
import SearchResults from "./routes/SearchResults";

const App = () => {
  return (
    <div>
       <Router>
        <Switch>
          <Route exact path="mynearbyplaces/" component={Home} />
          <Route exact path="/searchresults" component={SearchResults} />
          <Route exact path="/:id/update" component={Update} />
          <Route exact path="/:id/details" component={Details} />
          <Route exact path="/addplace" component={AddPlace} />
        </Switch>
      </Router>
    </div>
  )
}

export default App

