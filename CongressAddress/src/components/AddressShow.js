/* AddressShow Show component file for CongressAddress
Created by Andrew Wilson on 04/17/2017
Updated by Andrew Wilson on 04/23/2017
-- added props for initial state and setting state button
-- added full address information for senator             ...*/

import React, { Component } from 'react';
import '../css/App.css';



class AddressShow extends Component {
    constructor(props){
        super(props);

        // console.log('TEST PROPS' , props);
        // console.log(this.props.AddressShowList[1]);


        // initialize the state to items in addressList index 0

    }

    // set AddressShow button function
    //setAddress = () => {

        // set the state to items in addressList index 1
        //this.setState({


            //firstName: this.props.AddressShowList[1].firstName,
            //lastName: this.props.AddressShowList[1].lastName,
           // streetAdr: this.props.AddressShowList[1].streetAdr,
            //city: this.props.AddressShowList[1].city,
           // usState: this.props.AddressShowList[1].usState,
            //zip:this.props.AddressShowList[1].zip,
            //phone: this.props.AddressShowList[1].phone,
            //web: this.props.addressList[1].web
        // })
   // };

    render() {
        return (
            <div className="App">

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

                <button onClick={this.setAddress} className="setAdr">Set Address</button>
            </div>
        );
    }
}

export default AddressShow;