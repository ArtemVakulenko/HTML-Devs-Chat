import { shallow, mount } from 'enzyme';
import React from 'react';
import Input from '../Input';
import { icons } from '../../../../constants';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn().mockImplementation(() => ({
    t: jest.fn(),
  })),
}),
);
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
describe('Input', () => {
  describe('type text', () => {
    const props = {
      value: 'MockValue',
      placeholder: 'MockPlacholder',
      onChange: jest.fn(),
      type: 'text',
    };
    it('Should match snapshot', () => {
      const component = shallow(<Input {...props} />);
      expect(component.html()).toMatchSnapshot();
    });
    it('Should have StInput', () => {
      const component = mount(<Input {...props} />);
      expect(component.find('styled__StInput')).toHaveLength(1);
    });
    it('Should be a change', () => {
      const newValue = 'MockValueNew';
      const component = mount(<Input {...props} />);
      component.find('input').simulate('change', { target: { value: newValue } });
      expect(component.props().onChange).toHaveBeenCalledWith(newValue);
    });
  });
  describe('type password', () => {
    const props = {
      value: 'MockValue',
      placeholder: 'MockPlacholder',
      onChange: jest.fn(),
      type: 'password',
    };
    it('Should match snapshot', () => {
      const component = shallow(<Input {...props} />);
      expect(component.html()).toMatchSnapshot();
    });
    it('Should have StInput', () => {
      const component = mount(<Input {...props} />);
      expect(component.find('styled__StInput')).toHaveLength(1);
    });
    it('Should have StHidePass', () => {
      const component = mount(<Input {...props} />);
      expect(component.find('styled__StHidePass')).toHaveLength(1);
    });
    it('Should be a change', () => {
      const newValue = 'MockValueNew';
      const component = mount(<Input {...props} />);
      component.find('input').simulate('change', { target: { value: newValue } });
      expect(component.props().onChange).toHaveBeenCalledWith(newValue);
    });
    it('Should be a eye click', () => {
      const component = mount(<Input {...props} />);
      const eye = component.find('styled__StHidePass').simulate('click');
      expect(eye.props().src).toBe(icons.showPass);
    });
    it('Should be a eye two click', () => {
      const component = mount(<Input {...props} />);
      const eye = component.find('styled__StHidePass').simulate('click');
      eye.simulate('click');
      expect(eye.props().src).toBe(icons.showPass);
    });
  });
});
