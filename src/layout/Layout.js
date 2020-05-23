import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Sidebar from './Sidebar';
import Header from './Header';

import setAuthToken from '../utils/setAuthToken';
import { logout } from '../actions/authActions';

if (localStorage.token) setAuthToken(localStorage.token);

const Layout = ({ logout, children }) => {
	const [showText, setShowText] = useState(false);
	const [counter, setCounter] = useState(0);

	const events = ['load', 'mousedown', 'click', 'scroll', 'keypress'];

	const resetTimeout = () => {
		setCounter(0);
		clearTimeout();
	};

	for (let i in events) {
		window.addEventListener(events[i], resetTimeout);
	}

	const countUp = () => {
		//	Start count
		let countdown = setInterval(() => {
			setCounter(counter => counter + 1);
		}, 1000);
	};

	//	logout after a stipulated period of inactivity
	if (counter === 10) {
		// clearInterval(countdown);
		for (let i in events) {
			window.removeEventListener(events[i], resetTimeout);
		}
		logout();
	}

	useEffect(() => {
		// expand and hide menu bar
		if (showText) {
			document.getElementById('sidebar').style.width = '120px';
			document.getElementById('logoHeader').style.width = '120px';
		} else {
			document.getElementById('sidebar').style.width = '60px';
			document.getElementById('logoHeader').style.width = '60px';
		}
		//	count and logout after period of inactivity
		countUp();
		//	eslint-disable-next-line
	}, [showText]);

	const expand = () => {
		setShowText(!showText);
	};
	return (
		<Fragment>
			<Sidebar showText={showText} />
			<div id="right" className="right">
				<div className="rightHeader">
					<Header showText={showText} expand={expand} />
				</div>
				<p>{counter}</p>
				<div className="content">{children}</div>
			</div>
		</Fragment>
	);
};

Layout.propTypes = {
	logout: PropTypes.func
};

export default connect(null, { logout })(Layout);
