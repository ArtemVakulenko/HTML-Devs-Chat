import React from 'react';
import configureStore from 'redux-mock-store';
import ChatDialog from '../ChatDialog';
import { shallowSmart } from '../../../../__tests__/testHelper';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn().mockImplementation(() => ({
    t: jest.fn(),
  })),
}));
jest.mock('../../../hooks', () => ({
  useTheme: jest.fn().mockImplementation(() => ({
    colors: {
      dark: {
        color: '',
        input: '',
        placeholder: '',
      },
    },
    theme: 'dark',
  })),
}));
const mockStore = configureStore();
const store = mockStore({ mainPage: {
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
} });

jest.mock('react-notifications', () => ({
  NotificationManager: {
    error: jest.fn(),
    success: jest.fn(),
  },
}));
describe('ChatDialog', () => {
  describe('123', () => {
    const props = {
      match: {},
    };
    it('Should match snapshot', () => {
      const component = shallowSmart(<ChatDialog {...props} />, store);
      expect(component.html()).toMatchSnapshot();
    });
  });
});
