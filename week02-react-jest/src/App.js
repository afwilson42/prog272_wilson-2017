import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            nine: '0',
            firstName: "",
            lastName: ""
        }
    }

    bar = () => {
        this.setState({nine: '9', firstName: "foo", lastName: "bar"});
    }


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to Prog 272</h2>
                </div>
                <p className="App-intro">
                    Nine: {this.state.nine}
                </p>

                <p className="App-intro">
                    firstName: {this.state.firstName}
                </p>

                <p className="App-intro">
                    lastName: {this.state.lastName}
                </p>



                <button onClick = {this.bar} className="elf">Get Nine</button>
            </div>
        );
    }
}

export default App;
