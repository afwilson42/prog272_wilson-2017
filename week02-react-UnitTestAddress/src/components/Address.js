/* Created by Andrew Wilson on 04/17/2017 ...*/

import React, { Component } from 'react';
import '../App.css';
import addresses from './address-list';


class Address extends Component {
    constructor(props){
        super(props);
        // const address = this.props.addressList[0];
        this.state = {
            // firstName: this.props.address[0].firstName,
            // lastName: this.props.address[0].lastName,
            // treetAdr: this.props.address[0].streetAdr,
            // city: this.props.address[0].city,
            // usState: this.props.address[0].usState,
            // zip: this.props.address[0].zip,
            //phone: this.props.address[0].phone
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            streetAdr: this.props.streetAdr,
            city: this.props.city,
            state: this.props.state,
            zip: this.props.zip,
            phone: this.props.phone
        }
    }

    setAddress = () => {
        // const address = this.props.addressList[1];
        console.log('TEST PROPS' , props);

        this.setState({
            firstName: this.props.address[1].firstName,
            lastName: this.props.address[1].lastName,
            streetAdr: this.props.address[1].streetAdr,
            city: this.props.address[1].city,
            usState: this.props.address[1].usState,
            zip: this.props.address[1].zip,
            phone: this.props.address[1].phone

        })
    };

    render() {
        return (
            <div className="App">

                <p className="App-intro">
                    First Name: {this.state.firstName}
                </p>

                <p className="App-intro">
                    Last Name: {this.state.lastName}
                </p>
                <p className="App-intro">
                    Street address: {this.state.streetAdr}
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


                <button onClick={this.setAddress} className="setAdr">Set Address</button>
            </div>
        );
    }
}

export default Address;
