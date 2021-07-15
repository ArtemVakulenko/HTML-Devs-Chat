import * as AT from './actionTypes';

export const initialState = {
  auth: {
    login: '',
    password: '',
    confirm: '',
  },
  login: {
    login: '',
    password: '',
  },
  errorMessage: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.SET_AUTH_VALUE:
      return {
        ...state,
        [action.page]: {
          ...state[action.page],
          [action.field]: action.value,
        },
      };
    case AT.SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.message,
      };
    case AT.CLEAR_DATA:
      return {
        ...state,
        [action.field]: {
          login: '',
          password: '',
          confirm: '',
        },
      };
    default:
      return state;
  }
};
