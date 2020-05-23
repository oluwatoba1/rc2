import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './auth.css';
import { register, setLoading } from '../../actions/authActions';

const Register = ({
	history,
	auth: { isAuthenticated, loading },
	register,
	setLoading
}) => {
	const [user, setUser] = useState({
		firstname: '',
		lastname: '',
		email: '',
		phone: '',
		password: '',
		confirm_password: ''
	});

	let { firstname, lastname, email, phone, password, confirm_password } = user;

	useEffect(() => {
		isAuthenticated && history.push('/');

		if (password === confirm_password) {
			document.getElementById('confirmPass').style.borderColor = '#157e42';
			document.getElementById('confirmPass').style.borderWidth = '0 0 4px';
		} else {
			document.getElementById('confirmPass').style.borderColor = 'red';
			document.getElementById('confirmPass').style.borderWidth = '0 0 4px';
		}
	}, [password, confirm_password, isAuthenticated, history]);

	const onChange = e => {
		setUser({
			...user,
			[e.target.name]: e.target.value.trim()
		});
	};

	const onSubmit = e => {
		e.preventDefault();
		setLoading(true);
		if (password === confirm_password) {
			register({
				firstname,
				lastname,
				email,
				phone,
				password
			});
		}
		setLoading(false);
	};

	return (
		<div className="regContainer">
			<form onSubmit={onSubmit} id="regCard">
				<h3>User Signup</h3>
				<div className="form-body">
					<div className="form-group">
						<label htmlFor="firstname">First Name</label>
						<input
							name="firstname"
							type="text"
							value={firstname}
							onChange={onChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="lastname">Last Name</label>
						<input
							name="lastname"
							type="text"
							value={lastname}
							onChange={onChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							name="email"
							type="email"
							value={email}
							onChange={onChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="phone">Phone</label>
						<input
							name="phone"
							type="phone"
							value={phone}
							onChange={onChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							name="password"
							type="password"
							value={password}
							onChange={onChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="confirm_password">Confirm Password</label>
						<input
							id="confirmPass"
							name="confirm_password"
							type="password"
							value={confirm_password}
							onChange={onChange}
							required
						/>
					</div>
				</div>
				<div className="submitWrapper">
					<button type="submit">{loading ? 'Signing up...' : 'Sign up'}</button>
				</div>
				<p>
					Already have an account? <a href="/login">Login</a>
				</p>
			</form>
		</div>
	);
};

Register.propTypes = {
	auth: PropTypes.bool.isRequired,
	register: PropTypes.func,
	setLoading: PropTypes.func
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, { register, setLoading })(Register);
