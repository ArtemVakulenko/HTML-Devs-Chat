import { takeEvery, call, select, put } from 'redux-saga/effects';
import { url, MESSAGES_KEYS } from 'constants';
import { postRequest, regValidate, loginValidate, setTokenInCookie } from 'helpers';
import { SEND_SIGN_UP_REQUEST, SEND_SIGN_IN_REQUEST } from './actionTypes';
import { clearData, setErrorMessage } from './authActions';
import { getAuth, getLogin } from './selectors';

export function* sendSignUp() {
  try {
    const data = yield select(getAuth);
    const err = yield call(regValidate, data);
    if (err) yield put(setErrorMessage(err));
    else {
      const { login, password } = data;
      const path = `${url.server}${url.registration}`;
      const response = yield call(postRequest, path, { login, password });
      if (response.status === 409) yield put(setErrorMessage(MESSAGES_KEYS.userIsReg));
      if (response.status === 400) yield put(setErrorMessage(MESSAGES_KEYS.abstract));
      if (response.ok) yield put(setErrorMessage(MESSAGES_KEYS.successReg));
      yield put(clearData('auth'));
    }
  } catch (e) { console.log(e); }
}

export function* sendSignIn() {
  try {
    const data = yield select(getLogin);
    const err = yield call(loginValidate, data);
    if (err) yield put(setErrorMessage(err));
    else {
      const { login, password } = data;
      const path = `${url.server}${url.login}`;
      let response = yield call(postRequest, path, { login, password });
      response = yield response.json();
      if (response.message === 'Пользователя с таким логином не существует') {
        yield put(setErrorMessage(MESSAGES_KEYS.notExist));
      }
      if (response.message === 'Неправильный пароль') {
        yield put(setErrorMessage(MESSAGES_KEYS.wrongPass));
      }
      if (response.token) {
        const { token } = response;
        yield setTokenInCookie(token);
        yield put(setErrorMessage(MESSAGES_KEYS.successAuth));
        yield put(clearData('login'));
      }
    }
  } catch (e) { console.log(e); }
}

export default function* authWatcher() {
  yield takeEvery(SEND_SIGN_UP_REQUEST, sendSignUp);
  yield takeEvery(SEND_SIGN_IN_REQUEST, sendSignIn);
}
