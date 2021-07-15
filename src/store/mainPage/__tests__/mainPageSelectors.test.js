import { expect } from '@jest/globals';
import * as selectors from '../selectors';

describe('mainPageSelectors', () => {
  const state = { mainPage: 
    {
      sidebar: {
        search: '',
        rooms: [],
      },
      chat: {
        messages: [],
        roomId: '',
        messageValue: '',
        activeRoom: {},
      },
      user: {
        id: '',
        login: '',
        name: '',
        lastName: '',
        img: '',
        hobbie: '',
        city: '',
        age: '',
      },
    },
  };
  it('auth', () => {
    expect(selectors.mainPage(state)).toEqual({
      sidebar: {
        search: '',
        rooms: [],
      },
      chat: {
        messages: [],
        roomId: '',
        messageValue: '',
        activeRoom: {},
      },
      user: {
        id: '',
        login: '',
        name: '',
        lastName: '',
        img: '',
        hobbie: '',
        city: '',
        age: '',
      },
    });
  });
  it('searchValue', () => {
    expect(selectors.searchValue(state)).toEqual('');
  });
  it('rooms', () => {
    expect(selectors.rooms(state)).toEqual([]);
  });
  it('userId', () => {
    expect(selectors.userId(state)).toEqual('');
  });
  it('chat', () => {
    expect(selectors.chat(state)).toEqual({
      messages: [],
      roomId: '',
      messageValue: '',
      activeRoom: {},
    });
  });
  it('messages', () => {
    expect(selectors.messages(state)).toEqual([]);
  });
  it('userName', () => {
    expect(selectors.userName(state)).toEqual('');
  });
  it('messageValue', () => {
    expect(selectors.messageValue(state)).toEqual('');
  });
  it('activeRoom', () => {
    expect(selectors.activeRoom(state)).toEqual({});
  });
  it('changeButtonData', () => {
    expect(selectors.changeButtonData(state)).toEqual({ login: '', img: '' });
  });
  it('getUserPic', () => {
    expect(selectors.getUserPic(state)).toEqual('');
  });
});
