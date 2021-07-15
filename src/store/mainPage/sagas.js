import { call, put, takeEvery } from 'redux-saga/effects';
import { url, MESSAGES_KEYS } from 'constants';
import { getRequest, postRequest } from 'helpers';
import { setRooms, setMessages, setUserData, clearMessageValue } from './actions';
import { GET_MESSAGES, SEND_MESSAGE, GET_MAIN_PAGE_DATA } from './actionTypes';
import { setErrorMessage } from '../auth/authActions';

export function* getMainPage() {
  try {
    const response = yield call(getRequest, url.server + url.room);
    const data = yield call([response, 'json']);
    yield put(setRooms(data.message.rooms));
    yield put(setUserData(data.message.user));
  } catch (err) {
    yield put(setErrorMessage(MESSAGES_KEYS.unauth));
  }
}

export function* getMessagesRequest({ payload }) {
  try {
    const response = yield call(getRequest, `${url.server}${url.messages}?userId=${payload.userId}&roomId=${payload.roomId}`);
    const data = yield call([response, 'json']);
    yield put(setMessages(data.message));
  } catch (err) {
    console.log(err);
  }
}

export function* postMessageRequest({ payload }) {
  try {
    yield call(postRequest, `${url.server}${url.messages}`, payload);
    yield put(clearMessageValue());
  } catch (err) {
    console.log(err);
  }
}

export function* mainWatcher() {
  yield takeEvery(GET_MESSAGES, getMessagesRequest);
  yield takeEvery(SEND_MESSAGE, postMessageRequest);
  yield takeEvery(GET_MAIN_PAGE_DATA, getMainPage);
}
