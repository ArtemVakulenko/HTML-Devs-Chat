import React from 'react';
import Title from '../Title';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn().mockImplementation(() => ({
    t: jest.fn(),
  })),
}),
);

describe('Title', () => {
  const props = {
    title: 'This Title',
  };
  it('Should match snapshot', () => {
    const component = global.shallow(<Title {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have h1', () => {
    const component = global.mount(<Title {...props} />);
    expect(component.find('h1')).toHaveLength(1);
  });
});
