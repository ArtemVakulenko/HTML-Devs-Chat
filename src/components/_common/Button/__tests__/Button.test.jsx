import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

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

describe('Button', () => {
      const props = {
        value: 'login',
        onClick: jest.fn(),
      };
      const props2 = {
        icon: 'login',
        onClick: jest.fn(),
      };
    it('Should match snapshot', () => {
        const component = shallow(<Button {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('Should have button', () => {
        const component = global.mount(<Button {...props} />);
        expect(component.find('button')).toHaveLength(1);
    });
    
    it('Should have Icon', () => {
        const component = global.mount(<Button {...props2} />);
        expect(component.find('button')).toHaveLength(1);
    });
    it('Should be onclick', () => {
        const component = global.mount(<Button {...props} />);
        component.find('button').simulate('click');
        expect(component.props().onClick).toHaveBeenCalled();
      });
});
