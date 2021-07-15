import React from 'react';
import configureStore from 'redux-mock-store';
import { NotificationManager } from 'react-notifications';
import LoginPage from '../LoginPage';
import { shallowSmart, mountSmart } from '../../../__tests__/testHelper';
import { MESSAGES_KEYS } from '../../../constants';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn().mockImplementation(() => ({
    t: jest.fn(),
  })),
}));
jest.mock('../../hooks', () => ({
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
const store = mockStore({
  auth: {
    auth: {
      login: '',
      password: '',
      confirm: '',
    },
    login: {
      login: '',
      password: '',
    },
    errorMessage: '',
  },
});
jest.mock('react-notifications', () => ({
  NotificationManager: {
    error: jest.fn(),
    success: jest.fn(),
  },
}));
describe('LoginPage', () => {
  describe('message !success', () => {
    const props = {
      message: 'MockValue',
      signInRequest: jest.fn(),
      setErrorMessage: jest.fn(),
    };
    it('Should match snapshot', () => {
      const component = shallowSmart(<LoginPage {...props} />, store);
      expect(component.html()).toMatchSnapshot();
    });
    it('Should have StLoginContainer', () => {
      const component = mountSmart(<LoginPage {...props} />, store);
      expect(component.find('styled__StLoginContainer')).toHaveLength(1);
    });
    it('Should have StLoginView', () => {
      const component = mountSmart(<LoginPage {...props} />, store);
      expect(component.find('styled__StLoginView')).toHaveLength(1);
    });
    it('Should have Title', () => {
      const component = mountSmart(<LoginPage {...props} />, store);
      expect(component.find('Title')).toHaveLength(1);
    });
    it('Should have AuthInput', () => {
      const component = mountSmart(<LoginPage {...props} />, store);
      expect(component.find('AuthInput')).toHaveLength(2);
    });
    it('Should have Button', () => {
      const component = mountSmart(<LoginPage {...props} />, store);
      expect(component.find('Button')).toHaveLength(1);
    });
    it('Should have CustomLink', () => {
      const component = mountSmart(<LoginPage {...props} />, store);
      expect(component.find('CustomLink')).toHaveLength(1);
    });
    it('Shouldn`t have redirect', () => {
      const component = mountSmart(<LoginPage {...props} />, store);
      expect(component.find('Redirect')).toHaveLength(0);
    });
    it('Should have notification error', () => {
      mountSmart(<LoginPage {...props} />, store);
      expect(NotificationManager.error).toHaveBeenCalled();
    });
  });
  describe('message success', () => {
    const props = {
      message: MESSAGES_KEYS.successAuth,
      signInRequest: jest.fn(),
      setErrorMessage: jest.fn(),
    };
    it('Should match snapshot', () => {
      const component = shallowSmart(<LoginPage {...props} />, store);
      expect(component.html()).toMatchSnapshot();
    });
    it('Should have Redirect', () => {
      const component = mountSmart(<LoginPage {...props} />, store);
      expect(component.find('Redirect')).toHaveLength(1);
    });
    it('Should have notification error', () => {
      mountSmart(<LoginPage {...props} />, store);
      expect(NotificationManager.success).toHaveBeenCalled();
    });
  });
});
