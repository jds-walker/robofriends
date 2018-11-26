import React, { Component } from "react";
import "./App.css";
import { robots } from "./robots";
import "tachyons";
import CardList from "./Components/CardList/CardList";

export interface IRobot {
  name: string;
  id: number;
  username: string;
  email: string;
}

class App extends Component {
  render() {
    return <CardList robots={robots} />;
  }
}

export default App;
