import { shallow, mount } from 'enzyme';
import React from 'react';
import FileIpt from '../FileIpt';
import { toBase64 } from '../../../../helpers';

jest.mock('../../../../helpers', () => ({
  toBase64: jest.fn(),
}),
);
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
toBase64;
describe('FileIpt', () => {
  describe('type text', () => {
    const props = {
      value: 'MockValue',
      onChange: jest.fn(),
    };
    it('Should match snapshot', () => {
      const component = shallow(<FileIpt {...props} />);
      expect(component.html()).toMatchSnapshot();
    });
    it('Should have StFileIpt', () => {
      const component = mount(<FileIpt {...props} />);
      expect(component.find('styled__StFileIpt')).toHaveLength(1);
    });
    it('Should have input', () => {
      const component = mount(<FileIpt {...props} />);
      expect(component.find('input')).toHaveLength(1);
    });
  });
});
