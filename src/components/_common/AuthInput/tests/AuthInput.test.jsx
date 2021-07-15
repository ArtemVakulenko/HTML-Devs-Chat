import { shallow, mount } from 'enzyme';
import React from 'react';
import AuthInput from '../AuthInput';

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
describe('Title', () => {
  const props = {
    type: 'login',
    value: 'Alex',
    onChange: jest.fn(),
  };
  it('Should match snapshot', () => {
    const component = shallow(<AuthInput {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have p', () => {
    const component = mount(<AuthInput {...props} />);
    expect(component.find('p')).toHaveLength(1);
  });
  it('Should have input', () => {
    const component = mount(<AuthInput {...props} />);
    expect(component.find('input')).toHaveLength(1);
  });
  it('Should have div', () => {
    const component = mount(<AuthInput {...props} />);
    expect(component.find('div')).toHaveLength(1);
  });
  it('Should have type password', () => {
    props.type = 'password';
    const component = mount(<AuthInput {...props} />);
    expect(component.find('div')).toHaveLength(1);
  });
});
