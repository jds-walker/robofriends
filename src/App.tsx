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
        <Card
          robotEmail={robots[0].email}
          robotId={robots[0].id}
          robotName={robots[0].name}
        />
        <Card
          robotEmail={robots[1].email}
          robotId={robots[1].id}
          robotName={robots[1].name}
        />
        <Card
          robotEmail={robots[2].email}
          robotId={robots[2].id}
          robotName={robots[2].name}
        />
      </div>
    );
  }
}

export default App;
