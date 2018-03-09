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
  View, Dimensions,
  Picker, TouchableOpacity
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment'

 var width = Dimensions.get('window').width;

export default class screen2 extends Component<{}> {
constructor(props) {
  super(props);

  this.state = {
    isVisible: false,
    chosenDate: ''
  };
}


handlePicker=(datetime)=>{

  this.setState({
    isVisible:false,
    chosenDate: moment(datetime).format('HH:mm')
  })
}

showPicker=()=>{
   this.setState({
    isVisible:true
  })
}

hidePicker=()=>{
  this.setState({
    isVisible:false
  })
}

render() {
return(

   <View>
   <Text style={{color: 'red', fontSize: 20}}>
    {this.state.chosenDate}
   </Text>
   <TouchableOpacity style={styles.button} onPress={this.showPicker}>
          <Text style={ styles.text }>Выбрать время</Text>
        </TouchableOpacity>
   <DateTimePicker
   isVisible={this.state.isVisible}
   onConfirm={this.handlePicker}
   onCancel={this.hidePicker}
   mode={'time'}
   />

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
    width: width,
    fontSize: 20,
    textAlign: 'center',
    margin: 2,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center'
  }
});
