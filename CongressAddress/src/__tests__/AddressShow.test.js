/**
 * Address component tests.
 */

import React from 'react';
import {shallow} from 'enzyme';
import addresses from '../address-list';
import AddressShow from '../components/AddressShow';
import ElfTestDebug from '../ElfTestDebug';
import {mount} from 'enzyme';

describe('React AddressShow Suite', function () {

    let address = {};
    let quiet = false;

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

    const getButton = (wrapper) =>{
        const btnInfo = wrapper.find('button').first().debug();
        if(!quiet){
            console.log(btnInfo);
        }
    }

    const getIndex = function(wrapper, index, talkToMe) {
        if (!quiet || talkToMe) {
            const elementInfo = wrapper.find('div#addressShowRender').childAt(index).debug();
            console.log('Info:', elementInfo);
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
        console.log(wrapper);
        console.log(lName);
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
        getButton(wrapper);
        expect(wrapper.containsMatchingElement(btn)).toEqual(true);
    });

//=================================================================================================

    // button rendering tests
    it('renders button click message to show First name of Suzan', () => {
        const wrapper = shallow(<AddressShow address={address} />);
        getButton(wrapper);
        const fName = <p className="App-intro">First Name: Suzan</p>;
        wrapper.find('button.setAdr').simulate('click');
        getIndex(wrapper,0);
        expect(wrapper.contains(fName)).toEqual(true);
    });

    fit('renders button click message to show First name of Suzan', () => {
        const wrapper = mount(<AddressShow address={address} />);
        const fName = <p className="App-intro">First Name: Suzan</p>;
        wrapper.find('button#setAddress').simulate('click');
        // getIndex(wrapper,1);
        expect(wrapper.contains(fName)).toEqual(true);
    });

    it('renders button click message to show Last name of DelBene', () => {
        const wrapper = shallow(<AddressShow address={address}/>);
        const lName = <p className="App-intro">Last Name: DelBene</p>;
        console.log(lName);
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.containsMatchingElement(lName)).toEqual(true);
        //expect(wrapper.contains(lName)).toEqual(true);
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