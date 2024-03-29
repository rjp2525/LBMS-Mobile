import { combineReducers } from "redux";
import AppReducer, { appStateIF } from "./AppReducer";

export interface reducerStateIF {
  app: appStateIF;
}

export default combineReducers({ app: AppReducer });
