import { CountAction } from '../actions';

const CountReducer = (state, action) => {
	switch(action.type) {
		case CountAction.INCREASEMENT: {
			return state + 1;
		}
		case CountAction.DECREASEMENT: {
			return state - 1;
		}
		case CountAction.ADD_CUSTOM: {
			return state + action.value * 1;
		}
		default: {
			return state;
		}
	}
};

export default CountReducer;