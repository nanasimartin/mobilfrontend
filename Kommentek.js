import React, { Component } from 'react';
import { StyleSheet,Text, TextInput, View,TouchableOpacity, FlatList, RefreshControl  } from 'react-native';
import Felvitelkomm from './Felvitelkomm';

const IP = require('./ipcim.js');

//const ipcim="172.16.0.110";

export default class Komment extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nev: '',
        komment:"",

        dataSource:[]

    };
  }
  
  componentDidMount(){
    return fetch('http://'+IP.ipcim+'/tema')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
      });

  }




  ujratoltes=()=>{
    //alert(szam)
    this.setState({})

    return fetch('http://'+IP.ipcim+'/tema')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
      });

  }




 
  render() {
    return (
<View style={{backgroundColor:'#F5F5DC'}}>
        <View style={{marginTop:25,borderColor:'black',borderStyle:'dotted', borderWidth:2}}>

<Felvitelkomm tema_bevitel={this.state.tema}  frissit={()=>this.ujratoltes()}  />

        <Text style={{fontSize:30, textAlign:'center', marginTop:25, }}>Megjegyzések</Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
      
          <View style={{backgroundColor:'lightgreen', borderRadius:15, margin:10,}}>

          <Text style={{color:"black",fontSize:18,marginTop:5, marginLeft:10}}>
          {item.uzenet_nev} </Text>
          <Text style={{color:"black",fontSize:20, marginLeft:10}}>
          {item.uzenet_szoveg} </Text>
          <Text style={{color:"black",fontSize:12, marginRight:10, marginBottom:5, textAlign:'right'}}>
          {item.uzenet_datum} </Text>
     
   
          </View>
       
        }
    
          keyExtractor={({uzenet_id}, index) => uzenet_id}
        />
    </View>
    </View>
  
    );
  }
}

const styles = StyleSheet.create({
    gombSzoveg:{
            textAlign:'center',
            color:'white',
            marginTop:'auto',
            marginBottom:'auto',
            fontSize:16
    },
    gomb:{
            height:25,
            backgroundColor:'blue',
            width:'25%',
            borderRadius:10
    },
});