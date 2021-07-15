import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useLayoutEffect: jest.requireActual('react').useEffect,
}));

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.toJson = toJson;

export const shallowSmart = (component, store) => {
    const core = store
        ? <Router><Provider store={store}>{component}</Provider></Router>
        : <Router>{component}</Router>;
    return shallow(core);
};
export const mountSmart = (component, store) => {
    const core = store
        ? <Router><Provider store={store}>{component}</Provider></Router>
        : <Router>{component}</Router>;
    return mount(core);
};
