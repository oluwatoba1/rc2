import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './auth.css';
import { register } from '../../actions/authActions';
// import AuthContext from '../../context/auth/authContext';

const Register = ({ history, isAuthenticated, register }) => {
	// const authContext = useContext(AuthContext);
	// const {register, isAuthenticated} = authContext;

	const [user, setUser] = useState({
		firstname: '',
		lastname: '',
		email: '',
		username: '',
		phone: '',
		password: ''
	});

	let { firstname, lastname, email, username, phone, password } = user;

	useEffect(() => {
		isAuthenticated && history.push('/');
	}, [isAuthenticated, history]);

	const onChange = e => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	};

	const onSubmit = e => {
		e.preventDefault();
		register({
			firstname,
			lastname,
			email,
			username,
			phone,
			password
		});
	};

	return (
		<div className="regContainer">
			<form onSubmit={onSubmit} id="regCard">
				<h3>Account Register</h3>
				<div className="form-body">
					<div className="form-group">
						<label htmlFor="firstname">First Name</label>
						<input
							name="firstname"
							type="text"
							placeholder="First Name"
							value={firstname}
							onChange={onChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="lastname">Last Name</label>
						<input
							name="lastname"
							type="text"
							placeholder="Last Name"
							value={lastname}
							onChange={onChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							name="email"
							type="text"
							placeholder="Email"
							value={email}
							onChange={onChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="username">Username</label>
						<input
							name="username"
							type="text"
							placeholder="Username"
							value={username}
							onChange={onChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="phone">Phone</label>
						<input
							name="phone"
							type="text"
							placeholder="Phone"
							value={phone}
							onChange={onChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							name="password"
							type="password"
							placeholder="Password"
							value={password}
							onChange={onChange}
						/>
					</div>
				</div>
				<div className="submitWrapper">
					<button type="submit">Register</button>
				</div>
				<p>
					Already have an account? <a href="/login">Login</a>
				</p>
			</form>
		</div>
	);
};

Register.propTypes = {
	auth: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(Register);
