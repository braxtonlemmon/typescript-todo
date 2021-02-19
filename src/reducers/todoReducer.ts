import { TodoState, TodoActionTypes } from "../actions/todoActions";
import * as actions from "../constants/ActionTypes";

const initialState: TodoState = {
  todoItems: [],
};

export function todoReducer(
  state = initialState,
  action: TodoActionTypes
): TodoState {
  switch (action.type) {
    case actions.ADD_TODO:
      return {
        todoItems: [...state.todoItems, action.payload],
      };
    case actions.COMPLETE_TODO:
      return {
        todoItems: state.todoItems.map((item) => {
          console.log(item.timestamp);
          console.log(action.meta.timestamp);
          return item.timestamp === action.meta.timestamp
            ? { ...item, completed: !item.completed }
            : item;
        }),
      };
    case actions.DELETE_TODO:
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
