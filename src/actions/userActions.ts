import * as actions from "../constants/ActionTypes";

export interface User {
  firstName: string;
  lastName: string;
  maxItems: number;
}

interface AddUserAction {
  type: typeof actions.ADD_USER;
  payload: User;
}

interface UpdateUserAction {
  type: typeof actions.UPDATE_USER;
  payload: User;
}

export type UserActionTypes = AddUserAction | UpdateUserAction;

// action generators
export const addUser = (newUser: User): UserActionTypes => {
  return {
    type: actions.ADD_USER,
    payload: newUser,
  };
};

export const updateUser = (user: User): UserActionTypes => {
  return {
    type: actions.UPDATE_USER,
    payload: user,
  };
};
