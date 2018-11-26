import React from "react";

const SearchBox = () => {
  return (
    <div className="pa2">
      <h1 className="tc">RoboFriends</h1>
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Robots"
      />
    </div>
  );
};

export default SearchBox;
