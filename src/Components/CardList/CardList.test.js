import { shallow } from "enzyme";
import React from "react";
import CardList from "./CardList";

it("cardlist snapshot", () => {
  const mockRobots = [
    {
      name: "JohnJohn",
      email: "jon@gmail.com",
      id: 17
    }
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
