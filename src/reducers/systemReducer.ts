import * as actions from "../constants/ActionTypes";
import { SystemState, InitiateSystemAction } from "../actions/systemActions";

const initialState: SystemState = {
  isInitiated: false,
};

export function systemReducer(
  state = initialState,
  action: InitiateSystemAction
): SystemState {
  switch (action.type) {
    case actions.INITIATE_SYSTEM:
      return {
        isInitiated: true,
      };
    default:
      return state;
  }
}
