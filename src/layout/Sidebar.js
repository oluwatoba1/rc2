import React from 'react';
import { NavLink } from 'react-router-dom';
import rclogo from '../img/rc-copy.png';

const Sidebar = ({ showText }) => {
	// const [showList, setShowList] = useState(false);
	// const [showBar, setShowBar] = useState(true);

	// useEffect(() => {
	// 	if (showList === true) {
	// 		document.getElementById('accountList').style.display = 'block';
	// 	} else {
	// 		document.getElementById('accountList').style.display = 'none';
	// 	}

	// 	if (showBar === false) {
	// 		document.getElementById('logo').style.display = 'none';
	// 		let links = document.getElementsByClassName('sideLinks');
	// 		for (let i = 0; i < links.length; i++) {
	// 			links[i].style.display = 'none';
	// 		}
	// 	} else {
	// 		document.getElementById('logo').style.display = 'flex';
	// 		let links = document.getElementsByClassName('sideLinks');
	// 		for (let i = 0; i < links.length; i++) {
	// 			links[i].style.display = 'block';
	// 		}
	// 	}
	// }, [showList, showBar]);

	return (
		<div id="sidebar">
			<div id="logoHeader">
				{/* <i onClick={() => setShowBar(!showBar)} className="fa fa-bars" /> */}
				<a id="logo" href="/">
					<img src={rclogo} alt="logo" />
				</a>
			</div>

			<ul className="links">
				<NavLink to="/">
					<i className="fa fa-home" />
					{showText ? 'Home' : ''}
				</NavLink>
				<NavLink to="/savings" activeClassName="active">
					<i className="fa fa-piggy-bank" />
					{showText ? 'Savings' : ''}
				</NavLink>
				<NavLink to="/invest" activeClassName="active">
					<i className="fa fa-rocket" />
					{showText ? 'Invest' : ''}
				</NavLink>
				<NavLink to="/account" activeClassName="active">
					<i className="fa fa-user-circle" />
					{showText ? 'Account' : ''}
				</NavLink>
				{/* <ul id="accountList">
					<NavLink to="/account/profile" activeClassName="active">
						<i className="fa fa-id-badge" />
						<li className="sideLinks">Profile</li>
					</NavLink>
					<NavLink to="/account/contact-info" activeClassName="active">
						<i className="fa fa-id-card" />
						<li className="sideLinks">Contact Info</li>
					</NavLink>
					<NavLink to="/account/financials" activeClassName="active">
						<i className="fa fa-coins" />
						<li className="sideLinks">Financials</li>
					</NavLink>
					<NavLink to="/account/security" activeClassName="active">
						<i className="fa fa-shield-alt" />
						<li className="sideLinks">Password Security</li>
					</NavLink>
				</ul> */}
				{/* <NavLink to="/faqs" activeClassName="active">
					<i className="fa fa-question-circle" />
					<li className="sideLinks">FAQs</li>
				</NavLink> */}

				{/* TODO : link likely to change */}
				<NavLink to="/settings" className="settings">
					<i className="fa fa-cogs" />
					{showText ? 'Settings' : ''}
				</NavLink>
			</ul>
		</div>
	);
};

export default Sidebar;
