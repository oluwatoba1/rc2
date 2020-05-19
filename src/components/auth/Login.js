import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './auth.css';
// import AuthContext from '../../context/auth/authContext';
// import AlertContext from '../../context/alert/alertContext';
import Alerts from '../../layout/Alerts';
import { login, clearErrors } from '../../actions/authActions';
import { setAlert } from '../../actions/alertActions';

const Login = ({
	auth: { isAuthenticated, error },
	history,
	clearErrors,
	login,
	setAlert
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
		let user = username.trim();
		let pass = password.trim();

		if (username === '' && password === '') {
			setAlert('Please complete all fields');
		} else if (username === '') {
			setAlert(`Please input a username`);
		} else if (password === '') {
			setAlert(`Please input a password`);
		} else if (user && pass) {
			login({
				username,
				password
			});
		}
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
							style={{ fontFamily: 'Font Awesome 5 Brands' }}
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
							style={{ fontFamily: 'Font Awesome 5 Free', fontWeight: '900' }}
							name="password"
							type="password"
							placeholder="&#xF084; Password"
							value={password}
							onChange={onChange}
						/>
					</div>
					<div className="submitWrapper">
						{/* <input type="submit" value="Login" /> */}
						<button type="submit">
							Login <i className="fa fa-arrow-right"></i>
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
	clearErrors: PropTypes.func.isRequired,
	login: PropTypes.func.isRequired,
	setAlert: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, { clearErrors, login, setAlert })(
	Login
);
