import React from 'react';
import {
	Switch,
	Route,
	BrowserRouter as Router,
	Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import './App.css';
import NotFound from './404.js';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PrivateRoute from './components/routing/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import Savings from './components/savings/Savings';
import Account from './components/account/Account';
// import AuthState from './context/auth/AuthState';
// import AlertState from './context/alert/AlertState';
import Layout from './layout/Layout';
import { persistor, store } from './store';

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Router>
					<div className="rc-container">
						<Switch>
							<Route path="/login" component={Login} />
							<Route path="/register" compoent={Register} />
							<Layout>
								<Switch>
									<PrivateRoute path="/" component={Dashboard} />
									<PrivateRoute path="/savings" component={Savings} />
									<PrivateRoute path="/account" component={Account} />
									<Route component={NotFound} />
								</Switch>
							</Layout>
						</Switch>
					</div>
				</Router>
			</PersistGate>
		</Provider>
	);
};

export default App;
