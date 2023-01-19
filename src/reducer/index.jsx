import userDataReducer from "./userData";
import loggedReducer from "./isLogged";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  userData: userDataReducer,
  isLogged: loggedReducer,
});

export default rootReducer;

