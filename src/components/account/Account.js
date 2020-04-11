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
				<div className="accountContainer">
					<div className="accountBody">
						<Switch>
							<Route path="/account/profile" component={Profile} />
							<Route path="/account/contact-info" component={ContactInfo} />
							<Route path="/account/financials" component={Financials} />
							<Route path="/account/security" component={Security} />
						</Switch>
					</div>

					<div className="accountFormBody"></div>
				</div>
			</div>
		</Router>
	);
};

export default Account;
