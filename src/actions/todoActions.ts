import * as actions from "../constants/ActionTypes";

export interface Todo {
  todoItem: string;
  timestamp: string;
  completed: boolean;
}

export interface TodoState {
  todoItems: Todo[];
}

interface AddTodoAction {
  type: typeof actions.ADD_TODO;
  payload: Todo;
}

interface CompleteTodoAction {
  type: typeof actions.COMPLETE_TODO;
  meta: {
    timestamp: string;
  };
}

interface DeleteTodoAction {
  type: typeof actions.DELETE_TODO;
  meta: {
    timestamp: string;
  };
}

export type TodoActionTypes =
  | AddTodoAction
  | CompleteTodoAction
  | DeleteTodoAction;

// action generators

export const addTodo = (newTodo: Todo): TodoActionTypes => {
  return {
    type: actions.ADD_TODO,
    payload: newTodo,
  };
};

export const completeTodo = (timestamp: string): TodoActionTypes => {
  return {
    type: actions.COMPLETE_TODO,
    meta: {
      timestamp,
    },
  };
};

export const deleteTodo = (timestamp: string): TodoActionTypes => {
  return {
    type: actions.DELETE_TODO,
    meta: {
      timestamp,
    },
  };
};
