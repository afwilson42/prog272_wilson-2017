/* Address component file for CongressAddress
Created by Andrew Wilson on 04/17/2017
Updated by Andrew Wilson on 04/23/2017
-- added props for initial state and setting state button
-- added full address information for senator             ...*/

import React, { Component } from 'react';
import '../css/App.css';
import addresses from '../address-list';
import AddressShow from './AddressShow';
import {saveToLocalStorage, saveToLocalStorageByName,
    getLocalStorage, clearLocalStorage} from "../assets/local-storage";


// TODO: rename to avoid collisions
class Address extends Component {
    constructor(){
        super();
        this.quiet = true;

        // initialize the state to items in addressList index 0
        this.addressIndex = 0;

        /*const address = addresses[this.addressIndex];
        addressess.forEach(function(address){
            saveToLocalStorage(address);
        });// end function, end Address iteration */

        this.state = {

            address: addresses[this.addressIndex]
        }

        this.setAddress = this.setAddress.bind(this);
    }// end constructor

    // set address button function
    setAddress(event) {
        //console.log("SET ADDRESS in ADDRESS CALLED");
        this.addressIndex += 1;
        const address = addresses[this.addressIndex];

        this.setState({
            address: address
        })
    };//end function setAddress

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
                <AddressShow
                    address={this.state.address}
                    onSetAddress={this.setAddress}

                />

            </div>
        );
    }
}

export default Address;