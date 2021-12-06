import {
    REGISTER_SUCCESS
  } from "../shared/actionTypes";
  import initialState from "./initialState";
  import {RegisterActionType} from "../shared/IActionTypes"
  import {UserState} from "../shared/UserState"

  type ActionType = RegisterActionType;

  const authReducer = (state = initialState, action: ActionType): UserState => {
    switch (action.type) {
      case REGISTER_SUCCESS: {
        return {
          ...state,
          user: action.payload,
        };
      }
    }
  }

  export default authReducer;