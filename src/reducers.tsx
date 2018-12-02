import { CHANGE_SEARCH_FIELD } from "./constants";
import { object, string, any } from "prop-types";

// interface IInitialState {
//     searchField: string
// }

const initialState = {
  searchField: ""
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};
