import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./Components/Card/Card";
import { robots } from "./robots";
import "tachyons";

export interface IRobot {
  name: string;
  id: number;
  username: string;
  email: string;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card robots={robots} />
      </div>
    );
  }
}

export default App;
