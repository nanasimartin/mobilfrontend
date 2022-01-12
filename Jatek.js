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
      pressed:false,

      lenyomva:[]

  }

}





componentDidMount(){
  return fetch('http://172.16.0.102:3000/kerdesek')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson,
      }, function(){

      });
      
      let m=this.state.lenyomva;
        for (let elem of this.state.dataSource)
            m[elem.kepek_id]=0
        this.setState({lenyomva:m})

    })
    .catch((error) =>{
      console.error(error);
    });


    

    
}
                                                                                                                                                                                                                                                                               
 kivalaszt=async (szam,valaszszama )=>{
  //alert([szam, valaszszama])
  let m=this.state.lenyomva
  m[szam]=valaszszama
  this.setState({lenyomva:m})

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
      <Image  source={{uri: 'http://172.16.0.102:3000/'+item.kerdesek_kep}} style={{width:245,height:245,marginLeft:"auto",marginRight:"auto", borderRadius:12}} />

      <View style={{flex: 1, flexDirection: 'row', marginLeft:'auto', marginRight:'auto',  }}>
      
        <View style={{width: 50, height: 50,  flex:6, alignItems:'center'}} >

{/*------------------------------------------------------------------------------------------------1*/}
{ this.state.lenyomva[item.kerdesek_id] == 1 ?

        <TouchableOpacity 
        style={{backgroundColor:"orange",width:150,margin:10,borderRadius:10, padding:10, marginTop:'auto', marginBottom:'auto',alignItems:'center' }}
        onPress={async()=>this.kivalaszt(item.kerdesek_id, 1)}
 >
      
        <Text>{item.kerdesek_valasz1}</Text>
 
      </TouchableOpacity>

      : 
      
      <TouchableOpacity 
        style={{backgroundColor:"grey",width:150,margin:10,borderRadius:10, padding:10, marginTop:'auto', marginBottom:'auto',alignItems:'center' }}
        onPress={async()=>this.kivalaszt(item.kerdesek_id,1)}
        >

          <Text>{item.kerdesek_valasz1}</Text>

        </TouchableOpacity>  
        
}
        </View>
        
        
        <View style={{width: 50,  height: 50, flex:6, alignItems:'center'}}>

{/*-------------------------------------------------------------------------------------------------2*/}
{ this.state.lenyomva[item.kerdesek_id] == 2 ?

        <TouchableOpacity
        style={{backgroundColor:"orange",width:150,margin:10,borderRadius:10, padding:10,marginTop:'auto', marginBottom:'auto',alignItems:'center'}}
        onPress={async()=>this.kivalaszt(item.kerdesek_id, item.kerdesek_valasz2)}
      >
        <Text>{item.kerdesek_valasz2}</Text>

      </TouchableOpacity>

      :

      <TouchableOpacity 
        style={{backgroundColor:"grey",width:150,margin:10,borderRadius:10, padding:10, marginTop:'auto', marginBottom:'auto',alignItems:'center' }}
        onPress={async()=>this.kivalaszt(item.kerdesek_id,2)}
        >

          <Text>{item.kerdesek_valasz2}</Text>

        </TouchableOpacity>  
        
}
       </View>

          </View>
          <View style={{flex: 1, flexDirection: 'row', marginLeft:'auto', marginRight:'auto',}}>

        <View style={{width: 50, height: 50,  flex:6, alignItems:'center'}} >

{/*------------------------------------------------------------------------------------------------3*/}
{ this.state.lenyomva[item.kerdesek_id] == 3 ?
        <TouchableOpacity
        style={{backgroundColor:"orange",width:150,margin:10,borderRadius:10, padding:10,marginTop:'auto', marginBottom:'auto',alignItems:'center'}}
        onPress={async()=>this.kivalaszt(item.kerdesek_valasz3)}
      >
        <Text>{item.kerdesek_valasz3}</Text>

      </TouchableOpacity>

:

<TouchableOpacity 
  style={{backgroundColor:"grey",width:150,margin:10,borderRadius:10, padding:10, marginTop:'auto', marginBottom:'auto',alignItems:'center' }}
  onPress={async()=>this.kivalaszt(item.kerdesek_id,3)}
  >

    <Text>{item.kerdesek_valasz3}</Text>

  </TouchableOpacity>  
  
}
          </View>
          <View style={{width: 50, height: 50, flex:6, alignItems:'center'}} >

{/*-----------------------------------------------------------------------------------------------4*/}
{ this.state.lenyomva[item.kerdesek_id] == 4 ?

          <TouchableOpacity
        style={{backgroundColor:"orange",width:150,margin:10,borderRadius:10, padding:10,marginTop:'auto', marginBottom:'auto',alignItems:'center'}}
        onPress={async()=>this.kivalaszt(item.kerdesek_valasz4)}
      >
        <Text>{item.kerdesek_valasz4}</Text>

      </TouchableOpacity>

:

<TouchableOpacity 
  style={{backgroundColor:"grey",width:150,margin:10,borderRadius:10, padding:10, marginTop:'auto', marginBottom:'auto',alignItems:'center' }}
  onPress={async()=>this.kivalaszt(item.kerdesek_id,4)}
  >

    <Text>{item.kerdesek_valasz4}</Text>

  </TouchableOpacity>  
  
}
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