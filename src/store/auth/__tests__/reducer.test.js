import { initialState, authReducer } from '../authReducer';
import * as actions from '../authActions';

describe('authReducer', () => {
  it('SET_AUTH_VALUE', () => {
    expect(authReducer(initialState, actions.setAuthValue('login', 'value', 'auth')))
      .toEqual({
        ...initialState,
        auth: {
          ...initialState.auth,
          login: 'value',
        },
      });
  });
  it('SET_LOGIN_VALUE', () => {
    expect(authReducer(initialState, actions.setAuthValue('login', 'value', 'login')))
      .toEqual({
        ...initialState,
        login: {
          ...initialState.login,
          login: 'value',
        },
      });
  });
  it('SET_MESSAGE_ERROR', () => {
    expect(authReducer(initialState, actions.setErrorMessage('Error')))
      .toEqual({
        ...initialState,
        errorMessage: 'Error',
      });
  });
  it('CLEAR_DATA login', () => {
    expect(authReducer(initialState, actions.clearData('login')))
      .toEqual({
        ...initialState,
        login: {
          login: '',
          password: '',
          confirm: '',
        },
      });
  });
});
