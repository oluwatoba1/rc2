import React, {useState, useEffect, useContext} from 'react';

import './auth.css';
import AuthContext from '../../context/auth/authContext';

const Register = (props) => {
	const authContext = useContext(AuthContext);
	const {register, isAuthenticated} = authContext;

	const [user, setUser] = useState({
		fullname: '',
		email: '',
		username: '',
		phone: '',
		password: ''
	});

	let {fullname, email, username, phone, password} = user;

	useEffect(() => {
		isAuthenticated && props.history.push('/dashboard');
	}, [isAuthenticated, props.history]);

	const onChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		register({
			fullname,
			email,
			username,
			phone,
			password
		});
	};

	return (
		<div className="container">
			<form onSubmit={onSubmit} id="authCard">
				<div className="form-group">
					<label htmlFor="fullname">Full Name</label>
					<input name="fullname" type="text" value="" onChange={onChange} />
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input name="email" type="text" value="" onChange={onChange} />
				</div>
				<div className="form-group">
					<label htmlFor="username">Username</label>
					<input name="username" type="text" value="" onChange={onChange} />
				</div>
				<div className="form-group">
					<label htmlFor="phone">Phone</label>
					<input name="phone" type="text" value="" onChange={onChange} />
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input name="password" type="password" value="" onChange={onChange} />
				</div>
				<div className="submitWrapper">
					<input type="submit" value="Register" />
				</div>
			</form>
			<p>
				Already have an account? <a href="/login">Login</a>
			</p>
		</div>
	);
};

export default Register;
