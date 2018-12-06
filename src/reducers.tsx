import { CHANGE_SEARCH_FIELD } from "./constants";

interface IInitialState {
  searchField: string;
}

const initialState = {
  searchField: ""
};

export const searchRobots = (
  state: IInitialState = initialState,
  action: any = {}
) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};
