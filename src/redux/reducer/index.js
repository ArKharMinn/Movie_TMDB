import { combineReducers } from "redux";
import { listReducer } from "./list";

const reducers = combineReducers({
  lists: listReducer,
});

export default reducers;
