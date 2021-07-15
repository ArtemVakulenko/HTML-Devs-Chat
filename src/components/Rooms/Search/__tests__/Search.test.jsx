import React from 'react';
import Search from '../Search';

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
describe('Search', () => {
  const props = {
    value: 'MockValue',
    onChange: jest.fn(),
  };
  it('Should match snapshot', () => {
    const component = global.shallow(<Search {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have input', () => {
    const component = global.mount(<Search {...props} />);
    expect(component.find('input')).toHaveLength(1);
  });
  it('Should have called onchange', () => {
    const newValue = 'MockValueNew';
    const component = global.mount(<Search {...props} />);
    component.find('input').simulate('change', { target: { value: newValue } });
    expect(component.props().onChange).toHaveBeenCalledWith(newValue);
  });
});
