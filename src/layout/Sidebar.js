import React from 'react';
import { NavLink } from 'react-router-dom';
import rclogo from '../img/rclogo.png';

const toggleBar = () => {};

const Sidebar = () => {
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
				<NavLink to="/">
					<li>
						<i className="fa fa-home" />
						Home
					</li>
				</NavLink>
				<NavLink to="/savings" activeClassName="active">
					<li>
						<i className="fa fa-piggy-bank" />
						Savings
					</li>
				</NavLink>
				<NavLink to="/invest" activeClassName="active">
					<li>
						<i className="fa fa-rocket" />
						Invest
					</li>
				</NavLink>
				<NavLink to="/account" activeClassName="active">
					<li>
						<i className="fa fa-user-circle" />
						Account
					</li>
				</NavLink>
				<NavLink to="/faqs" activeClassName="active">
					<li>
						<i className="fa fa-question-circle" />
						FAQs
					</li>
				</NavLink>

				{/* TODO : link likely to change */}
				<a href="/logout">
					<li className="logout">
						<i className="fa fa-power-off" />
						Logout
					</li>
				</a>
			</ul>
		</div>
	);
};

export default Sidebar;
