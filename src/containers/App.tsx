import * as React from "react";
import { connect } from "react-redux";
import "./App.css";
import CardList from "../components/CardList/CardList";
import SearchBox from "../components/SearchBox/SearchBox";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import "tachyons";

import { setSearchField, requestRobots } from "../actions";

const mapStateToProps = (state: any) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSearchChange: (event: any) =>
      dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

export interface IRobot {
  name: string;
  id: number;
  username: string;
  email: string;
}

interface IAppProps {
  searchField: string;
  robots: any;
  onRequestRobots: any;
  isPending: any;
  onSearchChange: (Event: React.SyntheticEvent<Element>) => void;
}

class App extends React.Component<IAppProps> {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter((robot: any) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (isPending) {
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
