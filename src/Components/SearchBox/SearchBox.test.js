import { shallow } from "enzyme";
import React from "react";
import SearchBox from "./SearchBox";

it("SearchbBox Snapshot", () => {
  expect(shallow(<SearchBox />)).toMatchSnapshot();
});
