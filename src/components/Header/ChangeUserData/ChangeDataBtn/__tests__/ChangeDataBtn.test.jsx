import { shallow, mount } from 'enzyme';
import React from 'react';
import { icons } from '../../../../../constants';
import ChangeDataBtn from '../ChangeDataBtn';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn().mockImplementation(() => ({
    t: jest.fn(),
  })),
}));

describe('ChangeDataBtn', () => {
  const props = {
    data: {
      login: 'login',
      img: 'img',
    },
    onClick: jest.fn(),
  };
  it('Should match snapshot', () => {
    const component = shallow(<ChangeDataBtn {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have Button', () => {
    const component = mount(<ChangeDataBtn {...props} />);
    expect(component.find('Button')).toHaveLength(1);
  });
  it('Should have StButtonUser', () => {
    const component = mount(<ChangeDataBtn {...props} />);
    expect(component.find('styled__StButtonUser')).toHaveLength(1);
  });
  it('Should have span', () => {
    const component = mount(<ChangeDataBtn {...props} />);
    expect(component.find('span')).toHaveLength(1);
  });
  it('Should have Button have img', () => {
    const component = mount(<ChangeDataBtn {...props} />);
    expect(component.find('Button').props().icon).toBe(props.data.img);
  });
  it('Should have Button have default img', () => {
    props.data.img = '';
    const component = mount(<ChangeDataBtn {...props} />);
    expect(component.find('Button').props().icon).toBe(icons.defaultUserIcon);
  });
});
