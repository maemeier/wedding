import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Places from "./pages/Places";
import SinglePlace from "./pages/SinglePlace";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/places" component={Places} />
      <Route exact path="/single-place" component={SinglePlace} />
    </div>
  );
}

export default App;
