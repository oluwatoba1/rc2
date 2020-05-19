import React, {useReducer} from 'react';
import axios from 'axios';

import AuthContext from './authContext';
import authReducer from './authReducer';
import {
	AUTH_SUCCESS,
	AUTH_FAIL,
	LOGOUT,
	CLEAR_ERRORS
} from '../../actions/types';
import setAuthToken from '../../utils/setAuthToken';

const AuthState = (props) => {
	const initialState = {
		token: localStorage.getItem('token'),
		isAuthenticated: false,
		loading: null,
		user: null,
		error: null
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	//  register user
	const register = async (formData) => {
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
				payload: error.response.data.msg
			});
		}
	};

	const login = async (formData) => {
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

			console.log(res.data);

			setAuthToken(localStorage.token);
		} catch (error) {
			dispatch({
				type: AUTH_FAIL,
				payload: error.response.data.msg
			});
		}
	};

	const logout = () => {
		dispatch({
			type: LOGOUT
		});
	};

	const clearErrors = () => {
		dispatch({
			type: CLEAR_ERRORS
		});
	};

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
				user: state.user,
				error: state.error,
				register,
				login,
				logout,
				clearErrors
			}}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
