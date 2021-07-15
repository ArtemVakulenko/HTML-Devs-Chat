import { shallow, mount } from 'enzyme';
import React from 'react';
import { icons } from '../../../../constants';
import { useTheme } from '../../../hooks';
import ChangeTheme from '../ChangeTheme';

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
    changeTheme: jest.fn(),
  })),
}));

describe('ChangeTheme', () => {
  it('Should match snapshot', () => {
    const component = shallow(<ChangeTheme />);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have Button', () => {
    const component = mount(<ChangeTheme />);
    expect(component.find('Button')).toHaveLength(1);
  });
  it('Should have dark icon', () => {
    const component = mount(<ChangeTheme />);
    expect(component.find('Button').props().icon).toBe(icons.themeDark);
  });
  it('Should have light icon', () => {
    useTheme.mockImplementation(() => ({
      colors: {
        dark: {
          button: '',
        },
      },
      theme: 'light',
      changeTheme: jest.fn(),
    }));
    const component = mount(<ChangeTheme />);
    expect(component.find('Button').props().icon).toBe(icons.themeLight);
  });
});
