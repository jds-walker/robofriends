import * as React from "react";
import { connect } from "react-redux";
import "./App.css";
import CardList from "../components/CardList/CardList";
import SearchBox from "../components/SearchBox/SearchBox";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import "tachyons";

import { setSearchField } from "../actions";

const mapStateToProps = (state: any) => {
  return {
    searchField: state.searchRobots.searchField
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSearchChange: (event: any) => dispatch(setSearchField(event.target.value))
  };
};

export interface IRobot {
  name: string;
  id: number;
  username: string;
  email: string;
}

interface IAppState {
  robots: Array<IRobot>;
}

interface IAppProps {
  searchField: string;
  onSearchChange: (Event: React.SyntheticEvent<Element>) => void;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      robots: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ robots: users }));
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (robots.length === 0) {
      return <h1 className="tc">Loading</h1>;
    } else {
      return (
        <div className="tc pt7">
          <SearchBox searchChange={onSearchChange} />
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </div>
      );
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
