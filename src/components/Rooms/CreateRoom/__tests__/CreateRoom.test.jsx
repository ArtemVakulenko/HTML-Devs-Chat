import React from 'react';
import CreateRoom from '../CreateRoom';

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

describe('CreateRoom', () => {
  const props = {
    getAllUsers: jest.fn(),
  };
  it('Should match snapshot', () => {
    const component = global.shallow(<CreateRoom {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have Button', () => {
    const component = global.mount(<CreateRoom {...props} />);
    expect(component.find('Button')).toHaveLength(1);
  });
  it('Should have StCreateRoomContainer', () => {
    const component = global.mount(<CreateRoom {...props} />);
    expect(component.find('styled__StCreateRoomContainer')).toHaveLength(1);
  });
});
