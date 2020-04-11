import React from 'react';
import './App.css';

import Sidebar from './layout/Sidebar';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/account/Profile';
import ContactInfo from './components/account/ContactInfo';
import Financials from './components/account/Financials';
import Security from './components/account/Security';
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
						<Route path="/dashboard" component={Dashboard} />
						<Route path="/savings" component={Savings} />
						<Route path="/invest" component={Investment} />
						<Route path="/account/profile" component={Profile} />
						<Route path="/account/contact-info" component={ContactInfo} />
						<Route path="/account/financials" component={Financials} />
						<Route path="/account/security" component={Security} />
						<Route path="/faqs" component={FAQ} />
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default App;
