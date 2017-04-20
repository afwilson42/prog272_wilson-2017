import React, { Component } from 'react';
import logo from '../Smallpie.svg';
import '../App.css';


class ElfHeader extends Component {

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to Prog 272</h2>
                </div>
            </div>
        );
    }
}

export default ElfHeader;
