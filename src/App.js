import React from 'react';
import {
	Switch,
	Route,
	BrowserRouter as Router,
	Redirect
} from 'react-router-dom';

import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PrivateRoute from './components/routing/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import Savings from './components/savings/Savings';
import AuthState from './context/auth/AuthState';
import Layout from './layout/Layout';

const App = (props) => {
	return (
		<AuthState>
			<Router>
				<div className="rc-container">
					<Switch>
						<Redirect exact from="/" to="/dashboard" />
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<Layout>
							<PrivateRoute path="/dashboard" component={Dashboard} />
							<PrivateRoute path="/savings" component={Savings} />
						</Layout>
					</Switch>
				</div>
			</Router>
		</AuthState>
	);
};

export default App;
