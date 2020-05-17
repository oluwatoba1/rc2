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
		<div className="loginContainer">
			<div className="auth-image"></div>
			<div className="form">
				<form onSubmit={onSubmit} id="authCard">
					<h3>Account Login</h3>
					<div className="form-group">
						<label htmlFor="username">Username</label>
						{/* <i className="fa fa-user"></i> */}
						<input
							style={{fontFamily: 'Font Awesome 5 Brands'}}
							name="username"
							type="text"
							placeholder="&#xF002; Username"
							value={username}
							onChange={onChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						{/* <i className="fa fa-key"></i> */}
						<input
							name="password"
							type="password"
							placeholder="&#xF084; Password"
							value={password}
							onChange={onChange}
						/>
					</div>
					<div className="submitWrapper">
						<button>
							Login <span className="fa fa-arrow-right"></span>
						</button>
					</div>
				</form>
				<p>
					Don't have an account?<a href="/register">Register</a>
				</p>
			</div>
		</div>
	);
};

export default Login;
