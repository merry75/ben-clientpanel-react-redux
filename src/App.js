import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AppNavbar from "./components/layout/AppNavbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar />
          <div className="container">
            <h1>Hello</h1>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
