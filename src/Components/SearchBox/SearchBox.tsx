import React from "react";
import "./SearchBox.css";

interface ISearchBoxProps {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const SearchBox = ({ searchChange }: ISearchBoxProps) => {
  return (
    <nav>
      <div className="pa2 bg-lightest-blue">
        <h1 className="f2">RoboFriends</h1>
        <input
          className="pa3 ba b--green bg-lightest-blue"
          type="search"
          placeholder="Search Robots"
          onChange={searchChange}
        />
      </div>
    </nav>
  );
};

export default SearchBox;
