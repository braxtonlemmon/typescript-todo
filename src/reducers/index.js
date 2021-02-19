import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { userReducer } from "./userReducer";

const allReducer = combineReducers({ todoReducer, userReducer });

export default allReducer;
