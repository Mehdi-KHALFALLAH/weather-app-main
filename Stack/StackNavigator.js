import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from '../drawer/DrawerNavigator'
import About from '../screens/about';
import Profile from '../screens/Profile';
const Stack = createStackNavigator();
const StackNavigator = () => {
    return (
      <Stack.Navigator>
        
        <Stack.Screen name="Messages" component={About} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    );
  };
  export default StackNavigator;