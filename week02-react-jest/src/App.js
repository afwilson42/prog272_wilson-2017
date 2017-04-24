import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            nine: '0',
            firstName: "",
            lastName: "",
            streetAdr: "",
            city: "",
            usState:"",
            zip:"",
            phone: ""
        }
    }

    getNine = () => {
        this.setState({nine: '9'});
    }

    setAddress = () => {
         this.setState({
             firstName: "Suzan",
             lastName: "DelBene",
             streetAdr: "22121 17th Ave SE #220",
             city: "Bothell",
             usState: "WA",
             zip: "98021",
             phone: "(425)485-0085"

         })
    };

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
                    First Name: {this.state.firstName}
                </p>

                <p className="App-intro">
                    Last Name: {this.state.lastName}
                </p>

                <p className="App-intro">
                    Street Address: {this.state.streetAdr}
                </p>

                <p className="App-intro">
                    City: {this.state.city}
                </p>

                <p className="App-intro">
                    State: {this.state.usState}
                </p>

                <p className="App-intro">
                    Zip Code: {this.state.zip}
                </p>

                <p className="App-intro">
                    Phone Number: {this.state.phone}
                </p>



                <button onClick = {this.getNine} className="elf">Get Nine</button>

                <button onClick={this.setAddress} className="setAdr">Set Address</button>
            </div>
        );
    }
}

export default App;
