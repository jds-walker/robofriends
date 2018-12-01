import { shallow } from "enzyme";
import React from "react";
import Card from "./Card";

it("Expect card to render", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
