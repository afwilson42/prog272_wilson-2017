/**
 * Address component tests.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Address from '../components/Address';
import {shallow} from 'enzyme';
import addresses from '../address-list';


describe('React CongressAddress Address Suite', function () {

    it('renders and displays the word First Name', () => {

        // passes in addresses object
        const wrapper = shallow(<Address address={addresses}/>);

        // sets what rendered element should look like
        const fName = <p className="App-intro">First Name: unknown</p>;
        // getFirst(wrapper);

        // compare the reference to what appears on page
        expect(wrapper.contains(fName)).toEqual(true);
    });


    it('renders and displays the word Last Name', () => {
        const wrapper = shallow(<Address address={addresses}/>);
        const lName = <p className="App-intro">Last Name: unknown</p>;
        expect(wrapper.contains(lName)).toEqual(true);
    });


    // button rendering tests
    it('renders button click message to show First name of Carly', () => {
        const wrapper = shallow(<Address address={addresses}/>);
        const fName = <p className="App-intro">First Name: Carly</p>;
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.contains(fName)).toEqual(true);
    });

    it('renders button click message to show Last name of bar', () => {
        const wrapper = shallow(<Address address={addresses}/>);
        const lName = <p className="App-intro">Last Name: bar</p>;
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.contains(lName)).toEqual(true);
    });

});// end describe