import React from 'react';
import { shallow, mount } from 'enzyme';
import CustomModal from '../CustomModal';

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

describe('CustomModal', () => {
  const props = {
    title: 'My account',
    onClose: jest.fn(),
    children: <div />,
  };
  it('Should match snapshot', () => {
    const component = shallow(<CustomModal {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have StModalWrapper ', () => {
    const component = mount(<CustomModal {...props} />);
    expect(component.find('styled__StModalWrapper')).toHaveLength(1);
  });
  it('Should have Title', () => {
    const component = mount(<CustomModal {...props} />);
    expect(component.find('Title')).toHaveLength(1);
  });
  it('Should have button', () => {
    const component = mount(<CustomModal {...props} />);
    expect(component.find('Button')).toHaveLength(1);
  });
  it('Should have StModalHeader ', () => {
    const component = mount(<CustomModal {...props} />);
    expect(component.find('styled__StModalHeader')).toHaveLength(1);
  });
  it('Should have StModalContent ', () => {
    const component = mount(<CustomModal {...props} />);
    expect(component.find('styled__StModalContent')).toHaveLength(1);
  });
  it('Should close modal on click on the StModalWrapper', () => {
    const component = mount(<CustomModal {...props} />);
    component.find('styled__StModalWrapper').simulate('click');
    expect(component.props().onClose).toHaveBeenCalled();
  });
});
