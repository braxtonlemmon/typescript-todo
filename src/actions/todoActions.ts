import * as actions from "./index";

interface Action {
  type: string;
  item: string;
}

export const addTodo = (item: string): Action => {
  return {
    type: actions.ADD_TODO,
    item,
  };
};
