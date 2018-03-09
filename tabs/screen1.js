/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Button,Image, Dimensions
} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;


export default class screen1 extends Component<{}> {
constructor(props) {
  super(props);
this.uri = "http://meteopost.com/load/anim24/20180308.2030.jpg";
  this.state = {};
}
  render() {

    return (
      <View style={styles.container}>
        <Image resizeMode="stretch" source={{uri: this.uri}} style={styles.canvas}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  canvas: {
  position: 'absolute',
  width: '100%',
  height: '100%'
},
});
