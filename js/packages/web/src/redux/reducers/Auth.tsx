import { GET_USER_SUCCESS, REGISTER_SUCCESS, UPDATE_USER_SUCCESS } from '../shared/actionTypes';
import initialState from './initialState';
import { RegisterActionType, GetUserActionType, UpdateUserActionType } from '../shared/IActionTypes';
import { UserState } from '../shared/UserState';

type ActionType = RegisterActionType | GetUserActionType | UpdateUserActionType ;

const authReducer = (state = initialState, action: ActionType): UserState => {
  switch (action.type) {
    case REGISTER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default: 
      return state;
  }
};

export default authReducer;
