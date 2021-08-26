import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Button, Image } from "react-native";
import React, { useState } from "react";
import HomeScreen from "../screens/home";

import AboutScreen from "../screens/about";
import Navigator from "../routes/drawer";
const Tab = createBottomTabNavigator();
const openMenu = () => {
  navigation.openDrawer();
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "rgb(236,110,76)",

        borderRadius: 20,
        height: 90,
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "rgb(236,110,76)",
        headerTitleStyle: {
          fontSize: 35,
        },
        headerRight: () => (
          <Button onPress={openMenu} title="Info" color="#00cc00" />
        ),
      }}
    >
      <Tab.Screen
        name="WeatherGo"
        component={HomeScreen}
        options={{
          headerShown: true,
          tabBarLabel: "Menu",
        }}
      />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
};
export default Tabs;
