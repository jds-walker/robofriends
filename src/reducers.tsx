import { CHANGE_SEARCH_FIELD } from "./constants";
import { setSearchField } from "./actions";

const initialState: any = {
  searchField: ""
};

export const searchRobots: any = (
  state: any = initialState,
  action: any = {}
): any => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};
