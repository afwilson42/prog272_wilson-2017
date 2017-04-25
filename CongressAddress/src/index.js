import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';
import Address from './components/Address';
import ElfHeader from './components/ElfHeader';


ReactDOM.render(
    <div>
        <ElfHeader />
        <App />
        <Address />
    </div>,
    document.getElementById('root')
);