import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import Address from './Address';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Wilson on Prog 272 Expo</Text>

        <Address/>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
