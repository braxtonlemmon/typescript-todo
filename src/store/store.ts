import { createStore } from "redux";
import todoReducer from "../reducers/todoReducer";

export type RootState = ReturnType<typeof todoReducer>;

export const store = createStore(
  todoReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
