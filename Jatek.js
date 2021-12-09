import React, { Component } from 'react';
import { Text, TextInput, View, Image, ImageBackground, StyleSheet, ActivityIndicator, FlatList } from 'react-native';




export default class Jatek extends Component {
  constructor(props) {
    super(props);
    this.state ={
      isLoading: true,
      dataSource:[]

  }

}


componentDidMount(){
  return fetch('http://172.16.0.195:3000/foci')
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


 
  

render(){

  if(this.state.isLoading){
    return(
      <View style={{flex: 1, padding: 20}}>
        <ActivityIndicator/>
      </View>
    )
  }

  return(
    <View style={{flex: 1, paddingTop:20}}>
    <FlatList
      data={this.state.dataSource}
      renderItem={({item}) => 

      <View >
      <Text style={{color:"brown",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >{item.kerdesek_kerdes} </Text>
      

     
      </View>
    
    }

    
      keyExtractor={({kerdesek_id}, index) => kerdesek_id}
    />
  </View>
);
}
}

const styles = StyleSheet.create({

kekgomb: {
  alignItems: "center",
  backgroundColor: "blue",
  padding: 10,
  width:300,
  marginLeft:"auto",
  marginRight:"auto",
}
});