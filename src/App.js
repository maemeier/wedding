import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Places from "./pages/Places";
import SinglePlace from "./pages/SinglePlace";
import Packages from "./pages/Packages";
import Error from "./pages/Error";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/places" component={Places} />
        <Route exact path="/places/:slug" component={SinglePlace} />
        <Route exact path="/packages" component={Packages} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
