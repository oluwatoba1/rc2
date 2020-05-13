import React, {useReducer} from 'react';
import axios from 'axios';

import AuthContext from './authContext';
import authReducer from './authReducer';
import {AUTH_SUCCESS, AUTH_FAIL, LOGOUT, CLEAR_ERRORS} from '../types';
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

			setAuthToken(localStorage.token);
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
				// 'Access-Control-Allow-Origin': '*',
				// 'Access-Control-Allow-Headers':
				// 	'Content-Type, Authorization, Content-Length, X-Requested-With, Accept',
				// 'Access-Control-Allow-Credentials': true,
				'Content-Type': 'application/json'
			}
		};
		try {
			const res = await axios.post(
				'https://test.devng.host/rapi/login',
				formData,
				config
			);
			dispatch({
				type: AUTH_SUCCESS,
				payload: res.data
			});

			setAuthToken(localStorage.token);
		} catch (error) {
			dispatch({
				type: AUTH_FAIL,
				payload: error.response.data.message
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
