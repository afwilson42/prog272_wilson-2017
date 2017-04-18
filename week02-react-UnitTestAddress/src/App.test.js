import React from 'react';
import ReactDOM from 'react-dom';
import App  from './App';
import ElfHeader from './components/ElfHeader';
import Address from './components/Address';
import {shallow} from 'enzyme';


describe('React JestSuite', function () {

    it('renders without our App component crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    //element rendering tests

     it('renders and reads H1 text', () => {
        const wrapper = shallow(<ElfHeader />);
        const welcome = <h2>Welcome to Prog 272</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

     it('renders and displays the word Nine', () => {
        const wrapper = shallow(<App />);
        const nine = <p className="App-intro">Nine: 0</p>;
        expect(wrapper.contains(nine)).toEqual(true);
    });

    it('renders and displays the word First Name', () => {
        const wrapper = shallow(<Address />);
        const fName = <p className="App-intro">First Name: </p>;
        expect(wrapper.contains(fName)).toEqual(true);
    });

    it('renders and displays the word Last Name', () => {
        const wrapper = shallow(<Address />);
        const lName = <p className="App-intro">Last Name: </p>;
        expect(wrapper.contains(lName)).toEqual(true);
    });





// Button click tests

    it('renders button click message to show 9', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">Nine: 9</p>;
        wrapper.find('button.elf').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders button click message to show First name of Carly', () => {
        const wrapper = shallow(<Address />);
        const fName = <p className="App-intro">First Name: Carly</p>;
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.contains(fName)).toEqual(true);
    });

    it('renders button click message to show Last name of bar', () => {
        const wrapper = shallow(<Address />);
        const lName = <p className="App-intro">Last Name: bar</p>;
        wrapper.find('button.setAdr').simulate('click');
        expect(wrapper.contains(lName)).toEqual(true);
    });



});
