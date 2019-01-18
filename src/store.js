import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from './store/reducers'

export default () =>
    createStore(reducer, applyMiddleware( thunkMiddleware ) );
