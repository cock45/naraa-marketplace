import { createStore, applyMiddleware } from 'redux';
import reducer from "../reducers";
import thunk from 'redux-thunk';
import { UserState } from '../shared/UserState';
import { composeWithDevTools } from 'redux-devtools-extension';
import initialState from "../reducers/initialState";

function configureStore(initialState: UserState) {
    return createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    );
}
const store = configureStore(initialState);
export default store;