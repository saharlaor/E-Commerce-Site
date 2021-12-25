import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import Shop from "../Shop/Shop";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={Shop} />
        <Route exact path="/cart" component={Cart} />
      </Router>
    </div>
  );
}

export default App;
