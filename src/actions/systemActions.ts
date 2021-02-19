import { ActionCreatorsMapObject } from "redux";
import * as actions from "../constants/ActionTypes";

export interface SystemState {
  isInitiated: boolean;
}

export interface InitiateSystemAction {
  type: typeof actions.INITIATE_SYSTEM;
}

export const initiateSystem = (): InitiateSystemAction => {
  return {
    type: actions.INITIATE_SYSTEM,
  };
};
