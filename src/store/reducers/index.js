import {combineReducers} from 'redux';

import productReducer from './product';
import sessionReducer from './session';

export default combineReducers({
   products: productReducer,
   session: sessionReducer
})
