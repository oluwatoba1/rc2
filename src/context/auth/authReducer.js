import { AUTH_SUCCESS, AUTH_FAIL, LOGOUT, CLEAR_ERRORS } from '../types';

export default (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case AUTH_SUCCESS:
			localStorage.setItem('token', payload.jwt);
			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false,
				user: payload.username
			};
		case AUTH_FAIL:
		case LOGOUT:
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				user: null,
				error: payload
			};
		case CLEAR_ERRORS:
			return {
				...state,
				error: null
			};
		default:
			return state;
	}
};
