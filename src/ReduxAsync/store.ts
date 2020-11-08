import { createStore, combineReducers } from "redux";
import reducer from "./reducers";

const rootReducer = combineReducers({
  serverData: reducer,
});

const store = createStore(rootReducer);

export default store;
