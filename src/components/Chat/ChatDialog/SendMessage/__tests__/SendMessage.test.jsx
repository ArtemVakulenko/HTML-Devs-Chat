import React from 'react';
import SendMessage from '../SendMessage';

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

  describe('ChatHeader', () => {
    it('Should match snapshot', () => {
      const component = global.shallow(<SendMessage/>);
      expect(component.html()).toMatchSnapshot();
    });
  });
