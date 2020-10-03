/** @format */

import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
