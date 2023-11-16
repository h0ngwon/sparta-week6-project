import { createStore } from "redux";
import { combineReducers } from "redux";
import workoutReducer from "redux/reducers/workout";

const rootReducer = combineReducers({ workoutReducer });
const store = createStore(rootReducer);

export default store;
