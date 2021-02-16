import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  Todo,
  TodoActionTypes,
} from "./index";

export const addTodo = (newTodo: Todo): TodoActionTypes => {
  return {
    type: ADD_TODO,
    payload: newTodo,
  };
};

export const completeTodo = (timestamp: number): TodoActionTypes => {
  return {
    type: COMPLETE_TODO,
    meta: {
      timestamp,
    },
  };
};

export const deleteTodo = (timestamp: number): TodoActionTypes => {
  return {
    type: DELETE_TODO,
    meta: {
      timestamp,
    },
  };
};
