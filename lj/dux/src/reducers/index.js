import { combineReducers } from 'redux';
import CartReducer from './CartReducer';
import AuthReducer from './AuthReducer';

const rootReducer = combineReducers({
	CartReducer,
	AuthReducer,
});

export default rootReducer;