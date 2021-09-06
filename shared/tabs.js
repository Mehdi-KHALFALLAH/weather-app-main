import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import HomeScreen from "../screens/home";
import { MaterialIcons } from "@expo/vector-icons";
import AboutScreen from "../screens/about";
import Navigator from "../routes/drawer";
import { BlurView } from "expo-blur";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import DrawerNavigator from '../drawer/DrawerNavigator' ;
import StackNavigator from '../Stack/StackNavigator'


const Tab = createBottomTabNavigator();


const Tabs = () => {
  return (
    <Tab.Navigator
    tabBarOptions = {{

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
        
      }}
    >
       <Tab.Screen  name="Weather" component={DrawerNavigator}  options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={size}
            />
          ),
          tabBarBadge : 1,
          headerShown: false,
          
          
          
          
          headerRight: () => (
            
              <TouchableOpacity>
          <Text onPress={() => console.warn('hello')} style={styles.hello}>Hello</Text>
        </TouchableOpacity>
        
        
      ),
        }}
      />
      
      <Tab.Screen
        name="About"
        component={AboutScreen}
        
        options={{
          
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="information"
              color={color}
              size={size}
            />
          ),
         
        }}
      />
    </Tab.Navigator>
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
export default Tabs;
