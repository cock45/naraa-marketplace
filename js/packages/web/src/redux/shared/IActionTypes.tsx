import { REGISTER_SUCCESS, GET_USER_SUCCESS, UPDATE_USER_SUCCESS } from "./actionTypes";

export interface RegisterActionType {
    type: typeof REGISTER_SUCCESS,
    payload: []
};
export interface GetUserActionType {
    type: typeof GET_USER_SUCCESS,
    payload: []
};

export interface UpdateUserActionType {
    type: typeof UPDATE_USER_SUCCESS,
    payload: []
};