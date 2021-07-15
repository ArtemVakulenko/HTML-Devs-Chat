import { mount, shallow } from 'enzyme';
import React from 'react';
import ModalIpts from '../ModalIpts';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn().mockImplementation(() => ({
    t: jest.fn(),
  })),
}));
jest.mock('../../../../hooks', () => ({
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
describe('ModalIpts', () => {
  const props = {
    setImg: jest.fn(),
    imgName: 'sad',
    roomValue: 'sad',
    searchValue: 'sad',
    setRoomName: jest.fn(),
    setSearchUser: jest.fn(),
  };
  it('Should match snapshot', () => {
    const component = shallow(<ModalIpts {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have StIpts', () => {
    const component = mount(<ModalIpts {...props} />);
    expect(component.find('styled__StIpts')).toHaveLength(1);
  });
  it('Should have Input', () => {
    const component = mount(<ModalIpts {...props} />);
    expect(component.find('Input')).toHaveLength(2);
  });
  it('Should have FileIpt', () => {
    const component = mount(<ModalIpts {...props} />);
    expect(component.find('FileIpt')).toHaveLength(1);
  });
});
