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
				<h3>Update Profile</h3>
				<div className="profilePic">
					<img src={changeUser} alt="profile.jpeg" />
					<p>Click image to change profile picture</p>
				</div>
				<form id="updateForm">
					<div className="form-body">
						<div className="form-group">
							<label htmlFor="firstname">First Name</label>
							<input name="firstname" type="text" value="Liam" required />
						</div>
						<div className="form-group">
							<label htmlFor="lastname">Last Name</label>
							<input name="lastname" type="text" value="Sou" required />
						</div>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input
								name="email"
								type="email"
								value="ash@example.com"
								required
							/>
						</div>
						<div className="form-group">
							<label htmlFor="phone">Phone</label>
							<input name="phone" type="phone" value="11232" required />
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input name="password" type="password" value="pass" required />
						</div>
					</div>
					<div className="submit">
						<button type="submit">Save changes</button>
					</div>
				</form>
			</div>
		</Router>
	);
};

export default Account;
