import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import About from '../screens/about';

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='About' navigation={navigation} />
      }
    },
  },
}

const AboutStack = createStackNavigator(screens, {
  
     defaultNavigationOptions: {
      headerTintColor: '#444',
      headerStyle:{backgroundColor:'black'},
      headerTintColor:'white',
      gesturesEnabled:false
    },
  }
);

export default AboutStack;