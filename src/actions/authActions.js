import axios from 'axios';

import { AUTH_SUCCESS, AUTH_FAIL, LOGOUT, CLEAR_ERRORS } from './types';
import setAuthToken from '../utils/setAuthToken';

//  register user
export const register = formData => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};
	try {
		const res = await axios.post(
			'https://test.devng.host/rapi/register',
			formData,
			config
		);
		dispatch({
			type: AUTH_SUCCESS,
			payload: res.data
		});

		if (localStorage.token) {
			setAuthToken(localStorage.token);
		}
	} catch (error) {
		dispatch({
			type: AUTH_FAIL,
			payload: 'Server error'
		});
	}
};

export const login = formData => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};
	try {
		const res = await axios.post(
			'https://test.devng.host/rapi/login',
			formData,
			config
		);
		if (res.data.status_code === '100') {
			dispatch({
				type: AUTH_SUCCESS,
				payload: res.data
			});
		} else if (
			res.data.status_code === '101' ||
			res.data.status_code === '105'
		) {
			dispatch({
				type: AUTH_FAIL,
				payload: res.data.message
			});
		}
		// REMOVE LATER!
		console.log(res.data);

		setAuthToken(localStorage.token);
	} catch (error) {
		dispatch({
			type: AUTH_FAIL,
			payload: 'Server error'
		});
	}
};

export const logout = () => async dispatch => {
	dispatch({
		type: LOGOUT
	});
};

export const clearErrors = () => async dispatch => {
	dispatch({
		type: CLEAR_ERRORS
	});
};
