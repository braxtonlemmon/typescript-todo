// import * as actions from "../actions";
// import { Todo } from "../store/types";

import {
  TodoState,
  TodoActionTypes,
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
} from "../actions/index";

const initialState: TodoState = {
  todoItems: [],
};

export function todoReducer(
  state = initialState,
  action: TodoActionTypes
): TodoState {
  switch (action.type) {
    case ADD_TODO:
      return {
        todoItems: [...state.todoItems, action.payload],
      };
    case COMPLETE_TODO:
      return {
        todoItems: [],
      };
    case DELETE_TODO:
      return {
        todoItems: state.todoItems.filter(
          (todo) => todo.timestamp !== action.meta.timestamp
        ),
      };
    default:
      return state;
  }
}

export default todoReducer;
