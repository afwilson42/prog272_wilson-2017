/* Created by Andrew Wilson on 04/17/2017 ...*/

import React, { Component } from 'react';
import '../App.css';
import addresses from './address-list'


class Address extends Component {
    constructor(props){
        super(props);

        console.log('TEST PROPS' , props);

        const address = this.props.address[0];

        this.state = {
            firstName: this.props.address.firstName,
            lastName: this.props.address.lastName,
            streetAdr: this.props.address.streetAdr,
            city: this.props.address.city,
            state:this.props.address.state,
            zip:this.props.address.zip,
            phone: this.props.address.phone
        }
    }

    setAddress = () => {

        const address = this.props.address[1];
        this.setState({


            firstName: this.props.address.firstName,
            lastName: this.props.address.lastName,
            streetAdr: this.props.address.streetAdr,
            city: this.props.address.city,
            state:this.props.address.state,
            zip:this.props.address.zip,
            phone: this.props.address.phone

        })
    };

    render() {
        return (
            <div className="App">

                <p className="App-intro">
                    First Name: {this.state.firstName}
                </p>

                <p className="App-intro">
                    Last Name: {this.state.streetAdr}
                </p>

                <p className="App-intro">
                    Last Name: {this.state.lastName}
                </p>
                <p className="App-intro">
                    Last Name: {this.state.city}
                </p>
                <p className="App-intro">
                    Last Name: {this.state.usState}
                </p>
                <p className="App-intro">
                    Last Name: {this.state.zip}
                </p>
                <p className="App-intro">
                    Last Name: {this.state.phone}
                </p>

                <button onClick={this.setAddress} className="setAdr">Set Address</button>
            </div>
        );
    }
}

export default Address;