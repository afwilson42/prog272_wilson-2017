/* Address component file for CongressAddress
Created by Andrew Wilson on 04/17/2017
Updated by Andrew Wilson on 04/23/2017
-- added props for initial state and setting state button
-- added full address information for senator             ...*/

import React, { Component } from 'react';
import '../css/App.css';
import AddressEdit from './AddressEdit';
import Address from './Address';


class AddressChanger extends Address {


    render() {

        if (!this.quiet) { console.log('ADDRESS RENDER'); }
        return (

            <div className='App'>
                <AddressEdit
                    address={this.state.address}
                    onSetAddress={this.setAddress}
                    onNameChange={this.onNameChange}
                />

            </div>
        );// end return
    }// end render
}// end class

export default AddressChanger;