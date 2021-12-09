import React, { Component } from 'react';
import { Text, TextInput, View,  ImageBackground, TouchableOpacity } from 'react-native';



export default class Kviz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      szabaly(){
        alert('asdsads');
      }
    };
   }
    
  gomb=()=>{
      
  }
 

   

  render() {
    return (
     
    <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
  <View>    
    <TouchableOpacity style={{backgroundColor:"grey",width:150,margin:10,borderRadius:10, alignItems:'center'}}
        onPress={this.jatekgomb}>

        <Text style={{color:"white",fontSize:20,textAlign:"center",marginTop:15,marginBottom:15}}>Játék</Text>
      </TouchableOpacity>
      
      </View>
     
      <TouchableOpacity style={{backgroundColor:"grey",width:150,margin:10,borderRadius:10, alignItems:'center'}}
        onPress={this.szabaly}>
        <Text style={{color:"white",fontSize:20,textAlign:"center",marginTop:15,marginBottom:15}}>A játék menete</Text>
      </TouchableOpacity>
      
    </View>
      
    );
  }
  }
