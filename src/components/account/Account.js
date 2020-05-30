import React from 'react';
import './Account.css';
import { BrowserRouter as Router } from 'react-router-dom';

// import Profile from './Profile';
// import ContactInfo from './ContactInfo';
// import Financials from './Financials';
// import Security from './Security';
import changeUser from '../../img/change-user.png';

const Account = () => {
	return (
		<Router>
			<div className="accountContainer">
				<div className="profileHeader">
					<h3>Update Profile</h3>
					<img src={changeUser} alt="profile.jpeg" />
				</div>
			</div>
		</Router>
	);
};

export default Account;
