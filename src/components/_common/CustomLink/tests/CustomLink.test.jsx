import React from 'react';
import CustomLink from '../CustomLink';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn().mockImplementation(() => ({
    t: jest.fn(),
  })),
}),
);
jest.mock('react-router-dom', () => ({
  Link: jest.fn()
    .mockImplementation(
      (props) => <a href={props.path} >{props.children}</a>,
      ),
}));
describe('Title', () => {
  const props = {
    path: '/',
    title: 'This is link',
  };
  it('Should match snapshot', () => {
    const component = global.shallow(<CustomLink {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have a', () => {
    const component = global.mount(<CustomLink {...props} />);
    expect(component.find('a')).toHaveLength(1);
  });
});
