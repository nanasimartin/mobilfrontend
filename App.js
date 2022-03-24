import * as React from 'react';
import {   View, TouchableOpacity, Text,ImageBackground } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Jatek from './Jatek';

import Komment from './Kommentek';
import Felvitelkomm from './Felvitelkomm';





function Fooldallap({ navigation }) {
  return ( 

    
    
    <View style={{flex: 1, justifyContent: 'center', alignItems:'center', backgroundColor:'#F5F5DC'}}>
      
      
    
    <TouchableOpacity style={{backgroundColor:"#535c68",width:150,margin:10,borderRadius:10, alignItems:'center'}}
          onPress={()=>navigation.navigate('Kvíz')}>
          <Text style={{color:"white",fontSize:20,textAlign:"center",marginTop:15,marginBottom:15}}>Kvíz</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={{backgroundColor:"#535c68",width:150,margin:10,borderRadius:10, alignItems:'center'}}
          onPress={() => {alert('Focis kvíz. Csak egyszer tudod kitölteni. 10 kérdés, kérdésenként 4 válasz. Ha úgy gondolod, hogy tudod a megoldást rá kattintasz a 4 gomb közül a szerinted helyesre, majd ha mind a 10 kérdésre válaszoltál akkor a neved beírása után elküldöd. Értesítésben megkapod hány kérdést találtál el. Ha eltaláltál egy kérdést az bezöldül, viszont ha nem akkor piros lesz, de a helyes megoldás bezöldül mellette, hogy tudd melyik lett volna a jó. Sok sikert! Remélem tetszeni fog! Mindenre válaszolj!  ');}}>
          <Text style={{color:"white",fontSize:20,textAlign:"center",marginTop:15,marginBottom:15}}>A kvíz menete</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor:"#535c68",width:150,margin:10,borderRadius:10, alignItems:'center'}}
          onPress={()=>navigation.navigate('Komment írás')}>
          <Text style={{color:"white",fontSize:20,textAlign:"center",marginTop:15,marginBottom:15}}>Komment írás</Text>
        </TouchableOpacity>
       
     
      </View>
   
  );
}


function Jateklap({ navigation }) {
  return (
    
      <Jatek/>

      
      
    
    
  );
}
function Kommentlap({ navigation }) {
  return (
    
    
      <Komment/>

      
      
    
  );
}



const Drawer = createDrawerNavigator();

 

export default function App() {
  return (
    <NavigationContainer >
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen  name="Főoldal" component={Fooldallap} 
        options={{
          title: 'Főoldal',
          headerStyle: {
            backgroundColor: '#00FF00',
            
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            color:'black'
          },
          
        }}/>
        

        <Drawer.Screen name="Komment írás" component={Kommentlap} 
        options={{
          title: 'Komment írás',
          
          headerStyle: {
            
            backgroundColor: '#00FF00',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            color:'black'
          },
          
        }}/>
        
        <Drawer.Screen name="Kvíz" component={Jateklap} 
        options={{
          title: 'Kvíz',
          
          headerStyle: {
            
            backgroundColor: '#00FF00',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            color:'black'
          },
          
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

