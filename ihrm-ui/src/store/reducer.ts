import { combineReducers } from "redux";
import userSettings from "./userSettings";


const RootReducer = combineReducers({
  userSettings,
});

export default RootReducer;
