import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Address from "./components/Address";
import addresses from './address-list';
import ElfHeader from "./components/ElfHeader";


ReactDOM.render(
    <div>
        <ElfHeader />
        <App />
        <Address addressList={addresses}/>
    </div>,
    document.getElementById('root')
);