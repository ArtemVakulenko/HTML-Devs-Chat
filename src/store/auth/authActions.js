import * as AT from './actionTypes';

export const signUpRequest = (payload) => ({ type: AT.SEND_SIGN_UP_REQUEST, payload });
export const setAuthValue = (field, value, page) => ({ type: AT.SET_AUTH_VALUE, field, value, page });
export const setErrorMessage = (message) => ({ type: AT.SET_ERROR_MESSAGE, message });
export const signInRequest = (payload) => ({ type: AT.SEND_SIGN_IN_REQUEST, payload });
export const clearData = (field) => ({ type: AT.CLEAR_DATA, field });
