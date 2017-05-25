import React from 'react';
import ReactDOM from 'react-dom';
import SmallNumbers  from '../components/SmallNumbers';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
import { MemoryRouter } from 'react-router';
import DataMaven from '../components/DataMaven';
const elfDebug = new ElfDebugEnzyme(true, 'SmallNumbers.test.js');

jest.mock('whatwg-fetch');

describe('React JestSuite', function() {

    beforeEach(function() {
        const localStorageMock = (function() {
            let storage = {};
            return {
                getItem: function(key) {
                    return storage[key];
                },
                setItem: function(key, value) {
                    storage[key] = value.toString();
                },
                clear: function() {
                    storage = {};
                }
            };
        })();
        Object.defineProperty(global, 'localStorage', {value: localStorageMock});

    });

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
        const nine = <p className='App-intro'>Nine: 0</p>;
        expect(wrapper.contains(nine)).toEqual(true);
    });

    // Button click test

    it('renders button click message to show 9', () => {
        const wrapper = shallow(<SmallNumbers />);
        const nineSign = <p className='App-intro'>Nine: 9</p>;
        wrapper.find('button.elf').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    fit('renders with DataMaven the SmallNumbers state.nine', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/get-numbers']}>
                <DataMaven />
            </MemoryRouter>
        );
        elfDebug.getAll(wrapper);
        const nineSign = <p className='App-intro'>nine: 0</p>;
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

}); // end describe s
