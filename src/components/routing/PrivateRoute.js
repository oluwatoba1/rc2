import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import authContext from '../../context/auth/authContext';

const PrivateRoute = ({
	auth: { isAuthenticated, loading },
	component: Component,
	...rest
}) => {
	// const AuthContext = useContext(authContext);
	// const { isAuthenticated, loading } = AuthContext;
	return (
		<Route
			{...rest}
			render={props =>
				!isAuthenticated && !loading ? (
					<Redirect to="/login" />
				) : (
					<Component {...props} />
				)
			}
		/>
	);
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
