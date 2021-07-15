import { mount, shallow } from 'enzyme';
import React from 'react';
import ChatInfo from '../ChatInfo';

describe('ChatInfo', () => {
  describe('havecount', () => {
    const props = { unreadCount: 1 };
    it('Should match snapshot', () => {
      const component = shallow(<ChatInfo {...props} />);
      expect(component.html()).toMatchSnapshot();
    });
    it('Should have StInfo', () => {
      const component = mount(<ChatInfo {...props} />);
      expect(component.find('styled__StInfo')).toHaveLength(1);
    });
    it('Should have StMessageCount', () => {
      const component = mount(<ChatInfo {...props} />);
      expect(component.find('styled__StMessageCount')).toHaveLength(1);
    });
    it('Should have span', () => {
      const component = mount(<ChatInfo {...props} />);
      expect(component.find('span')).toHaveLength(1);
    });
  });
  describe('withoutCount', () => {
    const props = { unreadCount: 0 };
    it('Should match snapshot', () => {
      const component = shallow(<ChatInfo {...props} />);
      expect(component.html()).toMatchSnapshot();
    });
    it('Should have StInfo', () => {
      const component = mount(<ChatInfo {...props} />);
      expect(component.find('styled__StInfo')).toHaveLength(1);
    });
    it('Should have StMessageCount', () => {
      const component = mount(<ChatInfo {...props} />);
      expect(component.find('styled__StMessageCount')).toHaveLength(0);
    });
    it('Should have span', () => {
      const component = mount(<ChatInfo {...props} />);
      expect(component.find('span')).toHaveLength(0);
    });
  });
});
