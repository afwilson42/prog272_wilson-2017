import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import ElfHeader from './components/ElfHeader';
import AddressMenu from './components/AddressMenu';

ReactDOM.render(
    <div>
        <ElfHeader />
        <AddressMenu />
    </div>,
    document.getElementById('root')
);