import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import rclogo from '../img/rclogo.png';

const Sidebar = () => {
	const [showList, setShowList] = useState(false);
	const [showBar, setShowBar] = useState(true);

	useEffect(() => {
		if (showList === true) {
			document.getElementById('accountList').style.display = 'block';
		} else {
			document.getElementById('accountList').style.display = 'none';
		}

		if (showBar === false) {
			document.getElementById('logo').style.display = 'none';
			let links = document.getElementsByClassName('sideLinks');
			for (let i = 0; i < links.length; i++) {
				links[i].style.display = 'none';
			}
		} else {
			document.getElementById('logo').style.display = 'block';
			let links = document.getElementsByClassName('sideLinks');
			for (let i = 0; i < links.length; i++) {
				links[i].style.display = 'block';
			}
		}
	}, [showList, showBar]);

	return (
		<div id="sidebar" className="sidebar">
			<div className="logoHeader">
				<i onClick={() => setShowBar(!showBar)} className="fa fa-bars" />
				<a id="logo" href="/">
					<img src={rclogo} alt="logo" />
					Royal Co-operative
				</a>
			</div>

			<ul className="links">
				<NavLink to="/dashboard">
					<i className="fa fa-home" />
					<li className="sideLinks">Home</li>
				</NavLink>
				<NavLink to="/savings" activeClassName="active">
					<i className="fa fa-piggy-bank" />
					<li className="sideLinks">Savings</li>
				</NavLink>
				<NavLink to="/invest" activeClassName="active">
					<i className="fa fa-rocket" />
					<li className="sideLinks">Invest</li>
				</NavLink>
				<a onClick={() => setShowList(!showList)} href="#!">
					<i className="fa fa-user-circle" />
					<li className="sideLinks">Account</li>
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
				<NavLink to="/faqs" activeClassName="active">
					<i className="fa fa-question-circle" />
					<li className="sideLinks">FAQs</li>
				</NavLink>

				{/* TODO : link likely to change */}
				<a href="/logout" className="logout">
					<i className="fa fa-power-off" />
					<li className="sideLinks">Logout</li>
				</a>
			</ul>
		</div>
	);
};

// Sidebar.propTypes = {
// 	show: PropTypes.Object.isRequired,
// };

export default Sidebar;
