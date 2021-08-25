import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from 'react';
import HomeScreen from "../screens/home";
import AboutScreen from "../screens/about";
import Navigator from '../routes/drawer';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
      
    <Tab.Navigator>
        
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
};
export default Tabs;
