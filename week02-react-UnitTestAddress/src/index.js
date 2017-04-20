import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Address from "./components/Address";
import ElfHeader from "./components/ElfHeader";
import addresses from "./address-list";



ReactDOM.render(
    <div>
        <ElfHeader />
        <App />
        <Address address={addresses}/>
    </div>,
document.getElementById('root')
)
;
