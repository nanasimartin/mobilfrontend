import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Fooldal from './Fooldal';
import Jatek from './Jatek';




function Fooldallap({ navigation }) {
  return ( 
   
      <Fooldal/>  
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
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen  name="Fő oldal" component={Fooldallap} />
        <Drawer.Screen name="Játék" component={Jateklap} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

