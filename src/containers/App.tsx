import * as React from "react";
import "./App.css";
import CardList from "../components/CardList/CardList";
import SearchBox from "../components/SearchBox/SearchBox";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
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
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </div>
      );
    }
  }
}

export default App;
