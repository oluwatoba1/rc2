import React from 'react';
import './App.css';

import Sidebar from './layout/Sidebar';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/account/Profile';
import ContactInfo from './components/account/ContactInfo';
import Financials from './components/account/Financials';
import Security from './components/account/Security';
import Investment from './components/investment/Investment';
import Savings from './components/savings/Savings';
import FAQ from './components/faqs/FAQ';
import ViewTransactions from './components/savings/ViewTransactions';
import SendMoney from './components/savings/SendMoney';
import DecemberSavings from './components/savings/DecemberSavings';
import RequestWithdrawal from './components/savings/RequestWithdrawal';
import AddSavings from './components/savings/AddSavings';

import user from './img/avatar.png';

const App = () => {
	return (
		<Router>
			<div className="rc-container">
				<Sidebar />
				<div id="right" className="right">
					<div className="rightHeader">
						<input type="search" placeholder="Search" />
						<div className="accountHeader">
							<div className="accountProfile">
								<div id="caption">
									<h4>John Doe</h4>
									<p>Member</p>
								</div>
								<img src={user} alt="user" />
								<i className="fa fa-angle-down" />
							</div>
							<div className="others">
								<div className="notifications"></div>
								<div className="logout"></div>
							</div>
						</div>
					</div>
					<Switch>
						<Route exact path="/" component={Dashboard} />
						<Route path="/dashboard" component={Dashboard} />
						<Route path="/savings" component={Savings} />
						<Route path="/savings/add" component={AddSavings} />
						<Route path="/savings/request" component={RequestWithdrawal} />
						<Route
							path="/savings/december-savings"
							component={DecemberSavings}
						/>{' '}
						<Route path="/savings/send" component={SendMoney} />{' '}
						<Route
							path="/savings/view-transactions"
							component={ViewTransactions}
						/>{' '}
						<Route path="/invest" component={Investment} />{' '}
						<Route path="/account/profile" component={Profile} />{' '}
						<Route path="/account/contact-info" component={ContactInfo} />{' '}
						<Route path="/account/financials" component={Financials} />{' '}
						<Route path="/account/security" component={Security} />{' '}
						<Route path="/faqs" component={FAQ} />{' '}
					</Switch>{' '}
				</div>{' '}
			</div>{' '}
		</Router>
	);
};

export default App;
