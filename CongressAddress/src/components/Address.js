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
import {getByIndex, saveByIndex} from '../assets/local-storage.js';
import 'whatwg-fetch';
//import Logger from '../assets/ElfLogger.js';
import DataLoader from '../assets/DataLoader';
const dataLoader = new DataLoader();
//const detailLogger = new Logger('data-loader', 'yellow', 'green', '18px');
let addressLength = 0;

// TODO: rename to avoid collisions
class Address extends Component {
    constructor() {
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

        this.state = {

            address: {
                'firstName': 'Lamar',
                'lastName': 'Alexander',
                'street': '455 Dirksen Senate Office Building',
                'city': 'Washington DC',
                'state': 'TN',
                'zip':  '20510',
                'phone': '202-224-4944',
                'website': 'https://www.alexander.senate.gov/public'
            }
        };
        this.onAddressChange = this.onAddressChange.bind(this);
        this.firstAddress = this.firstAddress.bind(this);
        this.nextAddress = this.nextAddress.bind(this);
        this.prevAddress = this.prevAddress.bind(this);
        this.lastAddress = this.lastAddress.bind(this);

    }// end constructor

    // first address button function
    firstAddress(event) {
        this.addressIndex = 0;

        const beginningAddress = getByIndex(this.addressIndex);

        this.setState({
            address: beginningAddress
        });
    };//first function setAddress

    // set address button function
    nextAddress(event) {
        let lastIndex = addressLength;

        if (lastIndex === this.addressIndex) {
            this.addressIndex = lastIndex;
        }        else {
            this.addressIndex += 1;
        }

        const followingAddress = getByIndex(this.addressIndex);

        this.setState({
            address: followingAddress
        });
    };//end function setAddress

    prevAddress(event) {
        if (this.addressIndex === 0) {
            // do nothing
        }        else {
            this.addressIndex -= 1;
        }

        const priorAddress = getByIndex(this.addressIndex);

        this.setState({
            address: priorAddress
        });
    };//end function setAddress

    lastAddress(event) {

        this.addressIndex = addressLength;

        const finalAddress = getByIndex(this.addressIndex);
        console.log(finalAddress);

        this.setState({
            address: finalAddress
        });
    };//end function lastAddress

    onAddressChange (event) {
        const updateAddressField = getByIndex[this.addressIndex];
        console.log(event.target.value);
        console.log(this.addressIndex);
        console.log(getByIndex[this.addressIndex]);
        console.log(updateAddressField);
        switch (event.target.id) {
            case 'firstName':
                updateAddressField.firstName = event.target.value;
                saveByIndex(updateAddressField.firstName, this.addressIndex);
                break;
            case 'lastName':
                updateAddressField.lastName = event.target.value;
                saveByIndex(updateAddressField.lastName, this.addressIndex);
                break;

            case 'streetAdr':
                updateAddressField.streetAdr = event.target.value;
                saveByIndex(updateAddressField.streetAdr, this.addressIndex);
                break;

            case 'city':
                updateAddressField.city = event.target.value;
                saveByIndex(updateAddressField.city, this.addressIndex);
                break;

            case 'usState':
                updateAddressField.usState = event.target.value;
                saveByIndex(updateAddressField.usState, this.addressIndex);
                break;

            case 'zipcode':
                updateAddressField.zip = event.target.value;
                saveByIndex(updateAddressField.zip, this.addressIndex);
                break;

            case 'phone':
                updateAddressField.phone = event.target.value;
                saveByIndex(updateAddressField.phone, this.addressIndex);
                break;

            case 'web':
                updateAddressField.web = event.target.value;
                saveByIndex(updateAddressField.web, this.addressIndex);
                break;

            default:
                throw new Error('OH NO BAD CASE in Address onNameChange');
        }// end switch

        this.setState({
            address: updateAddressField
        });// end setState

    };// end onAddressChange

    render() {

        return (
            <div className='App'>
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
