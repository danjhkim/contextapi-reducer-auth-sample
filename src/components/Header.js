import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import LoginContext from '../contexts/AuthContext';

const Header = () => {
	const navigate = useNavigate();
	const authcontext = useContext(LoginContext);

	const logOut = () => {
		authcontext.SignOut(() => {
			navigate('/');
		});
	};

	const renderAuthButton = () => {
		if (authcontext.authenticated.auth === null) {
			return null;
		} else if (authcontext.authenticated.auth) {
			return <button onClick={logOut}>Sign Out</button>;
		} else {
			return <Link to='/signin'>Login</Link>;
		}
	};
	return (
		<div className='header'>
			<nav>
				<Link to='/'>Home</Link>
				{authcontext.authenticated.auth ? (
					<Link to='/secret'>Secret</Link>
				) : null}

				<div>{renderAuthButton()}</div>
			</nav>
		</div>
	);
};

export default Header;
