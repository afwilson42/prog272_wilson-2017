import React from 'react';
import ReactDOM from 'react-dom';
import App  from './App';
import {shallow} from 'enzyme';


describe('React JestSuite', function () {

    it('renders without our App component crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    /* element rendering tests */

    it('renders and reads H1 text', () => {
        const wrapper = shallow(<App />);
        const welcome = <h2>Welcome to Prog 272</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

     it('renders and displays the word Nine', () => {
        const wrapper = shallow(<App />);
        const nine = <p className="App-intro">Nine: 0</p>;
        expect(wrapper.contains(nine)).toEqual(true);
    });

    it('renders and displays the word First Name', () => {
        const wrapper = shallow(<App />);
        const fName = <p className="App-intro">First Name: </p>;
        expect(wrapper.contains(fName)).toEqual(true);
    });

    it('renders and displays the word Last Name', () => {
        const wrapper = shallow(<App />);
        const lName = <p className="App-intro">Last Name: </p>;
        expect(wrapper.contains(lName)).toEqual(true);
    });

    it('renders and displays the word Street Address', () => {
        const wrapper = shallow(<App />);
        const strAdr = <p className="App-intro">Street Address: </p>;
        expect(wrapper.contains(strAdr)).toEqual(true);
    });

    it('renders and displays the word City', () => {
        const wrapper = shallow(<App />);
        const city = <p className="App-intro">City: </p>;
        expect(wrapper.contains(city)).toEqual(true);
    });

    it('renders and displays the word State', () => {
        const wrapper = shallow(<App />);
        const usState = <p className="App-intro">State: </p>;
        expect(wrapper.contains(usState)).toEqual(true);
    });

    it('renders and displays the word Zip Code', () => {
        const wrapper = shallow(<App />);
        const zipCode = <p className="App-intro">Zip Code: </p>;
        expect(wrapper.contains(zipCode)).toEqual(true);
    });

    it('renders and displays the word Phone', () => {
        const wrapper = shallow(<App />);
        const telePhone = <p className="App-intro">Phone: </p>;
        expect(wrapper.contains(telePhone)).toEqual(true);
    });

/* Button click tests */

    it('renders button click message to show 9', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">Nine: 9</p>;
        wrapper.find('button.elf').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders button click message to show First name of Joan', () => {
        const wrapper = shallow(<App />);
        const fName = <p className="App-intro">First Name: Joan</p>;
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.contains(fName)).toEqual(true);
    });

    it('renders button click message to show Last name of McBride', () => {
        const wrapper = shallow(<App />);
        const lName = <p className="App-intro">Last Name: McBride</p>;
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.contains(lName)).toEqual(true);
    });

    it('renders button click message to show the street Address', () => {
        const wrapper = shallow(<App />);
        const strAdr = <p className="App-intro">Street Address: PO Box 40600</p>;
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.contains(strAdr)).toEqual(true);
    });

    it('renders button click message to show the city name', () => {
        const wrapper = shallow(<App />);
        const city = <p className="App-intro">City: Olympia</p>;
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.contains(city)).toEqual(true);
    });

    it('renders button click message to show the US state initials', () => {
        const wrapper = shallow(<App />);
        const usState = <p className="App-intro">State: WA</p>;
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.contains(usState)).toEqual(true);
    });

    it('renders button click message to show the zip code', () => {
        const wrapper = shallow(<App />);
        const zipCode = <p className="App-intro">Zip Code: 98504-0600</p>;
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.contains(zipCode)).toEqual(true);
    });

    it('renders button click message to show the Phone number', () => {
        const wrapper = shallow(<App />);
        const telePhone = <p className="App-intro">Phone: (360) 786-7848</p>;
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.contains(telePhone)).toEqual(true);
    });


});
