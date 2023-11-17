import { createStore } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import workoutReducer from "redux/reducers/workout";
import menuReducer from "redux/reducers/menu";

const rootReducer = combineReducers({ workoutReducer, menuReducer });
const store = createStore(rootReducer, composeWithDevTools());

export default store;
