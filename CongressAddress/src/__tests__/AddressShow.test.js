/**
 * Address component tests.
 */

import React from 'react';
import {mount, shallow} from 'enzyme';
import addresses from '../address-list';
import AddressShow from '../components/AddressShow';
import Address from '../components/Address';
import ElfTestDebug from '../ElfTestDebug';
const elfTestDebug = new ElfTestDebug(true);

describe('React AddressShow Suite', function () {

    let address = {};
    let quiet = true;

    beforeEach(function() {
        address = addresses[0];
        }
    );

    const getLast = (wrapper) =>{
        const ninep = wrapper.find('p').last().debug();
        if(!quiet) {
            console.log(ninep);
        }
    };

    const getFirst = (wrapper) =>{
        const ninep = wrapper.find('p').first().debug();
        if(!quiet) {
            console.log(ninep);
        }
    };


    it('renders and displays the word First Name', () => {

        // passes in addresses object
        const wrapper = shallow(<AddressShow address={address} />);


        // sets what rendered element should look like
        const fName = <p className="App-intro">First Name: unknown</p>;

        // compares rendered element to expected value. Pass if true, otherwise fail
        expect(wrapper.contains(fName)).toEqual(true);

    });

  
    it('renders and displays Last Name of Unknown', () => {
        const wrapper = shallow(<AddressShow address={address}/>);

        const lName = <p className="App-intro">Last Name: unknown</p>;
        expect(wrapper.contains(lName)).toEqual(true);
    });


    it('renders and displays Street Address of Unknown', () => {
        const wrapper = shallow(<AddressShow address={address}/>);
        const streetAdr = <p className="App-intro">Street Address: unknown</p>;
        expect(wrapper.contains(streetAdr)).toEqual(true);
    });


    it('renders and displays City of Unknown', () => {
        const wrapper = shallow(<AddressShow address={address}/>);
        const city = <p className="App-intro">City: unknown</p>;
        expect(wrapper.contains(city)).toEqual(true);
    });


    it('renders and displays State of Unknown', () => {
        const wrapper = shallow(<AddressShow address={address}/>);
        const usState = <p className="App-intro">State: unknown</p>;
        expect(wrapper.contains(usState)).toEqual(true);
    });


    it('renders and displays Zip Code of Unknown', () => {
        const wrapper = shallow(<AddressShow address={address}/>);
        const zip = <p className="App-intro">Zip Code: unknown</p>;
        expect(wrapper.contains(zip)).toEqual(true);
    });

    it('renders and displays Phone Number of Unknown', () => {
        const wrapper = shallow(<AddressShow address={address}/>);
        const phone = <p className="App-intro">Phone Number: unknown</p>;
        expect(wrapper.contains(phone)).toEqual(true);
    });

    it('renders and displays Web Address of Unknown', () => {
        const wrapper = shallow(<AddressShow address={address}/>);
        const web = <p className="App-intro">Web Address: unknown</p>;
        expect(wrapper.contains(web)).toEqual(true);
    });

    it('renders and displays Set Address Button', () => {
        const wrapper = shallow(<AddressShow address={address}/>);
        const btn = <button id="setAddress" className="setAdr">Next Address</button>;
        expect(wrapper.containsMatchingElement(btn)).toEqual(true);
    });

//=================================================================================================

    // button rendering tests
    fit('renders button click message to show First name of Suzan', () => {
        const wrapper = mount(<Address />);
        const fName = <p className="App-intro">First Name: Suzan</p>;
        wrapper.find('button#setAddress').simulate('click');
        elfTestDebug.getIndex(wrapper, 'div#addressShowRender', 0);
        expect(wrapper.contains(fName)).toEqual(true);
    });

    //const wrapper = shallow(<AddressShow address={address} />);
    // const fName = <p className="App-intro">First Name: unknown</p>;
    // expect(wrapper.contains(fName)).toEqual(true);

    fit('renders button click message to show Last name of DelBene', () => {
        const wrapper = mount(<Address />);
        const lName = <p className="App-intro">Last Name: DelBene</p>;
        wrapper.find('button#setAddress').simulate('click');
        elfTestDebug.getIndex(wrapper, 'div#addressShowRender', 1);
        expect(wrapper.contains(lName)).toEqual(true);
    });


    it('renders button click message to show Street Address of 22121 17th Ave SE #220', () => {
        const wrapper = shallow(<AddressShow address={address} />);
        const streetAdr = <p className="App-intro">Street Address: 22121 17th Ave SE #220</p>;
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.contains(streetAdr)).toEqual(true);
    });


    it('renders button click message to show City of Bothell', () => {
        const wrapper = shallow(<AddressShow address={address} />);
        const city= <p className="App-intro">City: Bothell</p>;
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.contains(city)).toEqual(true);
    });


    it('renders button click message to show State of Washington', () => {
        const wrapper = shallow(<AddressShow address={address} />);
        const usState = <p className="App-intro">State: WA</p>;
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.contains(usState)).toEqual(true);
    });


    it('renders button click message to show Zip Code of 98021', () => {
        const wrapper = shallow(<AddressShow address={address} />);
        const zip = <p className="App-intro">Zip Code: 98021</p>;
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.contains(zip)).toEqual(true);
    });

    it('renders button click message to show Phone Number of (425)485-0085', () => {
        const wrapper = shallow(<AddressShow address={address} />);
        const phone = <p className="App-intro">Phone Number: (425)485-0085</p>;
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.contains(phone)).toEqual(true);
    });

    it('renders button click message to show Web Address of "https://delbene.house.gov/"', () => {
        const wrapper = shallow(<AddressShow address={address} />);
        const web = <p className="App-intro">Web Address: https://delbene.house.gov/</p>;
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.contains(web)).toEqual(true);
    });


});// end describe