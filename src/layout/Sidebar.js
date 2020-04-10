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
				<li>
					<NavLink to="/" activeClassName="active">
						<i className="fa fa-home" />
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/savings" activeClassName="active">
						<i className="fa fa-piggy-bank" />
						Savings
					</NavLink>
				</li>
				<li>
					<NavLink to="/invest" activeClassName="active">
						<i className="fa fa-rocket" />
						Invest
					</NavLink>
				</li>
				<li>
					<NavLink to="/account" activeClassName="active">
						<i className="fa fa-user-circle" />
						Account
					</NavLink>
				</li>
				<li>
					<NavLink to="/faqs" activeClassName="active">
						<i className="fa fa-question-circle" />
						FAQs
					</NavLink>
				</li>

				{/* TODO : link likely to change */}
				<li className="logout">
					<a href="/logout">
						<i className="fa fa-power-off" />
						Logout
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
