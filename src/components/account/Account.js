import React from 'react';
import './Account.css';
import {
	Switch,
	Route,
	NavLink,
	BrowserRouter as Router,
} from 'react-router-dom';

import Profile from './Profile';
import ContactInfo from './ContactInfo';
import Financials from './Financials';
import Security from './Security';

const Account = () => {
	return (
		<Router>
			<div>
				<h3>Account</h3>
				<div className="accountContainer">
					<div className="accountBody">
						<NavLink activeClassName="active" to="/account/profile">
							<i className="" />
							Profile
						</NavLink>
						<NavLink activeClassName="active" to="/account/contact">
							<i className="" />
							Contact info
						</NavLink>
						<NavLink activeClassName="active" to="/account/financials">
							<i className="" />
							Financials
						</NavLink>
						<NavLink activeClassName="active" to="/account/security">
							<i className="" />
							Password/Security
						</NavLink>
					</div>

					<div className="accountFormBody">
						<Switch>
							<Route path="/account/profile" component={Profile} />
							<Route path="/account/contact" component={ContactInfo} />
							<Route path="/account/financials" component={Financials} />
							<Route path="/account/security" component={Security} />
						</Switch>
					</div>
				</div>
			</div>
		</Router>
	);
};

export default Account;
