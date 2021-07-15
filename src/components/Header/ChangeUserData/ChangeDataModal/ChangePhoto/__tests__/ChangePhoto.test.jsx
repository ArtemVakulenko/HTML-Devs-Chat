import { shallow, mount } from 'enzyme';
import React from 'react';
import ChangePhoto from '../ChangePhoto';
import { icons } from '../../../../../../constants';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn().mockImplementation(() => ({
    t: jest.fn(),
  })),
}));
jest.mock('../../../../../hooks', () => ({
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

describe('ChangePhoto', () => {
  const props = {
    img: 'img', value: 'value', setUserImg: jest.fn(),
  };
  it('Should match snapshot', () => {
    const component = shallow(<ChangePhoto {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have StChangePhoto', () => {
    const component = mount(<ChangePhoto {...props} />);
    expect(component.find('styled__StChangePhoto')).toHaveLength(1);
  });
  it('Should have img', () => {
    const component = mount(<ChangePhoto {...props} />);
    expect(component.find('img')).toHaveLength(1);
  });
  it('Should have FileIpt', () => {
    const component = mount(<ChangePhoto {...props} />);
    expect(component.find('FileIpt')).toHaveLength(1);
  });
  it('Should have src img', () => {
    const component = mount(<ChangePhoto {...props} />);
    expect(component.find('img').props().src).toBe(props.img);
  });
  it('Should have src default', () => {
    props.img = '';
    const component = mount(<ChangePhoto {...props} />);
    expect(component.find('img').props().src).toBe(icons.defaultUserIcon);
  });
});
