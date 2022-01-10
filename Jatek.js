import React, { Component } from 'react';
import { Text, TextInput, View, Image, ImageBackground, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { State } from 'react-native-gesture-handler';
import { shadow } from 'react-native-paper';




export default class Jatek extends Component {
  constructor(props) {
    super(props);
    this.state ={
      isLoading: true,
      dataSource:[], 
      pressed:false

  }

}





componentDidMount(){
  return fetch('http://172.16.0.124:3000/kerdesek')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson,
      }, function(){

      });
      
      this.kivalaszt()

    })
    .catch((error) =>{
      console.error(error);
    });


    

    
}
                                                                                                                                                                                                                                                                               
 kivalaszt=async (szam,valasz )=>{
  alert([szam, valasz])
 
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
    <View style={{flex: 1, paddingTop:20, backgroundColor:'lightgreen'}}>
    <FlatList
      data={this.state.dataSource}
      renderItem={({item}) => 

      <View>

      <Text style={{color:"brown",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >{item.kerdesek_kerdes} </Text>
      <Image  source={{uri: 'http://172.16.0.124:3000/'+item.kerdesek_kep}} style={{width:245,height:245,marginLeft:"auto",marginRight:"auto", borderRadius:12}} />

      <View style={{flex: 1, flexDirection: 'row', marginLeft:'auto', marginRight:'auto',  }}>
      
        <View style={{width: 50, height: 50,  flex:6, alignItems:'center'}} >

        <TouchableOpacity 
        style={{backgroundColor:"grey",width:150,margin:10,borderRadius:10, padding:10, marginTop:'auto', marginBottom:'auto',alignItems:'center' }}
        onPress={async()=>this.kivalaszt(item.kerdesek_id, item.kerdesek_valasz1)}
 >
      
        <Text>{item.kerdesek_valasz1}</Text>
 
      </TouchableOpacity>

      
      
       
        
        </View>
        <View style={{width: 50,  height: 50, flex:6, alignItems:'center'}}>

        <TouchableOpacity
        style={{backgroundColor:"grey",width:150,margin:10,borderRadius:10, padding:10,marginTop:'auto', marginBottom:'auto',alignItems:'center'}}
        onPress={async()=>this.kivalaszt(item.kerdesek_id, item.kerdesek_valasz2)}
      >
        <Text>{item.kerdesek_valasz2}</Text>

      </TouchableOpacity>

       </View>

          </View>
          <View style={{flex: 1, flexDirection: 'row', marginLeft:'auto', marginRight:'auto',}}>

        <View style={{width: 50, height: 50,  flex:6, alignItems:'center'}} >

        <TouchableOpacity
        style={{backgroundColor:"grey",width:150,margin:10,borderRadius:10, padding:10,marginTop:'auto', marginBottom:'auto',alignItems:'center'}}
        onPress={async()=>this.kivalaszt(item.kerdesek_valasz3)}
      >
        <Text>{item.kerdesek_valasz3}</Text>

      </TouchableOpacity>

          </View>
          <View style={{width: 50, height: 50, flex:6, alignItems:'center'}} >
            
          <TouchableOpacity
        style={{backgroundColor:"grey",width:150,margin:10,borderRadius:10, padding:10,marginTop:'auto', marginBottom:'auto',alignItems:'center'}}
        onPress={async()=>this.kivalaszt(item.kerdesek_valasz4)}
      >
        <Text>{item.kerdesek_valasz4}</Text>

      </TouchableOpacity>

          </View>
      </View>
      

     
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