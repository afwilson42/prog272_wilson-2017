/* Address component file for CongressAddress
Created by Andrew Wilson on 04/17/2017
Updated by Andrew Wilson on 04/23/2017
-- added props for initial state and setting state button
-- added full address information for senator             ...*/

import React, { Component } from 'react';
import '../css/App.css';
import addresses from '../address-list';
import AddressShow from './AddressShow';

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

    render() {


        return (
            <div className="App">
                <AddressShow address={this.state.address}
                onSetAddress={this.setAddress}/>
            </div>
        );
    }
}

export default Address;