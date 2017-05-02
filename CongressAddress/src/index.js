import React from 'react';
import ReactDOM from 'react-dom';
import SmallNumbers from './components/SmallNumbers';
import './css/index.css';
import Address from './components/Address';
import ElfHeader from './components/ElfHeader';
import AddressMenu from './components/AddressMenu';

ReactDOM.render(
    <div>
        <ElfHeader />
        <AddressMenu />
    </div>,
    document.getElementById('root')
);