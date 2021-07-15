import { initialState, mainReducer } from '../reducer';
import * as actions from '../actions';

describe('mainReducer', () => {
  it('SET_SEARCH_VALUE', () => {
    expect(mainReducer(initialState, actions.setSearchValue('value')))
      .toEqual({
        ...initialState,
        sidebar: {
          ...initialState.sidebar,
          search: 'value',
        },
      });
  });
  it('CLEAR_USER', () => {
    expect(mainReducer(initialState, actions.clearUser()))
      .toEqual({
        ...initialState,
        user: {},
      });
  });
  it('SET_ROOMS', () => {
    expect(mainReducer(initialState, actions.setRooms([1, 2])))
      .toEqual({
        ...initialState,
        sidebar: {
          ...initialState.sidebar,
          rooms: [1, 2],
        },
      });
  });
  it('SET_MESSAGES', () => {
    expect(mainReducer(initialState, actions.setMessages([1, 2])))
      .toEqual({
        ...initialState,
        chat: {
          ...initialState.chat,
          messages: [1, 2],
        },
      });
  });
  it('SET_MESSAGE_VALUE', () => {
    expect(mainReducer(initialState, actions.setMessageValue('123')))
      .toEqual({
        ...initialState,
        chat: {
          ...initialState.chat,
          messageValue: '123',
        },
      });
  });
  it('CLEAR_MESSAGE_VALUE', () => {
    expect(mainReducer(initialState, actions.clearMessageValue()))
      .toEqual({
        ...initialState,
        chat: {
          ...initialState.chat,
          messageValue: '',
        },
      });
  });
  it('SET_USER_DATA', () => {
    expect(mainReducer(initialState, actions.setUserData({ login: 'aboba' })))
      .toEqual({
        ...initialState,
        user: {
          id: '',
          login: 'aboba',
          name: '',
          lastName: '',
          img: '',
          hobbie: '',
          city: '',
          age: '',
        },
      });
  });
  it('SET_NEW_ROOM', () => {
    expect(mainReducer(initialState, actions.setNewRoom({ name: 'abobaRoom' })))
      .toEqual({
        ...initialState,
        sidebar: {
          ...initialState.sidebar,
          rooms: [{ name: 'abobaRoom' }],
        },
      });
  });
  it('CLEAR_ACTIVE_ROOM', () => {
    expect(mainReducer(initialState, actions.clearActiveRoom({ name: 'abobaRoom' })))
      .toEqual({
        ...initialState,
        chat: {
          ...initialState.chat,
          activeRoom: {},
        },
      });
  });
  it('SET_NEW_MESSAGE', () => {
    initialState.chat.activeRoom._id = '';
    expect(mainReducer(initialState, actions.setNewMessage({ author: 'aboba', room: '' })))
      .toEqual({
        ...initialState,
        chat: {
          ...initialState.chat,
          messages: [],
        },
      });
  });
});
