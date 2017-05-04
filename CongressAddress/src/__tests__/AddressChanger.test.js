/**
 * AddressChanger tests.
 */

import React from 'react';
import {mount} from 'enzyme';
import ElfTestDebug from '../ElfTestDebug';
// const ElfTestDebug = new ElfTestDebug();
import AddressChanger from '../components/AddressChanger';


describe('React Address Test Suite', function () {

    let quiet = false;


    it('renders and displays the word First Name', () => {

        // passes in addresses object
        const wrapper = mount(<AddressChanger />);

        // sets what rendered element should look like
        const fName = <input id="firstName" className="App-intro" value="unknown" />;

        // compares rendered element to expected value. Pass if true, otherwise fail
        expect(wrapper.containsMatchingElement(fName)).toEqual(true);

    });


    it('renders and displays Last Name of Unknown', () => {
        const wrapper = mount(<AddressChanger />);
        const lName = <input id="lastName" className="App-intro" value="unknown"/>;
        expect(wrapper.containsMatchingElement(lName)).toEqual(true);
    });


    it('renders and displays Street Address of Unknown', () => {
        const wrapper = mount(<AddressChanger />);
        const street = <input id="streetAdr" className="App-intro" value="unknown" />;
        expect(wrapper.containsMatchingElement(street)).toEqual(true);
    });


    it('renders and displays City of Unknown', () => {
        const wrapper = mount(<AddressChanger />);
        const city = <input id="city" className="App-intro" value="unknown" />;
        expect(wrapper.containsMatchingElement(city)).toEqual(true);
    });


    it('renders and displays State of Unknown', () => {
        const wrapper = mount(<AddressChanger />);
        const usState = <input id="usState" className="App-intro" value="unknown" />;
        expect(wrapper.containsMatchingElement(usState)).toEqual(true);
    });

    it('renders and displays Zip Code of Unknown', () => {
        const wrapper = mount(<AddressChanger />);
        const zip = <input id="zip" className="App-intro" value="unknown" />;
        expect(wrapper.containsMatchingElement(zip)).toEqual(true);
    });


    it('renders and displays Phone Number of Unknown', () => {
        const wrapper = mount(<AddressChanger />);
        const phone = <input id="phone" className="App-intro" value="unknown" />;
        expect(wrapper.containsMatchingElement(phone)).toEqual(true);
    });

    it('renders and displays Web Address of Unknown', () => {
        const wrapper = mount(<AddressChanger />);
        const webAdr = <input id="web" className="App-intro" value="unknown" />;
        expect(wrapper.containsMatchingElement(webAdr)).toEqual(true);
    });

    it('renders and displays Set Address Button', () => {
        const wrapper = mount(<AddressChanger />);
        const btn = <button id="getAddress" className="setAdr">Next Address</button>;
        expect(wrapper.containsMatchingElement(btn)).toEqual(true);
     });


//=================================================================================================

    // button rendering tests
   it('renders button click message to show First name of Suzan', () => {
        const wrapper = mount(<AddressChanger />);
        const firstName = <input id="firstName" className="App-intro" value="Suzan" />;
        wrapper.find('button#getAddress').simulate('click');
        expect(wrapper.containsMatchingElement(firstName)).toEqual(true);

    });

    it('renders button click message to show Last name of DelBene', () => {
        const wrapper = mount(<AddressChanger />);
        const lName = <input id="lastName" className="App-intro" value="DelBene" />;
        wrapper.find('button#getAddress').simulate('click');
        expect(wrapper.containsMatchingElement(lName)).toEqual(true);
    });


    it('renders button click message to show Street Address of 22121 17th Ave SE #220', () => {
        const wrapper = mount(<AddressChanger />);
        const street= <input id="streetAdr" className="App-intro" value="22121 17th Ave SE #220" />;
        wrapper.find('button#getAddress').simulate('click');
        expect(wrapper.containsMatchingElement(street)).toEqual(true);
    });


    it('renders button click message to show City of Bothell', () => {
        const wrapper = mount(<AddressChanger />);
        const city = <input id="city" className="App-intro" value="Bothell" />;
        wrapper.find('button#getAddress').simulate('click');
        expect(wrapper.containsMatchingElement(city)).toEqual(true);
    });


    it('renders button click message to show State of Washington', () => {
        const wrapper = mount(<AddressChanger />);
        const usState = <input id="usState" className="App-intro" value="WA" />;
        wrapper.find('button#getAddress').simulate('click');
        expect(wrapper.containsMatchingElement(usState)).toEqual(true);
    });


    it('renders button click message to show Zip Code of 98021', () => {
        const wrapper = mount(<AddressChanger />);
        const zip = <input id="zip" className="App-intro" value="98021" />;
        wrapper.find('button#getAddress').simulate('click');
        expect(wrapper.containsMatchingElement(zip)).toEqual(true);
    });

    it('renders button click message to show Phone Number of (425)485-0085', () => {
        const wrapper = mount(<AddressChanger />);
        const webAdr = <input id="web" className="App-intro" value="https://delbene.house.gov/" />;
        wrapper.find('button#getAddress').simulate('click');
        expect(wrapper.containsMatchingElement(webAdr)).toEqual(true);
    });

});// end describe
