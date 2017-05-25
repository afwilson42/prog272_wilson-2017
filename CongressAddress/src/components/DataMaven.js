/**
 * Created by bcuser on 5/17/17.
 */

import React, {Component} from 'react';

import Address from './Address';
import AddressEdit from './AddressEdit';
import SmallNumbers from './SmallNumbers';
import AddressMenu from './AddressMenu';
import ElfHeader from './ElfHeader';
import {getByIndex, saveByIndex} from '../assets/local-storage.js';
import DataLoader from '../assets/DataLoader';
import Logger from '../assets/ElfLogger.js';
import {
    Route
} from 'react-router-dom';
const dataLoader = new DataLoader();
const detailLogger = new Logger('data-loader', 'yellow', 'green', '18px');
let addressLength = 0;

class DataMaven extends Component {
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
        that.addressIndex = 0;

        var startAddress = getByIndex(that.addressIndex);

        that.state = {

            address: startAddress

        };

        this.firstAddress = this.firstAddress.bind(this);
        this.lastAddress = this.lastAddress.bind(this);
        this.onAddressButtonClick = this.onAddressButtonClick.bind(this);
        this.onAddressFieldChange = this.onAddressFieldChange.bind(this);
    }// end constructor

    // first address button function
    firstAddress(event) {
        this.addressIndex = 0;

        const beginningAddress = getByIndex(this.addressIndex);

        this.setState({
            address: beginningAddress
        });
    };//first function setAddress

    onAddressButtonClick(event) {
        detailLogger.log('onAddressChange called with', event.target.id);
        //console.log(this.addressIndex);
        if (event.target.id.startsWith('prev')) {
            if (this.addressIndex > 0) {
                this.addressIndex -= 1;
                //console.log(this.addressIndex);
            }

        } else {
            if (this.addressIndex < this.addressCount - 1) {
                this.addressIndex += 1;
                //console.log(this.addressIndex);
            }

        }

        detailLogger.log('addressIndex', this.addressIndex);
        const address = getByIndex(this.addressIndex);

        this.setState({
            address: address
        });
    };

    lastAddress(event) {

        this.addressIndex = addressLength;

        const finalAddress = getByIndex(this.addressIndex);
        //console.log(this.addressIndex);
        //console.log(finalAddress);

        this.setState({
            address: finalAddress
        });
    };//end function lastAddress

    onAddressFieldChange(event) {
        const updateAddressField = getByIndex(this.addressIndex);
        //console.log(event.target.value);
        //console.log(this.addressIndex);
        //console.log(getByIndex(this.addressIndex));
        console.log(updateAddressField);
        switch (event.target.id) {
            case 'firstName':
                updateAddressField.firstName = event.target.value;
                saveByIndex(updateAddressField, this.addressIndex);
                break;
            case 'lastName':
                updateAddressField.lastName = event.target.value;
                saveByIndex(updateAddressField, this.addressIndex);
                break;

            case 'street':
                updateAddressField.streetAdr = event.target.value;
                saveByIndex(updateAddressField, this.addressIndex);
                break;

            case 'city':
                updateAddressField.city = event.target.value;
                saveByIndex(updateAddressField, this.addressIndex);
                break;

            case 'state':
                updateAddressField.state = event.target.value;
                saveByIndex(updateAddressField, this.addressIndex);
                break;

            case 'zip':
                updateAddressField.zip = event.target.value;
                saveByIndex(updateAddressField, this.addressIndex);
                break;

            case 'phone':
                updateAddressField.phone = event.target.value;
                saveByIndex(updateAddressField, this.addressIndex);
                break;

            case 'web':
                updateAddressField.web = event.target.value;
                saveByIndex(updateAddressField, this.addressIndex);
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

            <div>
                <ElfHeader/>
                <AddressMenu/>
                <div>
                    <Route exact path='/' component={Address}/>
                    <Route path='/edit' render={(props) => (
                        <AddressEdit {...props}
                                     address={this.state.address}
                                     onAddressFieldChange={this.onAddressFieldChange}
                                     onFirstAddress={this.firstAddress}
                                     addressButtonClick={this.onAddressButtonClick}
                                     onLastAddress={this.lastAddress}
                        />
                    )}/>
                    <Route path='/small' component={SmallNumbers}/>
                </div>
            </div>
        );
    }
}

export default DataMaven;

