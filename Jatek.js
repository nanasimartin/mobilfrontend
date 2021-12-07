import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class Kviz extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        

        <Text style={{padding: 10, fontSize: 42, textAlign:"center"}}>
         Play
        </Text>
        <Text style={{padding: 10, fontSize: 35, textAlign:"center"}}>
         Rules
        </Text>
        
      </View>
    );
  }
}