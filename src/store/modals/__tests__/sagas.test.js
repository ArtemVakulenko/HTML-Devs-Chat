import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { postRequest, getRequest } from 'helpers';
import { url } from 'constants';
import { CREATE_CHAT, GET_ALL_USERS, GET_ONE_USER, SEND_USER_INFO } from '../actionTypes';
import { getAllUsers, createChatSaga, modalWatcher, changeUserInfoSaga, getOneUserFromServer } from '../saga';
import { resetData, setAllUsers } from '../actions';
import { createData } from '../selectors';

describe('modalSagas', () => {
  describe('getAllUsers', () => {
    let action;
    let res;
    beforeEach(() => {
      res = { json: jest.fn() };
      action = {
        payload: {},
        type: GET_ALL_USERS,
      };
    });
    const path = `${url.server}${url.users}`;
    const data = { message: [] };
    it('should call getUser without error', () => {
      testSaga(getAllUsers, action)
        .next()
        .call(getRequest, path)
        .next(res)
        .call([res, 'json'])
        .next(data)
        .put(setAllUsers(data.message))
        .next()
        .isDone();
    });
    describe('createChatSaga', () => {
      let action;
      let data;
      beforeEach(() => {
        data = { img: '', name: '', users: [] };
        action = {
          type: CREATE_CHAT,
        };
      });
      it('should call createChatSaga', () => {
        testSaga(createChatSaga, action)
          .next()
          .select(createData)
          .next(data)
          .call(postRequest, url.server + url.room, data)
          .next()
          .put(resetData())
          .next()
          .isDone();
      });
    });
    createData;
    describe('watchers', () => {
      it('should run all watchers', () => {
        testSaga(modalWatcher)
          .next()
          .takeEvery(GET_ALL_USERS, getAllUsers)
          .next()
          .takeEvery(CREATE_CHAT, createChatSaga)
          .next()
          .takeEvery(SEND_USER_INFO, changeUserInfoSaga)
          .next()
          .takeEvery(GET_ONE_USER, getOneUserFromServer)
          .next()
          .isDone();
      });
    });
    describe('fork', () => {
      it('should fork watchers', () => {
        expectSaga(modalWatcher)
          .put({ type: 'FORKED' })
          .run();
      });
    });
  });
});
