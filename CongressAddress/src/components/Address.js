/* Address component file for CongressAddress
Created by Andrew Wilson on 04/17/2017
Updated by Andrew Wilson on 04/23/2017
-- added props for initial state and setting state button
-- added full address information for senator             ...*/

import React, { Component } from 'react';
import '../css/App.css';



class Address extends Component {
    constructor(props){
        super(props);

        // console.log('TEST PROPS' , props);
        // console.log(this.props.addressList[1]);


        // initialize the state to items in addressList index 0
        this.state = {
            firstName: this.props.addressList[0].firstName,
            lastName: this.props.addressList[0].lastName,
            streetAdr: this.props.addressList[0].streetAdr,
            city: this.props.addressList[0].city,
            usState: this.props.addressList[0].usState,
            zip:this.props.addressList[0].zip,
            phone: this.props.addressList[0].phone,
            web: this.props.addressList[0].web
        }
    }

    // set address button function
    setAddress = () => {

        // set the state to items in addressList index 1
        this.setState({


            firstName: this.props.addressList[1].firstName,
            lastName: this.props.addressList[1].lastName,
            streetAdr: this.props.addressList[1].streetAdr,
            city: this.props.addressList[1].city,
            usState: this.props.addressList[1].usState,
            zip:this.props.addressList[1].zip,
            phone: this.props.addressList[1].phone,
            web: this.props.addressList[1].web
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

                <p className="App-intro">
                    Web Address: {this.state.web}
                </p>

                <button onClick={this.setAddress} className="setAdr">Set Address</button>
            </div>
        );
    }
}

export default Address;