import * as actions from "../constants/ActionTypes";
import { User, UserActionTypes } from "../actions/userActions";

const initialState: User = {
  firstName: "",
  lastName: "",
  maxItems: 0,
};

export function userReducer(
  state = initialState,
  action: UserActionTypes
): User {
  switch (action.type) {
    case actions.ADD_USER:
      return action.payload;
    case actions.UPDATE_USER:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
