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

        // console.log('TEST PROPS' , props);
        // console.log(this.props.addressList[1]);


        // initialize the state to items in addressList index 0
        const index = 0;
        this.state = {

            address: addresses[index]
        }
    }

    // set address button function
    /*setAddress = () => {

        // set the state to items in addressList index 1
        const index=1;
        this.setState({

            address: addresses[index]
        })
    }; */

    render() {
        return (
            <div className="App">
                <AddressShow address={this.state.address}/>
            </div>
        );
    }
}

export default Address;