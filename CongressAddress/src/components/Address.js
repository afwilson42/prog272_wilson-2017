/**
 * Address component file for CongressAddress
 *Created by Andrew Wilson on 04/17/2017
 *Updated by Andrew Wilson on 04/23/2017
 *-- added props for initial state and setting state button
 *-- added full address information for senator
 */

import React, { Component } from 'react';
import '../css/App.css';
import AddressShow from './AddressShow';
import {getByIndex} from '../assets/local-storage.js';
import 'whatwg-fetch';
import Logger from '../assets/ElfLogger.js';
import DataLoader from '../assets/DataLoader';
const dataLoader = new DataLoader();
const detailLogger = new Logger('data-loader', 'yellow', 'green', '18px');
let addressLength = 0;

// TODO: rename to avoid collisions
class Address extends Component {
    constructor(){
        super();
        this.quiet = true;

        const that = this;
        dataLoader.loadAddresses(function(addressCount) {
            if (!addressCount) {
                throw new Error('Cannot get address count in address.js');
            }
            that.addressCount = addressCount;
            addressLength = addressCount - 1;
        });

        // initialize the state to items in addressList index 0
        this.addressIndex = 0;

        //


        this.state = {

            address: {
                "firstName": "Lamar",
                "lastName": "Alexander",
                "street": "455 Dirksen Senate Office Building",
                "city": "Washington DC",
                "state": "TN",
                "zip": " 20510",
                "phone": "202-224-4944",
                "website": "https://www.alexander.senate.gov/public",
                "email": "",
                "contact": "http://www.alexander.senate.gov/public/index.cfm?p=Email"
            }
        };

        this.firstAddress = this.firstAddress.bind(this);
        this.nextAddress = this.nextAddress.bind(this);
        this.prevAddress = this.prevAddress.bind(this);
        this.lastAddress = this.lastAddress.bind(this);

    }// end constructor

    // first address button function
    firstAddress(event){
        this.addressIndex = 0;
        console.log(this.addressIndex);
        const address = getByIndex(this.addressIndex);

        this.setState({
            address: address
        })
    };//first function setAddress

    // set address button function
    nextAddress(event) {
        let lastIndex = addressLength;
        if(lastIndex===this.addressIndex){
            this.addressIndex=lastIndex;
        }
        else{
            this.addressIndex += 1;
        }

        const address = getByIndex(this.addressIndex);

        this.setState({
            address: address
        })
    };//end function setAddress

    prevAddress(event) {
        if(this.addressIndex === 0){
            // do nothing
        }
        else{
            this.addressIndex -= 1;
        }

        console.log(this.addressIndex);
        const address = getByIndex(this.addressIndex);

        this.setState({
            address: address
        })
    };//end function setAddress

    lastAddress(event) {

        this.addressIndex = addressLength;

        const address = getByIndex(this.addressIndex);

        this.setState({
            address: address
        })
    };//end function lastAddress

    onAddressChange = (event) => {
        //this.log("ON NAME CHANGE");
        /*const address = addresses[this.addressIndex];
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
        }*/

        detailLogger.log('onAddressChange called with', event.target.id);
        if (event.target.id.startsWith('dec')) {
            if (this.addressIndex > 0) {
                this.addressIndex -= 1;
            }
        } else {
            if (this.addressIndex < this.addressCount) {
                this.addressIndex += 1;
            }
        }
        detailLogger.log('addressIndex', this.addressIndex);
        const address = getByIndex(this.addressIndex);


        this.setState({
            address: address
        })
    };// end onNameChange

    render() {

        return (
            <div className="App">
                <AddressShow
                    address={this.state.address}
                    onFirstAddress={this.firstAddress}
                    onNextAddress={this.nextAddress}
                    onPrevAddress={this.prevAddress}
                    onLastAddress={this.lastAddress}
                />

            </div>
        );
    }
}

export default Address;