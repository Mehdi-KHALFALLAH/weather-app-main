import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from  '../shared/header';
import Home from '../screens/home';



const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='WeatherGo' navigation={navigation} />
      }
    },
  },
  
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle:{backgroundColor:'black'},
    headerTintColor:'white',
    gesturesEnabled:false
  },
  
  headerTransparent: true
});

export default HomeStack;