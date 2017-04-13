import React from 'react';
import ReactDOM from 'react-dom';
import App  from './App';
import {shallow} from 'enzyme';


describe('React JestSuite', function () {
    it('renders without our App component crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('see if true is true', () => {
        expect(true).toBe(true);
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

    it('renders and displays the word firstName', () => {
        const wrapper = shallow(<App />);
        const fName = <p className="App-intro">firstName: </p>;
        expect(wrapper.contains(fName)).toEqual(true);
    });

    it('renders and displays the word lastName', () => {
        const wrapper = shallow(<App />);
        const lName = <p className="App-intro">lastName: </p>;
        expect(wrapper.contains(lName)).toEqual(true);
    });


    it('renders button click message to show 9', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">Nine: 9</p>;
        wrapper.find('button.elf').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders button click message to show foo', () => {
        const wrapper = shallow(<App />);
        const fName = <p className="App-intro">firstName: foo</p>;
        wrapper.find('button.elf').simulate('click');
        expect(wrapper.contains(fName)).toEqual(true);
    });

    it('renders button click message to show bar', () => {
        const wrapper = shallow(<App />);
        const lName = <p className="App-intro">lastName: bar</p>;
        wrapper.find('button.elf').simulate('click');
        expect(wrapper.contains(lName)).toEqual(true);
    });


});
