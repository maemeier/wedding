import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Places from "./pages/Places";
import SinglePlace from "./pages/SinglePlace";
import Error from "./pages/Error";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/places" component={Places} />
      <Route exact path="/places/:slug" component={SinglePlace} />
      <Route component={Error} />
    </Switch>
  );
}

export default App;
