import configureStore from 'redux-mock-store';
import React from 'react';
import { NotificationManager } from 'react-notifications';
import { mountSmart, shallowSmart } from '../../../__tests__/testHelper';
import RegPage from '../RegPage';
import { MESSAGES_KEYS } from '../../../constants';

const mockStore = configureStore();
const store = mockStore({
  auth: {
    auth: {
      login: '',
      password: '',
      confirm: '',
    },
  },
});
jest.mock('react-i18next', () => ({
  useTranslation: jest.fn().mockImplementation(() => ({
    t: jest.fn(),
  })),
}));
jest.mock('react-notifications', () => ({
  NotificationManager: {
    error: jest.fn(),
  },
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

describe('Input', () => {
  const props = {
    message: 'MockValue',
    signUpRequest: jest.fn(),
  };
  it('Should match snapshot', () => {
    const component = shallowSmart(<RegPage {...props} />, store);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have StAuthContainer', () => {
    const component = mountSmart(<RegPage {...props} />, store);
    expect(component.find('styled__StAuthContainer')).toHaveLength(1);
  });
  it('Should have StAuthView', () => {
    const component = mountSmart(<RegPage {...props} />, store);
    expect(component.find('styled__StAuthView')).toHaveLength(1);
  });
  it('Should have Title', () => {
    const component = mountSmart(<RegPage {...props} />, store);
    expect(component.find('Title')).toHaveLength(1);
  });
  it('Should have AuthInput', () => {
    const component = mountSmart(<RegPage {...props} />, store);
    expect(component.find('AuthInput')).toHaveLength(3);
  });
  it('Should have Button', () => {
    const component = mountSmart(<RegPage {...props} />, store);
    expect(component.find('Button')).toHaveLength(1);
  });
  it('Should have CustomLink', () => {
    const component = mountSmart(<RegPage {...props} />, store);
    expect(component.find('CustomLink')).toHaveLength(1);
  });
  it('Should have notification error', () => {
    mountSmart(<RegPage {...props} />, store);
    expect(NotificationManager.error).toHaveBeenCalled();
  });
  it('Should have notification error & no redirect', () => {
    const component = mountSmart(<RegPage {...props} />, store);
    expect(component.find('Redirect')).toHaveLength(0);
  });
  it('Should have success', () => {
    props.message = MESSAGES_KEYS.successReg;
    const component = mountSmart(<RegPage {...props} />, store);
    expect(component.find('Redirect')).toHaveLength(1);
  });
});
