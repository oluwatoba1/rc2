import React from 'react';
import './App.css';

import Sidebar from './layout/Sidebar';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Account from './components/account/Account';
import Investment from './components/investment/Investment';
import Savings from './components/savings/Savings';
import FAQ from './components/faqs/FAQ';

const App = () => {
	return (
		<Router>
			<div className="rc-container">
				<Sidebar />

				<div className="right">
					<Switch>
						<Route exact path="/" component={Dashboard} />
						<Route path="/savings" component={Savings} />
						<Route path="/invest" component={Investment} />
						<Route path="/account" component={Account} />
						<Route path="/faqs" component={FAQ} />
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default App;
