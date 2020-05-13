import React, {Fragment, useState, useEffect} from 'react';

import Sidebar from './Sidebar';
import Header from './Header';

import setAuthToken from '../utils/setAuthToken';

if (localStorage.token) setAuthToken(localStorage.token);

const Layout = (props) => {
	const [showText, setShowText] = useState(false);

	useEffect(() => {
		if (showText) {
			document.getElementById('sidebar').style.width = '120px';
			document.getElementById('logoHeader').style.width = '120px';
		} else {
			document.getElementById('sidebar').style.width = '60px';
			document.getElementById('logoHeader').style.width = '60px';
		}
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
				<div className="content">{props.children}</div>
			</div>
		</Fragment>
	);
};

export default Layout;
