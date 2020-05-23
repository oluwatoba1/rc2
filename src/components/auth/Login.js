import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './auth.css';
// import AuthContext from '../../context/auth/authContext';
// import AlertContext from '../../context/alert/alertContext';
import Alerts from '../../layout/Alerts';
import { login, clearErrors, setLoading } from '../../actions/authActions';
import { setAlert } from '../../actions/alertActions';

const Login = ({
	auth: { isAuthenticated, error, loading },
	history,
	clearErrors,
	login,
	setAlert,
	setLoading
}) => {
	// const authContext = useContext(AuthContext);
	// const alertContext = useContext(AlertContext);
	// const { login, isAuthenticated, error, clearErrors } = authContext;
	// const { setAlert } = alertContext;

	const [user, setUser] = useState({
		username: '',
		password: ''
	});
	// const [isPressed, setIsPressed] = useState(null);
	let { username, password } = user;

	useEffect(() => {
		isAuthenticated && history.push('/');

		if (error) {
			setAlert(error);
			clearErrors();
		}
		//	eslint-disable-next-line
	}, [error, isAuthenticated, history]);

	const onChange = e => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	};

	const onSubmit = e => {
		e.preventDefault();
		setLoading(true);

		let mail = username.trim();
		let pass = password.trim();

		if (mail === '' && password === '') {
			setAlert('Please complete all fields');
		} else if (mail === '') {
			setAlert(`Please input an email`);
		} else if (password === '') {
			setAlert(`Please input a password`);
		} else if (mail && pass) {
			login({
				username,
				password
			});
		}
		setLoading(false);
	};

	return (
		<div className="loginContainer">
			<div className="auth-image"></div>
			<div className="form">
				<form onSubmit={onSubmit} id="authCard">
					<h3>User Login</h3>
					<div className="form-group">
						{/* <label htmlFor="username">Username</label> */}
						<i className="fa fa-user"></i>
						<input
							name="username"
							type="text"
							placeholder="Email"
							value={username}
							onChange={onChange}
							required
						/>
					</div>
					<div className="form-group">
						{/* <label htmlFor="password">Password</label> */}
						<i className="fa fa-key"></i>
						<input
							name="password"
							type="password"
							placeholder="Password"
							value={password}
							onChange={onChange}
							required
						/>
					</div>
					<div className="submitWrapper">
						{/* <input type="submit" value="Login" /> */}
						<button type="submit">
							{loading ? 'Logging in' : 'Login'}{' '}
							<i className="fa fa-arrow-right" />
						</button>
					</div>
					<Alerts />
					<p>
						Don't have an account?<a href="/register">Register</a>
					</p>
				</form>
			</div>
		</div>
	);
};

Login.propTypes = {
	auth: PropTypes.object,
	clearErrors: PropTypes.func,
	login: PropTypes.func,
	setAlert: PropTypes.func,
	setLoading: PropTypes.func
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, {
	clearErrors,
	login,
	setAlert,
	setLoading
})(Login);
