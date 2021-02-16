export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export interface Todo {
  todoItem: string;
  timestamp: string;
  completed: boolean;
}

export interface TodoState {
  todoItems: Todo[];
}

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

interface CompleteTodoAction {
  type: typeof COMPLETE_TODO;
  meta: {
    timestamp: string;
  };
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  meta: {
    timestamp: string;
  };
}

export type TodoActionTypes =
  | AddTodoAction
  | CompleteTodoAction
  | DeleteTodoAction;
