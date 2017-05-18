/**
 * Created by bcuser on 5/17/17.
 */

import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Address from './Address';

class DataMaven extends Component {

    render() {
        return (
            <Router>
                <Route exact path='/' component={Address}/>
            </Router>
        );
    }
}

export default DataMaven;
