import React, {useState, useEffect, useContext} from 'react';

import './auth.css';
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {
	const authContext = useContext(AuthContext);
	const {login, isAuthenticated} = authContext;

	const [user, setUser] = useState({
		username: '',
		password: ''
	});
	let {username, password} = user;

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
		login({
			username,
			password
		});
	};

	return (
		<div className="container">
			<form onSubmit={onSubmit} id="authCard">
				<div className="form-group">
					<label htmlFor="username">Username</label>
					<input
						name="username"
						type="text"
						value={username}
						onChange={onChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						name="password"
						type="password"
						value={password}
						onChange={onChange}
					/>
				</div>
				<div className="submitWrapper">
					<button>Login</button>
				</div>
			</form>
			<p>
				Don't have an account?<a href="/register">Register</a>
			</p>
		</div>
	);
};

export default Login;
