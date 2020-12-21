import { AuthAction } from "../actions";

const initailState = {
	login: false,
	userinfo: {},
	failure: 0
};

const AuthReducer = (state = initailState, action) => {
	switch(action.type) {
		case AuthAction.LOGIN: {
			console.log('login');
			return state;
		}
		case AuthAction.LOGIN_SUCCESS: {
			console.log('success');
			return {
				...state,
				userinfo: action.data,
				login: true,
			};
		}
		case AuthAction.LOGIN_FAILURE: {
			console.log('failure');
			return {
				...state,
				userinfo: {},
				login: false,
				failure: state.failure + 1
			}
		}
		default: {
			return state;
		}
	}
};

export default AuthReducer;