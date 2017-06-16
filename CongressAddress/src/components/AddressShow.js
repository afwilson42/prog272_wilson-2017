/* AddressShow Show component file for CongressAddress
 Created by Andrew Wilson on 04/17/2017
 Updated by Andrew Wilson on 04/23/2017
 -- added props for initial state and setting state button
 -- added full address information for senator             ...*/

import React, {Component} from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import '../css/App.css';
import './Address';

class AddressShow extends Component {
    constructor(props) {
        super(props);
        this.quiet = true;
        this.log('CONSTRUCTOR', this.props.address);

    }// end constructor

    log(message, message2 = '', message3 = '') {

        if (!this.quiet) {
            const label = this.constructor.name + ': ';
            console.log(label, message, message2, message3);
        }
    }// end log

    render() {

        const buttons = (
            <div>
                <ButtonToolbar/>
                <Button
                    bsStyle='success'
                    id='firstShowAddress'
                    className='firstAdr'
                    onClick={this.props.onFirstAddress}>First Address
                </Button>

                <Button
                    bsStyle='success'
                    id='prevShowAddress'
                    className='prevAdr'
                    onClick={this.props.addressButtonClick}>Previous Address
                </Button>

                <Button
                    bsStyle='success'
                    id='nextShowAddress'
                    className='nextAdr'
                    onClick={this.props.addressButtonClick}>Next Address
                </Button>

                <Button
                    bsStyle='success'
                    id='lastShowAddress'
                    className='lastAdr'
                    onClick={this.props.onLastAddress}>Last Address
                </Button>

            </div>
        );

        const controls = (
            <div id='addressShowRow' className='col-sm-12'>

                <hr />

                <p className='App-intro'>
                    First Name: {this.props.address.firstName}
                </p>

                <p className='App-intro'>
                    Last Name: {this.props.address.lastName}
                </p>
                <p className='App-intro'>
                    Street Address: {this.props.address.street}
                </p>
                <p className='App-intro'>
                    City & District: {this.props.address.city}
                </p>
                <p className='App-intro'>
                    State Represented: {this.props.address.state}
                </p>
                <p className='App-intro'>
                    Zip Code: {this.props.address.zip}
                </p>
                <p className='App-intro'>
                    Phone Number: {this.props.address.phone}
                </p>

                <p className='App-intro'>
                    Web Address: {this.props.address.web}
                </p>

                <hr />
                {buttons}
            </div>
        );

        this.log('SHOW ADDRESS RENDER');

        return (
            <form className='navbar-form' action=''>
                <div id='addressShowRender' className='row'>
                    {controls}
                </div>
            </form>

        );
        /*return (
            <div id='addressShowRender' className='App'>

                <p className='App-intro'>
                    First Name: {this.props.address.firstName}
                </p>
                <p className='App-intro'>
                    Last Name: {this.props.address.lastName}
                </p>

                <p className='App-intro'>
                    Street Address: {this.props.address.street}
                </p>
                <p className='App-intro'>
                    City & District: {this.props.address.city}
                </p>
                <p className='App-intro'>
                    State Represented: {this.props.address.state}
                </p>
                <p className='App-intro'>
                    Zip Code: {this.props.address.zip}
                </p>
                <p className='App-intro'>
                    Phone Number: {this.props.address.phone}
                </p>

                <p className='App-intro'>
                    Web Address: {this.props.address.web}
                </p>
                <button id='firstShowAddress' onClick={this.props.onFirstAddress} className='firstAdr'>First Address</button>
                <button id='prevShowAddress' onClick={this.props.addressButtonClick} className='prevAdr'>Previous Address</button>
                <button id='nextShowAddress' onClick={this.props.addressButtonClick} className='nextAdr'>Next Address</button>
                <button id='lastShowAddress'onClick={this.props.onLastAddress} className='lastAdr'>Last Address</button>
                <br/>
                <br/>
            </div>
        ); // end return */

    }// end render

}// end class AddressShow

export default AddressShow;
