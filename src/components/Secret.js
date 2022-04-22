import { useContext } from 'react';
import LoginContext from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const Secret = () => {
	const authcontext = useContext(LoginContext);

	if (authcontext.authenticated.auth) {
		return (
			<div>
				YOU ARE AUTHORIZED AND SEE THIS SECRET PAGE! Hello world
				message!
			</div>
		);
	} else {
		return <Navigate to='/' replace />;
	}
};

export default Secret;
