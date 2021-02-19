import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { userReducer } from "./userReducer";
import { systemReducer } from "./systemReducer";

const allReducer = combineReducers({ todoReducer, userReducer, systemReducer });

export default allReducer;
