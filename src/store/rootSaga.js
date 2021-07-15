import { all, fork } from '@redux-saga/core/effects';
import authWatcher from './auth/sagas';
import { mainWatcher } from './mainPage/sagas';
import { modalWatcher } from './modals/saga';

const sagas = [
  authWatcher,
  mainWatcher,
  modalWatcher,
];

export default function* rootSaga() {
  yield all(sagas.map(fork));
}
