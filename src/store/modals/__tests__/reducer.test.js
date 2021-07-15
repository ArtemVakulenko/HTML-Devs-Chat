import { initialState, modalReducer } from '../reducer';
import * as AT from '../actionTypes';
import * as actions from '../actions';
import * as hlp from './reducerHelper';

describe('authReducer', () => {
  it(AT.SET_ROOM_NAME, () => {
    expect(modalReducer(initialState, actions.setRoomName(hlp.value)))
      .toEqual({
        ...initialState,
        createRoom: {
          ...initialState.createRoom,
          roomName: hlp.value,
        },
      });
  });
  it(AT.SET_ALL_USERS, () => {
    expect(modalReducer(initialState, actions.setAllUsers(hlp.users)))
      .toEqual({
        ...initialState,
        createRoom: {
          ...initialState.createRoom,
          users: hlp.users,
        },
      });
  });
  it(`${AT.SET_CHOOSEN_USER} & delete false`, () => {
    expect(modalReducer(initialState, actions.setChoosenUser(hlp.usersId)))
      .toEqual({
        ...initialState,
        createRoom: {
          ...initialState.createRoom,
          chooseUsers: [...initialState.createRoom.chooseUsers, hlp.usersId],
        },
      });
  });
  it(`${AT.SET_CHOOSEN_USER} & delete true`, () => {
    initialState.createRoom.chooseUsers = [hlp.usersId];
    expect(modalReducer(initialState, actions.setChoosenUser(hlp.usersId, true)))
      .toEqual({
        ...initialState,
        createRoom: {
          ...initialState.createRoom,
          chooseUsers: [],
        },
      });
  });
  it(AT.SET_SEARCH_USER, () => {
    expect(modalReducer(initialState, actions.setSearchUser(hlp.value)))
      .toEqual({
        ...initialState,
        createRoom: {
          ...initialState.createRoom,
          searchUser: hlp.value,
        },
      });
  });
  it(AT.SET_IMG, () => {
    expect(modalReducer(initialState, actions.setImg('123', '321')))
      .toEqual({
        ...initialState,
        createRoom: {
          ...initialState.createRoom,
          chatImg: {
            name: '123',
            code: '321',
          },
        },
      });
  });
  it(AT.RESET_DATA, () => {
    expect(modalReducer(initialState, actions.resetData()))
      .toEqual({
        ...initialState,
        createRoom: {
          ...initialState.createRoom,
          roomName: '',
          searchUser: '',
          chatImg: {
            name: '',
            code: '',
          },
          users: [],
          chooseUsers: [],
        },
      });
  });
  it(AT.SET_USER_INFO_VALUE, () => {
    expect(modalReducer(initialState, actions.setUserInfoValue('name', 'asdad')))
      .toEqual({
        ...initialState,
        changeInfo: {
          ...initialState.changeInfo,
          name: 'asdad',
        },
      });
  });
  it(AT.SET_USER_IMG, () => {
    expect(modalReducer(initialState, actions.setUserImg('name', 'code')))
      .toEqual({
        ...initialState,
        changeInfo: {
          ...initialState.changeInfo,
          img: {
            name: 'name',
            code: 'code',
          },
        },
      });
  });
  it(AT.SET_ONE_USER, () => {
    expect(modalReducer(initialState, actions.setOneUser(['asdad'])))
      .toEqual({
        ...initialState,
        userToShow: ['asdad'],
      });
  });
});
