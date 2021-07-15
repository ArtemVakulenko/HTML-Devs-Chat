import React from 'react';
import ChangeLang from '../ChangeLang';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn().mockImplementation(() => ({
    i18n: {
      changeLanguage: jest.fn(),
    },
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

describe('ChangeLang', () => {
  it('Should match snapshot', () => {
    const component = global.shallow(<ChangeLang />);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have StSelect', () => {
    const component = global.mount(<ChangeLang />);
    expect(component.find('styled__StSelect')).toHaveLength(1);
  });
  it('Should have option', () => {
    const component = global.mount(<ChangeLang />);
    expect(component.find('option')).toHaveLength(3);
  });
  it('Should change lange & change select value', () => {
    const value = 'ru';
    const component = global.mount(<ChangeLang />);
    const select = component.find('styled__StSelect');
    select.simulate('change', { target: { value } });
    expect(select.getDOMNode().value).toBe(value);
  });
});
