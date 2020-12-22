const { AuthAcion } = require("../actions")

const initailState = {
	login: false,
	userinfo: {},
	failure: 0
}

const AuthReducer = (state = initailState, action) => {
	switch(action.type) {
		case AuthAcion.LOGIN: {
			return state;
		}
		case AuthAcion.LOGIN_SUCCESS: {
			console.log('login');
			return {
				...state,
				userinfo: action.data,
				login: true,
			};
		}
		case AuthAcion.LOGIN_FAILURE: {
			console.log(state.failure);
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