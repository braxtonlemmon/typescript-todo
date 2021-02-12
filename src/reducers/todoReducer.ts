import * as actions from "../actions";

interface Action {
  type: string;
  item: string;
}

function todoReducer(state: string[] = [], action: Action): string[] {
  switch (action.type) {
    case actions.ADD_TODO:
      return [...state, action.item];
    default:
      return state;
  }
}

export default todoReducer;
