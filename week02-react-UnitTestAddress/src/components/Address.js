/* Created by Andrew Wilson on 04/17/2017 ...*/

import React, { Component } from 'react';
import '../App.css';


class Address extends Component {
    constructor(props){
        super(props);
        console.log('TEST PROPS' , props);

        this.state = {
            firstName: this.props.address[0].firstName,
            lastName: this.props.address[0].lastName,
            streetAdr: "",
            city: "",
            state:"",
            zip:"",
            phone: ""
        }
    }

    setAddress = () => {
        this.setState({
            firstName: 'Carly',
            lastName: 'bar',
            streetAdr: 'PO Box 40600',
            city: 'Olympia',
            usState:'WA',
            zip: '98504-0600',
            phone: '(360) 786-7848'

        })
    };

    render() {
        return (
            <div className="App">

                <p className="App-intro">
                    First Name: {this.state.firstName}
                </p>

                <p className="App-intro">
                    Last Name: {this.state.lastName}
                </p>


                <button onClick={this.setAddress} className="setAdr">Set Address</button>
            </div>
        );
    }
}

export default Address;