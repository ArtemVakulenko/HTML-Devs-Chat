import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { postRequest, regValidate, loginValidate } from 'helpers';
import { MESSAGES_KEYS, url } from 'constants';
import watchers, * as sagas from '../sagas';
import { SEND_SIGN_UP_REQUEST, SEND_SIGN_IN_REQUEST } from '../actionTypes';
import { getAuth, getLogin } from '../selectors';
import { setErrorMessage, clearData } from '../authActions';

describe('authSagas', () => {
  describe('workerRegistration', () => {
    let action;
    beforeEach(() => {
      action = {
        payload: {},
        type: SEND_SIGN_UP_REQUEST,
      };
    });
    const authValue = { login: 'login', password: '1', confirm: false };
    const path = `${url.server}${url.registration}`;
    const fetchErr = {
      status: 200,
    };
    it('should call sendSignUp without error', () => {
      testSaga(sagas.sendSignUp, action)
        .next()
        .select(getAuth)
        .next(authValue)
        .call(regValidate, authValue)
        .next(false)
        .call(postRequest, path, { login: 'login', password: '1' })
        .next(fetchErr)
        .put(clearData('auth'))
        .next()
        .isDone();
    });
    it('should call sendSignUp with error', () => {
      testSaga(sagas.sendSignUp, action)
        .next()
        .select(getAuth)
        .next(authValue)
        .call(regValidate, authValue)
        .next('error')
        .put(setErrorMessage('error'))
        .next()
        .isDone();
    });
    it('should call sendSignUp and response 409', () => {
      fetchErr.status = 409;
      testSaga(sagas.sendSignUp, action)
        .next()
        .select(getAuth)
        .next(authValue)
        .call(regValidate, authValue)
        .next(false)
        .call(postRequest, path, { login: 'login', password: '1' })
        .next(fetchErr)
        .put(setErrorMessage(MESSAGES_KEYS.userIsReg))
        .next()
        .put(clearData('auth'))
        .next()
        .isDone();
    });
  });
  describe('workerAuthorization', () => {
    let action;
    beforeEach(() => {
      action = {
        payload: {},
        type: SEND_SIGN_IN_REQUEST,
      };
    });
    const loginValue = { login: 'login', password: '1' };
    const path = `${url.server}${url.login}`;
    const fetchErr = {
      status: 200,
    };
    it('should call sendSignIn without error', () => {
      testSaga(sagas.sendSignIn, action)
        .next()
        .select(getLogin)
        .next(loginValue)
        .call(loginValidate, loginValue)
        .next(false)
        .call(postRequest, path, { login: 'login', password: '1' })
        .next(fetchErr)
        .isDone();
    });
    it('should call sendSignIn with error', () => {
      testSaga(sagas.sendSignUp, action)
        .next()
        .select(getAuth)
        .next(loginValue)
        .call(regValidate, loginValue)
        .next('error')
        .put(setErrorMessage('error'))
        .next()
        .isDone();
    });
  });
  describe('watchers', () => {
    it('should run all watchers', () => {
      testSaga(watchers)
        .next()
        .takeEvery(SEND_SIGN_UP_REQUEST, sagas.sendSignUp)
        .next()
        .takeEvery(SEND_SIGN_IN_REQUEST, sagas.sendSignIn)
        .next()
        .isDone();
    });
  });
  describe('fork', () => {
    it('should fork watchers', () => {
      expectSaga(watchers)
        .put({ type: 'FORKED' })
        .run();
    });
  });
});
