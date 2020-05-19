import React from 'react';
import {
	Switch,
	Route,
	BrowserRouter as Router,
	Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PrivateRoute from './components/routing/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import Savings from './components/savings/Savings';
// import AuthState from './context/auth/AuthState';
// import AlertState from './context/alert/AlertState';
import Layout from './layout/Layout';
import store from './store';

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<div className="rc-container">
					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<Layout>
							<PrivateRoute path="/" component={Dashboard} />
							<PrivateRoute path="/savings" component={Savings} />
						</Layout>
					</Switch>
				</div>
			</Router>
		</Provider>
	);
};

export default App;
