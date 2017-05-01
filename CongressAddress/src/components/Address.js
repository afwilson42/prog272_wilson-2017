/* Address component file for CongressAddress
Created by Andrew Wilson on 04/17/2017
Updated by Andrew Wilson on 04/23/2017
-- added props for initial state and setting state button
-- added full address information for senator             ...*/

import React, { Component } from 'react';
import '../css/App.css';
import addresses from '../address-list';
import AddressShow from './AddressShow';
import AddressEdit from './AddressEdit';

class Address extends Component {
    constructor(){
        super();
        this.quiet = true;


        // initialize the state to items in addressList index 0
        this.addressIndex = 0;
        this.state = {

            address: addresses[this.addressIndex]
        }
    }// end constructor



    // set address button function
    setAddress = () => {

        // set the state to items in addressList index 1
        this.addressIndex=1;
        const address = addresses[this.addressIndex];
        this.setState({

            address: address
        })
    };

    onNameChange = (event) => {
        //this.log("ON NAME CHANGE");
        const address = addresses[this.addressIndex];
        switch (event.target.id) {
            case 'firstName':
                address.firstName = event.target.value;
                break;
            case 'lastName':
                address.lastName = event.target.value;
                break;

            case 'streetAdr':
                address.streetAdr = event.target.value;
                break;

            case 'city':
                address.city = event.target.value;
                break;

            case 'usState':
                address.usState = event.target.value;
                break;

            case 'zipcode':
                address.zip = event.target.value;
                break;

            case 'phone':
                address.phone = event.target.value;
                break;

            case 'web':
                address.web = event.target.value;
                break;

            default:
                throw new Error('OH NO BAD CASE in Address onNameChange');
        }
        this.setState({
            address: address
        })
    };


    render() {


        return (
            <div className="App">
                <AddressEdit
                address={this.state.address}
                onSetAddress={this.setAddress}
                onNameChange={this.onNameChange}

                />
                <AddressShow address={this.state.address}
                onSetAddress={this.setAddress}
                />

            </div>
        );
    }
}

export default Address;