import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Address from "./components/Address";
import ElfHeader from "./components/ElfHeader";

ReactDOM.render(
    <div>
        <ElfHeader />
        <App />
        <Address firstName="foobar"/>
    </div>,
document.getElementById('root')
)
;
