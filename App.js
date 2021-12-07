import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Kviz from './Jatek';
import Jatek from './Kviz';




function Jatekoslap({ navigation }) {
  return (
    <Kviz/>
  );
}

function Csapatoklap({ navigation }) {
  return (
  <Jatek/>
    );
  
}


const Drawer = createDrawerNavigator();

 

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen  name="Kviz" component={Jatekoslap} />
        <Drawer.Screen name="Játék" component={Csapatoklap} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
