import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './auth.css';
import { register, setLoading } from '../../actions/authActions';
// import AuthContext from '../../context/auth/authContext';

const Register = ({
	history,
	auth: { isAuthenticated, loading },
	register,
	setLoading
}) => {
	// const authContext = useContext(AuthContext);
	// const {register, isAuthenticated} = authContext;

	const [user, setUser] = useState({
		firstname: '',
		lastname: '',
		email: '',
		phone: '',
		password: ''
	});

	let { firstname, lastname, email, phone, password } = user;

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
		setLoading(true);
		register({
			firstname,
			lastname,
			email,
			phone,
			password
		});
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
						/>
					</div>
					<div className="form-group">
						<label htmlFor="lastname">Last Name</label>
						<input
							name="lastname"
							type="text"
							value={lastname}
							onChange={onChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input name="email" type="text" value={email} onChange={onChange} />
					</div>
					<div className="form-group">
						<label htmlFor="phone">Phone</label>
						<input name="phone" type="text" value={phone} onChange={onChange} />
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
				</div>
				<div className="submitWrapper">
					<button type="submit">
						{loading ? 'Registering...' : 'Sign up'}
					</button>
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
