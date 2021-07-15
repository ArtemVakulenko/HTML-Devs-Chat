import { expect } from '@jest/globals';
import * as selectors from '../selectors';

describe('authSelectors', () => {
  const state = {
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
  it('auth', () => {
    expect(selectors.auth(state)).toEqual({
      login: '',
      password: '',
      confirm: '',
    });
  });
  it('getAuth', () => {
    expect(selectors.getAuth(state)).toEqual(undefined);
  });
  it('getLogin', () => {
    expect(selectors.getLogin(state)).toEqual('');
  });
  it('getErrorMessage', () => {
    expect(selectors.getErrorMessage(state)).toEqual(undefined);
  });
});
