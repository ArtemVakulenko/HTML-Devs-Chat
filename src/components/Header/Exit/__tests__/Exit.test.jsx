import React from 'react';
import { deleteCookie } from 'helpers';
import Exit from '../Exit';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn().mockImplementation(() => ({
    t: jest.fn(),
  })),
}));
jest.mock('../../../hooks', () => ({
  useTheme: jest.fn().mockImplementation(() => ({
    colors: {
      dark: {
        button: '',
      },
    },
    theme: 'dark',
  })),
}));
jest.mock('../../../../helpers', () => ({
  deleteCookie: jest.fn(),
}));
jest.mock('react-router', () => ({
  useHistory: jest.fn().mockImplementation(() => ({
    push: jest.fn(),
  })),
}));

describe('Exit', () => {
  it('Should match snapshot', () => {
    const component = global.shallow(<Exit />);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have Button', () => {
    const component = global.mount(<Exit />);
    expect(component.find('Button')).toHaveLength(1);
  });
  it('Should click Button & delete cookie', () => {
    const component = global.mount(<Exit />);
    component.find('Button').simulate('click');
    expect(deleteCookie).toHaveBeenCalledTimes(1);
  });
});
