
/* AddressEdit Show component file for CongressAddress
 Created by Andrew Wilson on ?
 Updated by Andrew Wilson on 05/03/2017
 -- provides input textboxes for AddressEdit screen
 -- button name changed to next address            ...*/

import React, {Component} from 'react';
import '../css/App.css';
import './Address';

class AddressEdit extends Component {
    render() {
        // this.log('SHOW ADDRESS RENDER');
        return (
            <div id='addressEditRender' className='App'>
                <br/>
                <br/>

                <input id='firstName'
                       className='App-intro'
                       value={this.props.address.firstName}
                       onChange={this.props.onNameChange}/>
                <br/>

                <input id='lastName'
                       className='App-intro'
                        value={this.props.address.lastName}
                        onChange={this.props.onNameChange}/>

                <br/>
                <input id='streetAdr'
                       className='App-intro'
                       value={this.props.address.streetAdr}
                       onChange={this.props.onNameChange}/>
                <br/>
                <input id='city'
                       className='App-intro'
                       value={this.props.address.city}
                       onChange={this.props.onNameChange}/>
                <br/>
                <input id='usState'
                       className='App-intro'
                       value={this.props.address.usState}
                       onChange={this.props.onNameChange}/>
                <br/>
                <input id='zip'
                       className='App-intro'
                       value={this.props.address.zip}
                       onChange={this.props.onNameChange}/>
                <br/>
                <input id='phone'
                       className='App-intro'
                       value={this.props.address.phone}
                       onChange={this.props.onNameChange}/>
                <br/>
                <input id='web'
                       className='App-intro'
                       value={this.props.address.web}
                       onChange={this.props.onNameChange}/>
                <br/>
                <br/>
                <button id='getAddress' onClick={this.props.onSetAddress} className='setAdr'>Next Address</button><br/>
                <br/>

            </div>
        );// end return
    }// end render
}// end class AddressEdit

export default AddressEdit;
