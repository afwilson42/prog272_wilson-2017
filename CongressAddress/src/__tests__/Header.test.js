/**
 * unit tests for header .
 */
import React from 'react';
import ElfHeader from '../components/ElfHeader';
import {shallow} from 'enzyme';

describe('React CongressAddress Header Suite', function() {

    // element rendering test
    it('renders and reads H1 text', () => {
        const wrapper = shallow(<ElfHeader />);
        const welcome = <h2>Welcome to Prog 272</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

});

