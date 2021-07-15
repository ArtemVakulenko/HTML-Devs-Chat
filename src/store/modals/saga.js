import { call, put, takeEvery, select } from 'redux-saga/effects';
import { url, MESSAGES_KEYS } from 'constants';
import { getRequest, postRequest } from 'helpers';
import { setErrorMessage } from '../auth/authActions';
import { CREATE_CHAT, GET_ALL_USERS, SEND_USER_INFO, GET_ONE_USER } from './actionTypes';
import { allUserInfo, createData } from './selectors';
import { setUserData } from '../mainPage/actions';
import { resetData, setAllUsers, setOneUser } from './actions';

export function* getAllUsers() {
  try {
    const response = yield call(getRequest, url.server + url.users);
    const data = yield call([response, 'json']);
    yield put(setAllUsers(data.message));
  } catch (err) {
    yield put(setErrorMessage(MESSAGES_KEYS.unauth));
  }
}

export function* createChatSaga() {
  try {
    const body = yield select(createData);
    yield call(postRequest, url.server + url.room, body);
    yield put(resetData());
  } catch (err) { console.log(err); }
}

export function* changeUserInfoSaga() {
  try {
    const body = yield select(allUserInfo);
    const response = yield call(postRequest, url.server + url.users, body, 'PUT');
    const data = yield call([response, 'json']);
    yield put(setUserData(data.message));
  } catch (err) { console.log(err); }
}

export function* getOneUserFromServer({ login }) {
  try {
    const response = yield call(getRequest, `${url.server}${url.user}?login=${login}`);
    const data = yield call([response, 'json']);
    yield put(setOneUser(data.message));
  } catch (err) { console.log(err); }
}

export function* modalWatcher() {
  yield takeEvery(GET_ALL_USERS, getAllUsers);
  yield takeEvery(CREATE_CHAT, createChatSaga);
  yield takeEvery(SEND_USER_INFO, changeUserInfoSaga);
  yield takeEvery(GET_ONE_USER, getOneUserFromServer);
}
