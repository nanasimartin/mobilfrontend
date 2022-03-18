import * as React from 'react';
import {   View, TouchableOpacity, Text,ImageBackground } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Jatek from './Jatek';

import Komment from './Kommentek';
import Felvitelkomm from './Felvitelkomm';





function Fooldallap({ navigation }) {
  return ( 

    
    
    <View style={{flex: 1, justifyContent: 'center', alignItems:'center', backgroundColor:'lightgreen'}}>
      
      
    
    <TouchableOpacity style={{backgroundColor:"green",width:150,margin:10,borderRadius:10, alignItems:'center'}}
          onPress={()=>navigation.navigate('Játék')}>
          <Text style={{color:"#ccffcc",fontSize:20,textAlign:"center",marginTop:15,marginBottom:15}}>Játék</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={{backgroundColor:"green",width:150,margin:10,borderRadius:10, alignItems:'center'}}
          onPress={() => {alert('blablabla');}}>
          <Text style={{color:"#ccffcc",fontSize:20,textAlign:"center",marginTop:15,marginBottom:15}}>A játék menete</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor:"green",width:150,margin:10,borderRadius:10, alignItems:'center'}}
          onPress={()=>navigation.navigate('Komment írás')}>
          <Text style={{color:"#ccffcc",fontSize:20,textAlign:"center",marginTop:15,marginBottom:15}}>Komment írás</Text>
        </TouchableOpacity>
       
     
      </View>
   
  );
}


function Jateklap({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"#DCF9F4"}}>
      <Jatek/>

      <TouchableOpacity style={{backgroundColor:"green",width:150,margin:10,borderRadius:10, alignItems:'center'}}
          onPress={()=>navigation.navigate('Komment írás')}>
          <Text style={{color:"#ccffcc",fontSize:20,textAlign:"center",marginTop:15,marginBottom:15}}>Komment irás</Text>
        </TouchableOpacity>
      
    </View>
    
  );
}
function Kommentlap({ navigation }) {
  return (
    
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"#DCF9F4"}}>
      <Komment/>

      <TouchableOpacity style={{backgroundColor:"green",width:150,margin:10,borderRadius:10, alignItems:'center'}}
          onPress={()=>navigation.navigate('Fő oldal')}>
          <Text style={{color:"#ccffcc",fontSize:20,textAlign:"center",marginTop:15,marginBottom:15}}>Vissza a főoldalra</Text>
        </TouchableOpacity>
      
    </View>
  );
}



const Drawer = createDrawerNavigator();

 

export default function App() {
  return (
    <NavigationContainer >
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen  name="Fő oldal" component={Fooldallap} 
        options={{
          title: 'Fõ oldal',
          headerStyle: {
            backgroundColor: 'green',
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color:'white'
          },
          
        }}/>
        

        <Drawer.Screen name="Komment írás" component={Kommentlap} 
        options={{
          title: 'Komment',
          
          headerStyle: {
            
            backgroundColor: 'green',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color:'white'
          },
          
        }}/>
        
        <Drawer.Screen name="Játék" component={Jateklap} 
        options={{
          title: 'Játék',
          
          headerStyle: {
            
            backgroundColor: 'green',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color:'white'
          },
          
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

