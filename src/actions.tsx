import { CHANGE_SEARCH_FIELD } from "./constants";

export const setSearchField: any = (text: String) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});
