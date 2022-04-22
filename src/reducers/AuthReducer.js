import { LOGIN, AUTH_ERROR, LOGOUT, LOADING } from './types';

const AuthReducer = (state, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				authenticated: action.payload,
			};
		case LOGOUT:
			return {
				...state,
				authenticated: action.payload,
			};
		case AUTH_ERROR:
			return { ...state, errorMessage: action.payload };
		case LOADING:
			return { ...state, loading: action.payload };
		default:
			return state;
	}
};

export default AuthReducer;
