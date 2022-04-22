import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import LoginContext from '../contexts/AuthContext';

const MyInput = React.forwardRef(({ name, type, label, ...rest }, ref) => {
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<input type={type} name={name} {...rest} ref={ref} />
		</div>
	);
});

const errorSchema = yup
	.object({
		username: yup.string().email().required('Enter email'),
		password: yup
			.string()
			.required('No password provided.')
			.min(4, 'Password is too short - should be 4 chars minimum.'),
	})
	.required();

const Form = ({ title }) => {
	const authcontext = useContext(LoginContext);

	const navigate = useNavigate();

	const onSubmitconsole = data => {
		authcontext.Login(data, () => {
			navigate('/secret');
		});
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(errorSchema),
	});

	return (
		<div>
			{title}
			<form onSubmit={handleSubmit(onSubmitconsole)}>
				<fieldset>
					<MyInput
						name='username'
						label='Enter username: '
						{...register('username')}
						type='input'
					/>
					<p>{errors.username?.message}</p>
				</fieldset>
				<fieldset>
					<MyInput
						name='password'
						label='Enter password: '
						{...register('password')}
						type='password'
					/>
					<p>{errors.password?.message}</p>
				</fieldset>
				<div>{authcontext.errorMessage}</div>
				<button className='ui button primary'>Log In</button>
			</form>
		</div>
	);
};

export default Form;
