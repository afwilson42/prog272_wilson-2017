import React from 'react';
import ReactDOM from 'react-dom';
import App  from './App';
import {shallow} from 'enzyme';


describe('React JestSuite', function () {

    // element render tests

    it('renders without our App component crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });


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

    it('renders and displays the words First Name', () => {
        const wrapper = shallow(<App />);
        const fName = <p className="App-intro">First Name: </p>;
        expect(wrapper.contains(fName)).toEqual(true);
    });

    it('renders and displays the words Last Name', () => {
        const wrapper = shallow(<App />);
        const lName = <p className="App-intro">Last Name: </p>;
        expect(wrapper.contains(lName)).toEqual(true);
    });


    it('renders and displays the words Street Address', () => {
        const wrapper = shallow(<App />);
        const lName = <p className="App-intro">Street Address: </p>;
        expect(wrapper.contains(lName)).toEqual(true);
    });

    it('renders and displays the word City', () => {
        const wrapper = shallow(<App />);
        const lName = <p className="App-intro">City: </p>;
        expect(wrapper.contains(lName)).toEqual(true);
    });

    it('renders and displays the word State', () => {
        const wrapper = shallow(<App />);
        const lName = <p className="App-intro">State: </p>;
        expect(wrapper.contains(lName)).toEqual(true);
    });

    it('renders and displays the words Zip Code', () => {
        const wrapper = shallow(<App />);
        const lName = <p className="App-intro">Zip Code: </p>;
        expect(wrapper.contains(lName)).toEqual(true);
    });


    it('renders and displays the words Phone Number', () => {
        const wrapper = shallow(<App />);
        const lName = <p className="App-intro">Phone Number: </p>;
        expect(wrapper.contains(lName)).toEqual(true);
    });


//=====================================================================================
    // Button Render Tests

    it('renders button click message to show 9', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">Nine: 9</p>;
        wrapper.find('button.elf').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders button click message to show Suzan', () => {
        const wrapper = shallow(<App />);
        const fName = <p className="App-intro">First Name: Suzan</p>;
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.contains(fName)).toEqual(true);
    });

    it('renders button click message to show DelBene', () => {
        const wrapper = shallow(<App />);
        const lName = <p className="App-intro">Last Name: DelBene</p>;
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.contains(lName)).toEqual(true);
    });


    it('renders button click message to show Street Address of 22121 17th Ave SE #220', () => {
        const wrapper = shallow(<App />);
        const sAddress = <p className="App-intro">Street Address: 22121 17th Ave SE #220</p>;
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.contains(sAddress)).toEqual(true);
    });


    it('renders button click message to show City of Bothell', () => {
        const wrapper = shallow(<App />);
        const city = <p className="App-intro">City: Bothell</p>;
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.contains(city)).toEqual(true);
    });

    it('renders button click message to show State of WA', () => {
        const wrapper = shallow(<App />);
        const usState = <p className="App-intro">State: WA</p>;
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.contains(usState)).toEqual(true);
    });


    it('renders button click message to show Zip Code of 98021', () => {
        const wrapper = shallow(<App />);
        const zip = <p className="App-intro">Zip Code: 98021</p>;
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.contains(zip)).toEqual(true);
    });


    it('renders button click message to show Phone Number of (425)485-0085', () => {
        const wrapper = shallow(<App />);
        const phone = <p className="App-intro">Phone Number: (425)485-0085</p>;
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.contains(phone)).toEqual(true);
    });


});
