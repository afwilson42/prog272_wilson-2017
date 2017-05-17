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
import {saveToLocalStorage, clearLocalStorage} from '../assets/local-storage.js';
import 'whatwg-fetch';
//import Logger from '../assets/AppLogger';

let addresses =[];
// TODO: rename to avoid collisions
class Address extends Component {
    constructor(){
        super();
        this.quiet = true;

        // initialize the state to items in addressList index 0
        this.addressIndex = 0;

        //
        this.loadAddresses();

        this.state = {

            address: []//addresses[this.addressIndex]
        }

        this.firstAddress = this.firstAddress.bind(this);
        this.nextAddress = this.nextAddress.bind(this);
        this.prevAddress = this.prevAddress.bind(this);
        this.lastAddress = this.lastAddress.bind(this);

        //const logger = new AppLogger();


    }// end constructor

    loadAddresses = function()
    {
        const that = this;

        fetch('address-list.json').then(function(data) {

            const myData = data.json();
            console.log(myData);
            return myData;

        }).then(function (data) {
            console.log(JSON.stringify(data, null, 4));
            addresses = data;

            // empty LocalStorage
            clearLocalStorage();
            // iterate and insert entries into localStorage
            data.forEach(function(address){
                saveToLocalStorage(address);
            });// end function, end Address iteration
        }).catch(function (err) {
            //logger.log(err);
        })
    }// end loadAddresses */

    // first address button function
    firstAddress(event){
        this.addressIndex = 0;
        console.log(this.addressIndex);
        const address = addresses[this.addressIndex];

        this.setState({
            address: address
        })
    };//first function setAddress

    // set address button function
    nextAddress(event) {
        let lastIndex = addresses.length -1;
        if(lastIndex===this.addressIndex){
            this.addressIndex=lastIndex;
        }
        else{
            this.addressIndex += 1;
        }

        const address = addresses[this.addressIndex];

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
        const address = addresses[this.addressIndex];

        this.setState({
            address: address
        })
    };//end function setAddress

    lastAddress(event) {

        this.addressIndex = addresses.length -1;

        const address = addresses[this.addressIndex];

        this.setState({
            address: address
        })
    };//end function lastAddress

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