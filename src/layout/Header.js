import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import AuthContext from '../context/auth/authContext';
import user from '../img/avatar.png';
import { logout } from '../actions/authActions';

const Header = ({ expand, showText, logout }) => {
	// const authContext = useContext(AuthContext);
	// const {logout} = authContext;

	const signOut = () => {
		logout();
	};
	return (
		<div className="header">
			<div className="searchbar">
				<i
					className={showText ? 'fa fa-times' : 'fa fa-bars'}
					onClick={expand}
				/>
				<input type="search" placeholder="Search" />
			</div>
			<div className="accountHeader">
				<div className="accountProfile">
					<div id="caption">
						<h4>John Doe</h4>
						<p>Member</p>
					</div>
					<img src={user} alt="user" />
					<i className="fa fa-angle-down" />
				</div>
				<div className="others">
					<div className="notifications"></div>
					<div onClick={signOut} className="logout"></div>
				</div>
			</div>
		</div>
	);
};

Header.propTypes = {
	expand: PropTypes.func,
	showText: PropTypes.bool,
	logout: PropTypes.func
};

export default connect(null, { logout })(Header);
