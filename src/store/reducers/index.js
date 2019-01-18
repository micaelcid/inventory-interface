import {combineReducers} from 'redux';

import reducerProduct from './reducerProduct';
import reducerSession from './reducerSession';

export default combineReducers({
   reducerProduct,
   reducerSession
})
