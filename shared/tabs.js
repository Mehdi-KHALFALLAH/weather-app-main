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


const Tab = createBottomTabNavigator();
const openMenu = () => {
  navigation.openDrawer();
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { position: "absolute" },
        tabBarActiveTintColor: "rgb(236,110,76)",

        borderRadius: 20,
        height: 90,
        headerStyle: { backgroundColor: "black", height: 100 },
        headerTintColor: "rgb(236,110,76)",

        headerTitleStyle: {
          fontSize: 35,
        },
        tabBarBackground: () => (
          <BlurView
            tint="dark"
            intensity={100}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
    >
      <Tab.Screen
      
        name="WeatherGo"
        component={HomeScreen}
        options={{
          tabBarBadge : 1,
          headerShown: true,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerLeft: () => (
            <MaterialIcons
              name="menu"
              size={28}
              onPress={openMenu}
              style={styles.icon}
            />
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
          headerLeft: () => (
            <MaterialIcons
              name="info"
              size={28}
              onPress={openMenu}
              style={styles.icon}
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
  },
});
export default Tabs;
