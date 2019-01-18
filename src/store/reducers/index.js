import {combineReducers} from 'redux';

import productReducer from './productReducer';
import sessionReducer from './sessionReducer';

export default combineReducers({
   products: productReducer,
   session: sessionReducer
})
