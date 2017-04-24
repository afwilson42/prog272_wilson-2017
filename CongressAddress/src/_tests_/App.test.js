import React from 'react';
import ReactDOM from 'react-dom';
import App  from '../App';
import {shallow} from 'enzyme';


describe('React JestSuite', function () {


    const getLast = (wrapper) => {
        const ninep = wrapper.find('p').last().debug();
        console.log(ninep);
    };

    const getFirst = (wrapper) => {
        const ninep = wrapper.find('p').first().debug();
        console.log(ninep);
    };


    it('renders without our App component crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });



    //element rendering tests


     it('renders and displays the word Nine', () => {
        const wrapper = shallow(<App />);
        const nine = <p className="App-intro">Nine: 0</p>;
        expect(wrapper.contains(nine)).toEqual(true);
    });


    // Button click test

    it('renders button click message to show 9', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">Nine: 9</p>;
        wrapper.find('button.elf').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

}); // end describe s
