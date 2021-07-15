import React from 'react';
import { shallow, mount } from 'enzyme';
import UserItem from '../UserItem';

jest.mock('../../../../../hooks', () => ({
  useTheme: jest.fn().mockImplementation(() => ({
    colors: {
      dark: {
        color: '',
        input: '',
        placeholder: '',
        button: '',
      },
    },
    theme: 'dark',
  })),
}));

describe('UserItem', () => {
  const props = {
    id: '',
    img: '',
    userName: '',
    isOnline: false,
    setChoosenUser: jest.fn(),

  };
  it('Should match snapshot', () => {
    const component = shallow(<UserItem {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have StUserItem', () => {
    const component = mount(<UserItem {...props} />);
    expect(component.find('styled__StUserItem')).toHaveLength(1);
  });
  it('Should have StAvatarBlock', () => {
    const component = mount(<UserItem {...props} />);
    expect(component.find('styled__StAvatarBlock')).toHaveLength(1);
  });
  it('Should have span', () => {
    const component = mount(<UserItem {...props} />);
    expect(component.find('span')).toHaveLength(3);
  });
  it('Should have img', () => {
    const component = mount(<UserItem {...props} />);
    expect(component.find('img')).toHaveLength(1);
  });
  it('Should have StCheck', () => {
    const component = mount(<UserItem {...props} />);
    expect(component.find('styled__StCheck')).toHaveLength(1);
  });
  it('Should have call onCheck', () => {
    const component = mount(<UserItem {...props} />);
    component.find('styled__StUserItem').simulate('click');
    expect(component.props().setChoosenUser).toHaveBeenCalled();
  });
});
