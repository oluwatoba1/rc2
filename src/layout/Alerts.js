import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import AlertContext from '../context/alert/alertContext';

const Alerts = ({ alerts }) => {
	// const alertContext = useContext(AlertContext);
	// const { alerts } = alertContext;
	return (
		alerts.length > 0 &&
		alerts.map(alert => (
			<div key={alert.id}>
				<p className="alert-danger">{alert.msg}</p>
			</div>
		))
	);
};

Alerts.propTypes = {
	alerts: PropTypes.array
};

const mapStateToProps = state => ({
	alerts: state.alert
});

export default connect(mapStateToProps)(Alerts);
