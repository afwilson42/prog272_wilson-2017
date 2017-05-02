/* AddressShow Show component file for CongressAddress
 Created by Andrew Wilson on 04/17/2017
 Updated by Andrew Wilson on 04/23/2017
 -- added props for initial state and setting state button
 -- added full address information for senator             ...*/

import React, {Component} from 'react';
import '../css/App.css';


class AddressShow extends Component {
    constructor(props) {
        super(props);
        this.quiet = true;
        this.log('CONSTRUCTOR', this.props.address);
        /*console.log('TEST PROPS' , props);
        if (!this.props.address)
        {
            throw new Error("No props in Addresses");
        }

        this.log(props); */

    }// end constructor


    log(message, message2 = '', message3 = '') {

        if (!this.quiet) {
            const label = this.constructor.name + ': ';
            console.log(label, message, message2, message3);
        }
    }// end log



    render() {
        this.log("SHOW ADDRESS RENDER");
        return (
            <div id="addressShowRender" className="App">

                <p className="App-intro">
                    First Name: {this.props.address.firstName}
                </p>

                <p className="App-intro">
                    Last Name: {this.props.address.lastName}
                </p>

                <p className="App-intro">
                    Street Address: {this.props.address.streetAdr}
                </p>
                <p className="App-intro">
                    City: {this.props.address.city}
                </p>
                <p className="App-intro">
                    State: {this.props.address.usState}
                </p>
                <p className="App-intro">
                    Zip Code: {this.props.address.zip}
                </p>
                <p className="App-intro">
                    Phone Number: {this.props.address.phone}
                </p>

                <p className="App-intro">
                    Web Address: {this.props.address.web}
                </p>

                <button id="getAddress" onClick={this.props.onSetAddress} className="setAdr">Set Address</button>
                <br/>
                <br/>
            </div>
        );
    }
}// end class AddressShow

export default AddressShow;