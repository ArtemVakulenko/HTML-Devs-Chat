import { mount, shallow } from 'enzyme';
import React from 'react';
import ChatRoom from '../ChatRoom';

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
        button: '',
      },
    },
    theme: 'dark',
  })),
}));
jest.mock('react-router-dom', () => ({
  NavLink: jest.fn()
    .mockImplementation(
      (props) => <a href={props.path} >{props.children}</a>,
    ),
}));

describe('ChatRoom', () => {
  const props = {
    id: '123',
    img: 'src',
    title: 'title',
    match: { params: { id: '123' } },
    unreadCount: 1,
    setActiveRoom: jest.fn(),
    clearMessageValue: jest.fn(),
    clearUnreadMessages: jest.fn(),
  };
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('Should match snapshot', () => {
    const component = shallow(<ChatRoom {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have a', () => {
    const component = mount(<ChatRoom {...props} />);
    expect(component.find('a')).toHaveLength(1);
  });
  it('Should have Title', () => {
    const component = mount(<ChatRoom {...props} />);
    expect(component.find('Title')).toHaveLength(1);
  });
  it('Should have StChatRoomContainer', () => {
    const component = mount(<ChatRoom {...props} />);
    expect(component.find('styled__StChatRoomContainer')).toHaveLength(1);
  });
  it('Should have StChatImg', () => {
    const component = mount(<ChatRoom {...props} />);
    expect(component.find('styled__StChatImg')).toHaveLength(1);
  });
  it('Should have ChatInfo', () => {
    const component = mount(<ChatRoom {...props} />);
    expect(component.find('ChatInfo')).toHaveLength(1);
  });
  it('Should have call handlesetActive room && setActiveRoom', () => {
    const component = mount(<ChatRoom {...props} />);
    component.find('a').simulate('click');
    expect(component.props().setActiveRoom).toHaveBeenCalledWith(props.id);
  });
  it('Should have call handlesetActive room && clearUnreadMessages', () => {
    const component = mount(<ChatRoom {...props} />);
    component.find('a').simulate('click');
    expect(component.props().setActiveRoom).toHaveBeenCalledWith(props.id);
  });
  it('Should have call handlesetActive room && clearMessageValue', () => {
    const component = mount(<ChatRoom {...props} />);
    component.find('a').simulate('click');
    expect(component.props().setActiveRoom).toHaveBeenCalled();
  });
  it('Should have matchparams id', () => {
    const component = mount(<ChatRoom {...props} />);
    expect(component.props().setActiveRoom).toHaveBeenCalledTimes(1);
  });
  it('Should have !matchparams id', () => {
    props.match.params.id = '';
    const component = mount(<ChatRoom {...props} />);
    expect(component.props().setActiveRoom).not.toHaveBeenCalled();
  });
});
