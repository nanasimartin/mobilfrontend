import React, { Component } from 'react';
import { Text, TextInput, View, Image, ImageBackground, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';


const ipcim="172.16.0.190";


export default class Jatek extends Component {
  constructor(props) {
    super(props);
    this.state ={
      isLoading: true,
      dataSource:[], 
      pressed:false,

      lenyomva:[],

      nev:'',
      osszjo:0,

      ertekel:0
      

  }

}






componentDidMount(){
  return fetch('http://'+ipcim+':3000/kerdesek')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson,
      }, function(){

      });
      
      let m=this.state.lenyomva;
        for (let elem of this.state.dataSource)
            m[elem.kerdesek_id]=0
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

  bekuld=async()=>{
    var db=0;
    for (let i = 0; i < this.state.dataSource.length; i++) 
    {
    if(this.state.lenyomva[i+1]==this.state.dataSource[i].kerdesek_helyesid)
    {
     db++;
    }
  }



    //alert(JSON.stringify(this.state.dataSource)) 
    alert("Helyes megoldások: "+dd)
    //alert('hali')

    //alert("elso: "+this.state.lenyomva[1])
    
this.setState({ertekel:1})
    
      
    

     var bemenet={
      beviteltomb:this.state.lenyomva,
      bevitel1:this.state.nev,
      bevitel2:db
      
     
    }
    
    fetch('http://'+ipcim+':3000/beerkezett', {
    method: "POST",
    body: JSON.stringify(bemenet),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  }
  
  )
  .then(x => x.text())
  .then(y => {
  //alert(JSON.stringify(this.state.dataSource))
  
  
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
    
    <View style={{flex: 1, paddingTop:20, backgroundColor:'lightgreen'}}>
      {this.state.ertekel==0 ? 
      <View style={{flex: 1, paddingTop:20, backgroundColor:'lightgreen'}}>

      <View style={{marginTop:13, marginBottom:13, borderColor:'Red'}}>
   <TextInput placeholderTextColor="black"
          style={{height: 40,width:'50%',alignItems:'center', alignSelf:'center',backgroundColor:'grey',borderColor:'black',color:"white",borderRadius:10, marginBottom:10,   }}
          placeholder="Add meg a neved:"
          onChangeText={(nev) => this.setState({nev})}
          value={this.state.nev}
          
          />

      <TouchableOpacity 
  style={{backgroundColor:"grey",alignSelf:'center',width:150,margin:10,borderRadius:10, padding:10, marginTop:'auto', marginBottom:'auto',alignItems:'center', }}
  onPress={async()=>this.bekuld()}
  
  >

    <Text>Elküld</Text>
   
  </TouchableOpacity> 
  </View>
  

    <FlatList
      data={this.state.dataSource}
      renderItem={({item}) => 

      <View>

      <Text style={{color:"brown",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >{item.kerdesek_kerdes} </Text>
      <Image  source={{uri: 'http://'+ipcim+':3000/'+item.kerdesek_kep}} style={{width:245,height:245,marginLeft:"auto",marginRight:"auto", borderRadius:12}} />

      <View style={{flex: 1, flexDirection: 'row', marginLeft:'auto', marginRight:'auto',  }}>
      
        <View style={{width: 50, height: 50,  flex:6, alignItems:'center'}} >

{/*------------------------------------------------------------------------------------------------1*/}
{ this.state.lenyomva[item.kerdesek_id] == 1 ?

        <TouchableOpacity 
        style={{backgroundColor:"orange",width:150,margin:10,borderRadius:10, padding:10, marginTop:'auto', marginBottom:'auto',alignItems:'center' }}
        onPress={async()=>this.kivalaszt(item.kerdesek_id, item.kerdesek_valasz1)}
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
        onPress={async()=>this.kivalaszt(item.kerdesek_id,item.kerdesek_valasz3)}
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
        onPress={async()=>this.kivalaszt(item.kerdesek_id, item.kerdesek_valasz4)}
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
 :
 /*hamis ag */
 <View style={{flex: 1, paddingTop:20, backgroundColor:'lightgreen'}}>

 <Text>Helyes megoldasok</Text>


<FlatList
 data={this.state.dataSource}
 renderItem={({item}) => 

 <View>

 <Text style={{color:"brown",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >{item.kerdesek_kerdes} </Text>
 <Image  source={{uri: 'http://'+ipcim+':3000/'+item.kerdesek_kep}} style={{width:245,height:245,marginLeft:"auto",marginRight:"auto", borderRadius:12}} />

 <View style={{flex: 1, flexDirection: 'row', marginLeft:'auto', marginRight:'auto',  }}>
 
   <View style={{width: 50, height: 50,  flex:6, alignItems:'center'}} >

 

{/* zold !!!!!!!!!!!!!! 1-es gomb*/}

{  this.state.lenyomva[item.kerdesek_id] == 1 && item.kerdesek_helyesid==1  ?

<TouchableOpacity 
style={{backgroundColor:"green",width:150,margin:10,borderRadius:10, padding:10, marginTop:'auto', marginBottom:'auto',alignItems:'center' }}

>

<Text>{item.kerdesek_valasz1}</Text>

</TouchableOpacity>

: 

null

}



{/* piros */}

{  this.state.lenyomva[item.kerdesek_id] != 1  && item.kerdesek_helyesid==1  ?

<TouchableOpacity 
style={{backgroundColor:"green",width:150,margin:10,borderRadius:10, padding:10, marginTop:'auto', marginBottom:'auto',alignItems:'center' }}

>

<Text>{item.kerdesek_valasz1}</Text>

</TouchableOpacity>

: 

null

}

{/* szurke */}

{  this.state.lenyomva[item.kerdesek_id] != 1 && item.kerdesek_helyesid!=1 ?

<TouchableOpacity 
style={{backgroundColor:"grey",width:150,margin:10,borderRadius:10, padding:10, marginTop:'auto', marginBottom:'auto',alignItems:'center' }}

>

<Text>{item.kerdesek_valasz1}</Text>

</TouchableOpacity>

: 

null

}
{/* narancs */}

{  this.state.lenyomva[item.kerdesek_id] == 1 &&  item.kerdesek_helyesid!=1 ?

<TouchableOpacity 
style={{backgroundColor:"red",width:150,margin:10,borderRadius:10, padding:10, marginTop:'auto', marginBottom:'auto',alignItems:'center' }}

>

<Text>{item.kerdesek_valasz1}</Text>

</TouchableOpacity>

: 

null

}

   </View>
   
   
   <View style={{width: 50,  height: 50, flex:6, alignItems:'center'}}>

{/*-------------------------------------------------------------------------------------------------2*/}
{/* zold !!!!!!!!!!!!!! 1-es gomb*/}

{  this.state.lenyomva[item.kerdesek_id] == 2 && item.kerdesek_helyesid==2  ?

<TouchableOpacity 
style={{backgroundColor:"green",width:150,margin:10,borderRadius:10, padding:10, marginTop:'auto', marginBottom:'auto',alignItems:'center' }}

>

<Text>{item.kerdesek_valasz2}</Text>

</TouchableOpacity>

: 

null

}



{/* piros */}

{  this.state.lenyomva[item.kerdesek_id] != 2  && item.kerdesek_helyesid==2  ?

<TouchableOpacity 
style={{backgroundColor:"green",width:150,margin:10,borderRadius:10, padding:10, marginTop:'auto', marginBottom:'auto',alignItems:'center' }}

>

<Text>{item.kerdesek_valasz2}</Text>

</TouchableOpacity>

: 

null

}

{/* szurke */}

{  this.state.lenyomva[item.kerdesek_id] != 2 && item.kerdesek_helyesid!=2 ?

<TouchableOpacity 
style={{backgroundColor:"grey",width:150,margin:10,borderRadius:10, padding:10, marginTop:'auto', marginBottom:'auto',alignItems:'center' }}

>

<Text>{item.kerdesek_valasz2}</Text>

</TouchableOpacity>

: 

null

}
{/* narancs */}

{  this.state.lenyomva[item.kerdesek_id] == 2 &&  item.kerdesek_helyesid!=2 ?

<TouchableOpacity 
style={{backgroundColor:"red",width:150,margin:10,borderRadius:10, padding:10, marginTop:'auto', marginBottom:'auto',alignItems:'center' }}

>

<Text>{item.kerdesek_valasz2}</Text>

</TouchableOpacity>

: 

null

}
  </View>

     </View>
    
     <View style={{flex: 1, flexDirection: 'row', marginLeft:'auto', marginRight:'auto',}}>

   <View style={{width: 50, height: 50,  flex:6, alignItems:'center'}} >

{/*------------------------------------------------------------------------------------------------3*/}
{/* zold !!!!!!!!!!!!!! 1-es gomb*/}

{  this.state.lenyomva[item.kerdesek_id] == 3 && item.kerdesek_helyesid==3  ?

<TouchableOpacity 
style={{backgroundColor:"green",width:150,margin:10,borderRadius:10, padding:10, marginTop:'auto', marginBottom:'auto',alignItems:'center' }}

>

<Text>{item.kerdesek_valasz3}</Text>

</TouchableOpacity>

: 

null

}



{/* piros */}

{  this.state.lenyomva[item.kerdesek_id] != 3  && item.kerdesek_helyesid==3  ?

<TouchableOpacity 
style={{backgroundColor:"green",width:150,margin:10,borderRadius:10, padding:10, marginTop:'auto', marginBottom:'auto',alignItems:'center' }}

>

<Text>{item.kerdesek_valasz3}</Text>

</TouchableOpacity>

: 

null

}

{/* szurke */}

{  this.state.lenyomva[item.kerdesek_id] != 3 && item.kerdesek_helyesid!=3 ?

<TouchableOpacity 
style={{backgroundColor:"grey",width:150,margin:10,borderRadius:10, padding:10, marginTop:'auto', marginBottom:'auto',alignItems:'center' }}

>

<Text>{item.kerdesek_valasz3}</Text>

</TouchableOpacity>

: 

null

}
{/* narancs */}

{  this.state.lenyomva[item.kerdesek_id] == 3 &&  item.kerdesek_helyesid!=3 ?

<TouchableOpacity 
style={{backgroundColor:"red",width:150,margin:10,borderRadius:10, padding:10, marginTop:'auto', marginBottom:'auto',alignItems:'center' }}

>

<Text>{item.kerdesek_valasz3}</Text>

</TouchableOpacity>

: 

null

}
     </View>
     <View style={{width: 50, height: 50, flex:6, alignItems:'center'}} >

{/*-----------------------------------------------------------------------------------------------4*/}
{/* zold !!!!!!!!!!!!!! 1-es gomb*/}

{  this.state.lenyomva[item.kerdesek_id] == 4 && item.kerdesek_helyesid==4  ?

<TouchableOpacity 
style={{backgroundColor:"green",width:150,margin:10,borderRadius:10, padding:10, marginTop:'auto', marginBottom:'auto',alignItems:'center' }}

>

<Text>{item.kerdesek_valasz4}</Text>

</TouchableOpacity>

: 

null

}



{/* piros */}

{  this.state.lenyomva[item.kerdesek_id] != 4  && item.kerdesek_helyesid==4  ?

<TouchableOpacity 
style={{backgroundColor:"green",width:150,margin:10,borderRadius:10, padding:10, marginTop:'auto', marginBottom:'auto',alignItems:'center' }}

>

<Text>{item.kerdesek_valasz4}</Text>

</TouchableOpacity>

: 

null

}

{/* szurke */}

{  this.state.lenyomva[item.kerdesek_id] != 4 && item.kerdesek_helyesid!=4 ?

<TouchableOpacity 
style={{backgroundColor:"grey",width:150,margin:10,borderRadius:10, padding:10, marginTop:'auto', marginBottom:'auto',alignItems:'center' }}

>

<Text>{item.kerdesek_valasz4}</Text>

</TouchableOpacity>

: 

null

}
{/* narancs */}

{  this.state.lenyomva[item.kerdesek_id] == 4 &&  item.kerdesek_helyesid!=4 ?

<TouchableOpacity 
style={{backgroundColor:"red",width:150,margin:10,borderRadius:10, padding:10, marginTop:'auto', marginBottom:'auto',alignItems:'center' }}

>

<Text>{item.kerdesek_valasz4}</Text>

</TouchableOpacity>

: 

null

}
     </View>

 </View>

 </View>
 
}

 keyExtractor={({kerdesek_id}, index) => kerdesek_id}
/>

</View>
}
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