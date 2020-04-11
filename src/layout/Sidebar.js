import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import rclogo from '../img/rclogo.png';

const Sidebar = () => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (show === true) {
			document.getElementById('accountList').style.display = 'block';
		} else {
			document.getElementById('accountList').style.display = 'none';
		}
	}, [show]);

	const toggleBar = () => {};

	return (
		<div className="sidebar">
			<div className="logoHeader">
				<i onClick={toggleBar} className="fa fa-bars" />
				<a href="/">
					<img src={rclogo} alt="logo" />
					Royal Co-operative
				</a>
			</div>

			<ul className="links">
				<NavLink to="/dashboard">
					<i className="fa fa-home" />
					<li>Home</li>
				</NavLink>
				<NavLink to="/savings" activeClassName="active">
					<i className="fa fa-piggy-bank" />
					<li>Savings</li>
				</NavLink>
				<NavLink to="/invest" activeClassName="active">
					<i className="fa fa-rocket" />
					<li>Invest</li>
				</NavLink>
				<li>
					<a onClick={() => setShow(!show)} href="#!">
						<i className="fa fa-user-circle" />
						Account
					</a>
					<ul id="accountList">
						<NavLink to="/account/profile" activeClassName="active">
							<li>Profile</li>
						</NavLink>
						<NavLink to="/account/contact-info" activeClassName="active">
							<li>Contact Info</li>
						</NavLink>
						<NavLink to="/account/financials" activeClassName="active">
							<li>Financials</li>
						</NavLink>
						<NavLink to="/account/security" activeClassName="active">
							<li>Password Security</li>
						</NavLink>
					</ul>
				</li>
				<NavLink to="/faqs" activeClassName="active">
					<i className="fa fa-question-circle" />
					<li>FAQs</li>
				</NavLink>

				{/* TODO : link likely to change */}
				<a href="/logout" className="logout">
					<i className="fa fa-power-off" />
					<li>Logout</li>
				</a>
			</ul>
		</div>
	);
};

// Sidebar.propTypes = {
// 	show: PropTypes.Object.isRequired,
// };

export default Sidebar;
