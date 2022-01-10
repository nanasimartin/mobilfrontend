import * as React from 'react';
import {   View, TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Fooldal from './Fooldal';
import Jatek from './Jatek';




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
        
      </View>
   
  );
}


function Jateklap({ navigation }) {
  return (
    <Jatek/>
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

