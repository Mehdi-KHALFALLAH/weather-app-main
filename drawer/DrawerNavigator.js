import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/home';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';
import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
    TouchableOpacity,
  } from "react-native";
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator  tabBarOptions = {{

        showLabel : false ,
      }}
     
        screenOptions={{ 
          showLabel: false,
          tabBarActiveTintColor: "rgb(236,110,76)",
  
          borderRadius: 20,
          height: 90,
          headerStyle: { backgroundColor: "black", height: 100 },
          headerTintColor: "rgb(236,110,76)",
  
          headerTitleStyle: {
            fontSize: 35,
          },
          
        }}>
      <Drawer.Screen options={{
          
          tabBarBadge : 1,
          headerShown: true,
          tabBarLabel: "WeatherGo",
          
          
          
          headerRight: () => (
            
              <TouchableOpacity>
          <Text onPress={() => console.warn('hello')} style = {styles.hello} >Hello</Text>
        </TouchableOpacity>
        
        
      ),
        }}   name="WeatherGo" component={Home} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};
const styles = StyleSheet.create({
    icon: {
      color: "rgb(236,110,76)",
      paddingLeft : 15,
    },
    hello: {
      color: "rgb(236,110,76)",
     
      paddingRight : 16,
      
    },
  });
export default DrawerNavigator;