import React, { useReducer } from 'react';
import AuthReducer from '../reducers/AuthReducer';
import { LOGIN, LOGOUT, AUTH_ERROR, LOADING } from '../reducers/types';
import { userLogin, userLogout } from '../services/auth';

const Context = React.createContext();

const initial_state = {
	authenticated: {
		auth: false,
		email: null,
		loading: false,
		errorMessage: null,
	},
};

export const LoginStore = props => {
	const [state, dispatch] = useReducer(AuthReducer, initial_state);

	const Login = async (data, callback) => {
		dispatch({
			type: LOADING,
			payload: true,
		});

		try {
			const res = await userLogin(data);
			dispatch({
				type: LOGIN,
				payload: { auth: true, email: res },
			});

			dispatch({
				type: LOADING,
				payload: false,
			});

			callback();
		} catch (err) {
			console.log(err);
			dispatch({ type: AUTH_ERROR, payload: err.message });
		}
	};

	const SignOut = async callback => {
		try {
			const res = await userLogout();
			dispatch({
				type: LOGOUT,
				payload: res,
			});

			callback();
		} catch (err) {
			dispatch({ type: AUTH_ERROR, payload: err.message });
		}
	};

	return (
		<Context.Provider
			value={{
				authenticated: state.authenticated,
				errorMessage: state.errorMessage,
				Login,
				SignOut,
			}}>
			{props.children}
		</Context.Provider>
	);
};

export default Context;
