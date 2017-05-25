/**
 * Created by bcuser on 5/24/17.
 */

import ReactDOM from 'react-dom';
import React from 'react';
import AddressMenu from '../components/AddressMenu';
import {shallow} from 'enzyme';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
import {mount} from 'enzyme';
import { MemoryRouter, Router } from 'react-router';
import DataMaven from '../components/DataMaven';
const elfDebug = new ElfDebugEnzyme(true, 'AddressMenu.test.js');


describe('AddressMenu Suite', function() {

    fit('renders the AddressMenu component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router><AddressMenu /></Router>, div);
    });

    it('renders and displays link for AddressEdit', () => {
        const wrapper = mount(<AddressMenu/>);
        const linkOne = <li><Link to='/'>AddressShow</Link></li>;
        expect(wrapper.contains(linkOne)).toEqual(true);
    });

    it('renders with DataMaven the route to AddressEdit', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/edit']}>
                <DataMaven />
            </MemoryRouter>
        );
        elfDebug.getAll(wrapper);
        const eightSign = <li><Link to='/edit'>AdressEdit</Link></li>;
        expect(wrapper.contains(eightSign)).toEqual(true);
    });
});
