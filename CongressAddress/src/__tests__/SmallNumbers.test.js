import React from 'react';
import ReactDOM from 'react-dom';
import SmallNumbers  from '../components/SmallNumbers';
import {shallow} from 'enzyme';
import elfTestDebug from '../ElfTestDebug';
import AddressChanger from '../components/AddressChanger';


describe('React JestSuite', function () {


    const getLast = (wrapper, element) => {
        const ninep = wrapper.find(element).last().debug();
        console.log(ninep);
    };

    const getFirst = (wrapper, element) => {
        const ninep = wrapper.find(element).first().debug();
        console.log(ninep);
    };


    it('renders without our SmallNumbers component crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SmallNumbers />, div);
    });



    //element rendering tests


     it('renders and displays the word Nine', () => {
        const wrapper = shallow(<SmallNumbers />);
        const nine = <p className="App-intro">Nine: 0</p>;
        expect(wrapper.contains(nine)).toEqual(true);
    });


    // Button click test

    it('renders button click message to show 9', () => {
        const wrapper = shallow(<SmallNumbers />);
        const nineSign = <p className="App-intro">Nine: 9</p>;
        wrapper.find('button.elf').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

}); // end describe s
