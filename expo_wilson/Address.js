/**
 * by Charlie Calvert
 */

import React, {Component} from 'react';
import {
    Alert,
    Button,
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foo: 'Default data',
            firstName: 'Andrew',
            lastName: 'Wilson'
        };
        // NOT USED NOW, BUT YOU MIGHT FIND IT HANDY LATER
        this.collection = [];
        this.fetchAddress = this.fetchAddress.bind(this);
    }

    fetchAddress(event) {
        this.setState({foo:'Retrieved data'});
        const that = this;
        //const ip = '168.156.47.131';
        const url = 'http://168.156.47.126:30025/all-data';
        fetch(url)
            .then((response) => response.json())
    .then(function(result) {
            this.collection = result.allData;
            that.setState({
                firstName: result.allData[0].firstName,
                lastName: result.allData[0].lastName
            });
        }).catch(function(ex) {
            that.setState({foo: 'Update Failed'});
        });
        if (event) {
            event.preventDefault();
        }
    };

    render() {
        console.log('tst');

        return (
            <View>
                <Text style={styles.instructions}>
                    {this.state.foo}
                </Text>

                <Text style={stylesNames.instructions}>First Name:
                    {this.state.firstName}
                </Text>
                <Text style={stylesNames.instructions}>Last Name:
                    {this.state.lastName}
                </Text>
                <Button
                    onPress={this.fetchAddress}
                    title="Get Data"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                    />
                </View>
    );
    }
}

const styles = StyleSheet.create({
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

});

const stylesNames = StyleSheet.create({
    instructions: {
        color: '#335BFF'
    }
});



AppRegistry.registerComponent('Address', () => Address);