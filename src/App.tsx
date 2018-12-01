import * as React from "react";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import SearchBox from "./Components/SearchBox/SearchBox";
import "tachyons";

export interface IRobot {
  name: string;
  id: number;
  username: string;
  email: string;
}

interface IAppState {
  robots: Array<IRobot>;
  searchfield: string;
}

interface IAppProps {}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      robots: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = (event: React.SyntheticEvent<HTMLInputElement>): void => {
    this.setState({ searchfield: event.currentTarget.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if (robots.length === 0) {
      return <h1 className="tc">Loading</h1>;
    } else {
      return (
        <div className="tc pt7">
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filteredRobots} />
        </div>
      );
    }
  }
}

export default App;
