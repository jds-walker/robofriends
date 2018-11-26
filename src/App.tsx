import React, { Component } from "react";
import "./App.css";
import { robots } from "./robots";
import CardList from "./Components/CardList/CardList";
import SearchBox from "./Components/SearchBox/SearchBox";
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
      <div className="tc">
        <SearchBox />
        <CardList robots={robots} />
      </div>
    );
  }
}

export default App;
