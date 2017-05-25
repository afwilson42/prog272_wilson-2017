/**
 * Created by bcuser on 5/24/17.
 */

import ReactDOM from 'react-dom';
import React from 'react';
import AddressMenu from '../components/AddressMenu';
import {shallow} from 'enzyme';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
import {mount} from 'enzyme';
import { Link, MemoryRouter, BrowserRouter as Router } from 'react-router-dom';
import DataMaven from '../components/DataMaven';
const elfDebug = new ElfDebugEnzyme(true, 'AddressMenu.test.js');
jest.mock('whatwg-fetch');

describe('AddressMenu Suite', function() {

    beforeEach(function() {
        const localStorageMock = (function() {
            let storage = {};
            return {
                getItem: function(key) {
                    return storage[key];
                },
                setItem: function(key, value) {
                    storage[key] = value.toString();
                },
                clear: function() {
                    storage = {};
                }
            };
        })();
        Object.defineProperty(global, 'localStorage', {value: localStorageMock});

    });

    it('renders the AddressMenu component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router><AddressMenu /></Router>, div);
    });

    it('renders and displays link for AddressEdit', () => {
        const wrapper = mount(<Router><AddressMenu /></Router>);
        elfDebug.getElement(wrapper, 'div');
        const linkTwo = <li><Link to='/'>AddressShow</Link></li>;
        expect(wrapper.containsMatchingElement(linkTwo)).toEqual(true);
    });

    it('renders and displays link for AddressShow', () => {
        const wrapper = mount(<Router><AddressMenu /></Router>);
        elfDebug.getElement(wrapper, 'div');
        const linkOne = <li><Link to='/'>AddressShow</Link></li>;
        expect(wrapper.containsMatchingElement(linkOne)).toEqual(true);
    });

    it('renders and displays link for SmallNumbers', () => {
        const wrapper = mount(<Router><AddressMenu /></Router>);
        elfDebug.getElement(wrapper, 'div');
        const linkThree = <li><Link to='/small'>SmallNumbers</Link></li>;
        expect(wrapper.containsMatchingElement(linkThree)).toEqual(true);
    });

    it('renders with DataMaven the route to AddressEdit', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        //elfDebug.getAll(wrapper);
        const eightSign = <li><Link to='/edit'>AddressEdit</Link></li>;
        expect(wrapper.contains(eightSign)).toEqual(true);
    });
});
