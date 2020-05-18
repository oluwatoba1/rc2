import React, {useReducer} from 'react';
import {v4 as uuid} from 'uuid';

import {SET_ALERT, REMOVE_ALERT} from '../types';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';

const AlertState = (props) => {
	const initialState = [];

	const [state, dispatch] = useReducer(alertReducer, initialState);

	const setAlert = (msg, timeout = 4000) => {
		const id = uuid();
		dispatch({
			type: SET_ALERT,
			payload: {
				msg,
				id
			}
		});

		setTimeout(() => {
			dispatch({
				type: REMOVE_ALERT,
				payload: id
			});
		}, timeout);
	};

	return (
		<AlertContext.Provider
			value={{
				alerts: state,
				setAlert
			}}>
			{props.children}
		</AlertContext.Provider>
	);
};
export default AlertState;
