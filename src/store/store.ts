import { createStore } from "redux";
// import todoReducer from "../reducers/todoReducer";
import allReducer from "../reducers";

export type RootState = ReturnType<typeof allReducer>;

export const store = createStore(
  allReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
