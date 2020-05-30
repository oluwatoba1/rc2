import React from 'react';
import { useLocation } from 'react-router-dom';

const NotFound = () => {
	let location = useLocation();
	return (
		<div>
			<h3>
				Route not found for <code>{location.pathname}</code>
			</h3>
		</div>
	);
};

export default NotFound;
