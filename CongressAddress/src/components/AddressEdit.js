/**
 * Created by bcuser on 5/1/17.
 */
/* AddressShow Show component file for CongressAddress
 Created by Andrew Wilson on 04/17/2017
 Updated by Andrew Wilson on 04/23/2017
 -- added props for initial state and setting state button
 -- added full address information for senator             ...*/

import React, {Component} from 'react';
import '../css/App.css';


class AddressEdit extends Component {


    render() {
        // this.log("SHOW ADDRESS RENDER");
        return (
            <div id="addressShowRender" className="App">
                <br/>
                <br/>

                <input id="firstName"
                       className="App-intro"
                       value={this.props.address.firstName}
                       onChange={this.props.onNameChange}/>
                <br/>

                <input id="lastName"
                       className="App-intro"
                        value={this.props.address.lastName}
                        onChange={this.props.onNameChange}/>

                <br/>
                <input id="streetAdr"
                       className="App-intro"
                       value={this.props.address.streetAdr}
                       onChange={this.props.onNameChange}/>
                <br/>
                <input id="city"
                       className="App-intro"
                       value={this.props.address.city}
                       onChange={this.props.onNameChange}/>
                <br/>
                <input id="usState"
                       className="App-intro"
                       value={this.props.address.usState}
                       onChange={this.props.onNameChange}/>
                <br/>
                <input id="zip"
                       className="App-intro"
                       value={this.props.address.zip}
                       onChange={this.props.onNameChange}/>
                <br/>
                <input id="phone"
                       className="App-intro"
                       value={this.props.address.phone}
                       onChange={this.props.onNameChange}/>
                <br/>
                <input id="web"
                       className="App-intro"
                       value={this.props.address.web}
                       onChange={this.props.onNameChange}/>
                <br/>
                <br/>
                <button id="getAddress" onClick={this.props.onSetAddress} className="setAdr">Set Next Address</button>
                <br/>
                <br/>

            </div>
        );
    }
}// end class AddressShow

export default AddressEdit;
