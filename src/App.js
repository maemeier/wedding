import React from "react";
import Home from "./pages/Home";
import Places from "./pages/Places";
import SinglePlace from "./pages/SinglePlace";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <Home />
      <Places />
      <SinglePlace />
      <Error />
    </div>
  );
}

export default App;
