/**
 * Address component tests.
 */

import React from 'react';
import {shallow} from 'enzyme';
import addresses from '../address-list';
import AddressShow from '../components/AddressShow';
import ElfTestDebug from '../ElfTestDebug';

describe('React AddressShow Suite', function() {

    let address = {};
    let quiet = false;

    beforeEach(function() {
            address = addresses[0];
        }
    );

    const getLast = (wrapper) => {
        const ninep = wrapper.find('p').last().debug();
        if (!quiet) {
            console.log(ninep);
        }
    };

    const getFirst = (wrapper) => {
        const ninep = wrapper.find('p').first().debug();
        if (!quiet) {
            console.log(ninep);
        }
    };

    const getButton = (wrapper) => {
        const btnInfo = wrapper.find('button').first().debug();
        if (!quiet) {
            console.log(btnInfo);
        }
    };

    const getIndex = function(wrapper, index, talkToMe) {
        if (!quiet || talkToMe) {
            const elementInfo = wrapper.find('div#addressShowRender').childAt(index).debug();
            console.log('Info:', elementInfo);
        }
    };

    it('renders and displays the word First Name', () => {

        const wrapper = shallow(<AddressShow address={address} />);
        const fName = <p className='App-intro'>First Name: unknown</p>;
        expect(wrapper.contains(fName)).toEqual(true);
    });

    it('renders and displays Last Name of Unknown', () => {
        const wrapper = shallow(<AddressShow address={address}/>);
        const lName = <p className='App-intro'>Last Name: unknown</p>;
        expect(wrapper.contains(lName)).toEqual(true);
    });

    it('renders and displays Street Address of Unknown', () => {
        const wrapper = shallow(<AddressShow address={address}/>);
        const streetAdr = <p className='App-intro'>Street Address: unknown</p>;
        expect(wrapper.contains(streetAdr)).toEqual(true);
    });

    it('renders and displays City of Unknown', () => {
        const wrapper = shallow(<AddressShow address={address}/>);
        const city = <p className='App-intro'>City: unknown</p>;
        expect(wrapper.contains(city)).toEqual(true);
    });

    it('renders and displays State of Unknown', () => {
        const wrapper = shallow(<AddressShow address={address}/>);
        const usState = <p className='App-intro'>State: unknown</p>;
        expect(wrapper.contains(usState)).toEqual(true);
    });

    it('renders and displays Zip Code of Unknown', () => {
        const wrapper = shallow(<AddressShow address={address}/>);
        const zip = <p className='App-intro'>Zip Code: unknown</p>;
        expect(wrapper.contains(zip)).toEqual(true);
    });

    it('renders and displays Phone Number of Unknown', () => {
        const wrapper = shallow(<AddressShow address={address}/>);
        const phone = <p className='App-intro'>Phone Number: unknown</p>;
        expect(wrapper.contains(phone)).toEqual(true);
    });

    it('renders and displays Web Address of Unknown', () => {
        const wrapper = shallow(<AddressShow address={address}/>);
        const web = <p className='App-intro'>Web Address: unknown</p>;
        expect(wrapper.contains(web)).toEqual(true);
    });

    it('renders and displays First Address Button', () => {
        const wrapper = shallow(<AddressShow address={address}/>);
        const btn = <button id='firstAddress' className='firstAdr'>First Address</button>;
        expect(wrapper.containsMatchingElement(btn)).toEqual(true);
    });

    it('renders and displays Previous Address Button', () => {
        const wrapper = shallow(<AddressShow address={address}/>);
        const btn = <button id='prevAddress' className='prevAdr'>Previous Address</button>;
        expect(wrapper.containsMatchingElement(btn)).toEqual(true);
    });

    it('renders and displays Set Address Button', () => {
        const wrapper = shallow(<AddressShow address={address}/>);
        const btn = <button id='setAddress' className='setAdr'>Next Address</button>;
        expect(wrapper.containsMatchingElement(btn)).toEqual(true);
    });

    it('renders and displays Last Address Button', () => {
        const wrapper = shallow(<AddressShow address={address}/>);
        const btn = <button id='lastAddress' className='lastAdr'>Last Address</button>;
        expect(wrapper.containsMatchingElement(btn)).toEqual(true);
    });

    //=================================================================================================
    // button test
    it('responds to a button click(First Address)', () => {
        //create variable to track button click status
        let clicked = false;
        //create function to assign as onClick
        const callback = () => {
            clicked = true;
        };

        const wrapper = shallow(<AddressShow onFirstAddress = {callback} address={address}/>);
        wrapper.find('button#firstAddress').simulate('click');
        expect(clicked).toEqual(true);

    });

    it('responds to a button click(Previous Address)', () => {
        //create variable to track button click status
        let clicked = false;
        //create function to assign as onClick
        const callback = () => {
            clicked = true;
        };

        const wrapper = shallow(<AddressShow onPrevAddress = {callback} address={address}/>);
        wrapper.find('button#prevAddress').simulate('click');
        expect(clicked).toEqual(true);

    });

    it('responds to a button click(Next Address)', () => {
        //create variable to track button click status
        let clicked = false;
        //create function to assign as onClick
        const callback = () => {
            clicked = true;
        };

        const wrapper = shallow(<AddressShow onSetAddress = {callback} address={address}/>);
        wrapper.find('button#setAddress').simulate('click');
        expect(clicked).toEqual(true);

    });

    it('responds to a button click(Last Address)', () => {
        //create variable to track button click status
        let clicked = false;
        //create function to assign as onClick
        const callback = () => {
            clicked = true;
        };

        const wrapper = shallow(<AddressShow onLastAddress = {callback} address={address}/>);
        wrapper.find('button#lastAddress').simulate('click');
        expect(clicked).toEqual(true);

    });

});// end describe
