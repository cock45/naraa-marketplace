import { combineReducers } from "redux";
import Auth from "./Auth";


const reducers = combineReducers<any>({
  auth: Auth,
});
export default reducers;
