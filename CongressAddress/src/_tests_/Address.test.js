/**
 * Address component tests.
 */

import React from 'react';
import Address from '../components/Address';
import {mount} from 'enzyme';
import addresses from '../address-list';


describe('React Address Test Suite', function () {


    var quiet = true;

    /*
     * @param {object} wrapper - Container for a bunch of HTML nodes
     * @param {number} index - Index of HTML element.
     * @param {boolean} talkToMe - Speak even if quiet is true
     */
    const getIndex = function(wrapper, index, talkToMe) {
        if (!quiet || talkToMe) {
            const ninep = wrapper.find('div#addressShowRender').childAt(index).debug();
            console.log('NINEP:', ninep);
        }
    };

    const defaultFieldTest = (name, index, talkToMe) => {
        const wrapper = mount(<Address address={address}  />);
        const welcome = <p className="App-intro">{name}</p>;
        getIndex(wrapper, index, talkToMe);
        expect(wrapper.contains(welcome)).toEqual(true);
    };

    const afterClickFieldTest = (name, index, talkToMe) => {
        const wrapper = mount(<Address address={address}/>);
        const patty = <p className="App-intro">{name}</p>;
        wrapper.find('button#setAddress').simulate('click');
        getIndex(wrapper, index, talkToMe);
        expect(wrapper.contains(patty)).toEqual(true);
    };


   it('renders and displays the word First Name', () => {

        // passes in addresses object
        const wrapper = mount(<Address addressList={addresses} />);

        // sets what rendered element should look like
        const fName = <p className="App-intro">First Name: unknown</p>;

        // compares rendered element to expected value. Pass if true, otherwise fail
        expect(wrapper.contains(fName)).toEqual(true);

    });

  
   /* it('renders and displays Last Name of Unknown', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const lName = <p className="App-intro">Last Name: unknown</p>;
        expect(wrapper.contains(lName)).toEqual(true);
    });


    it('renders and displays Street Address of Unknown', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const lName = <p className="App-intro">Street Address: unknown</p>;
        expect(wrapper.contains(lName)).toEqual(true);
    });


    it('renders and displays City of Unknown', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const lName = <p className="App-intro">City: unknown</p>;
        expect(wrapper.contains(lName)).toEqual(true);
    });


    it('renders and displays State of Unknown', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const lName = <p className="App-intro">State: unknown</p>;
        expect(wrapper.contains(lName)).toEqual(true);
    });

    it('renders and displays Zip Code of Unknown', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const lName = <p className="App-intro">Zip Code: unknown</p>;
        expect(wrapper.contains(lName)).toEqual(true);
    });

    it('renders and displays Zip Code of Unknown', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const lName = <p className="App-intro">Zip Code: unknown</p>;
        expect(wrapper.contains(lName)).toEqual(true);
    });

    it('renders and displays Phone Number of Unknown', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const lName = <p className="App-intro">Phone Number: unknown</p>;
        expect(wrapper.contains(lName)).toEqual(true);
    });

    it('renders and displays Web Address of Unknown', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const lName = <p className="App-intro">Web Address: unknown</p>;
        expect(wrapper.contains(lName)).toEqual(true);
    }); */

//=================================================================================================

    // button rendering tests
    it('renders button click message to show First name of Suzan', () => {
        const wrapper = mount(<Address addressList={addresses}/>);
        const fName = <p className="App-intro">First Name: Suzan</p>;
        wrapper.find('button#getAddress').simulate('click');
        getIndex(wrapper,1,true);
        expect(wrapper.contains(fName)).toEqual(true);
    });

   /* it('renders button click message to show Last name of DelBene', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const lName = <p className="App-intro">Last Name: DelBene</p>;
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.contains(lName)).toEqual(true);
    });


    it('renders button click message to show Street Address of 22121 17th Ave SE #220', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const lName = <p className="App-intro">Street Address: 22121 17th Ave SE #220</p>;
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.contains(lName)).toEqual(true);
    });


    it('renders button click message to show City of Bothell', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const lName = <p className="App-intro">City: Bothell</p>;
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.contains(lName)).toEqual(true);
    });


    it('renders button click message to show State of Washington', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const lName = <p className="App-intro">State: WA</p>;
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.contains(lName)).toEqual(true);
    });


    it('renders button click message to show Zip Code of 98021', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const lName = <p className="App-intro">Zip Code: 98021</p>;
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.contains(lName)).toEqual(true);
    });

    it('renders button click message to show Phone Number of (425)485-0085', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const lName = <p className="App-intro">Phone Number: (425)485-0085</p>;
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.contains(lName)).toEqual(true);
    }); */




});// end describe
