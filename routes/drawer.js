import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Constants from "expo-constants";
// stacks
import HomeStack from './homeStack';
import AboutStack from './aboutStack.js';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  About: {
    screen: AboutStack,
  }, 
  
  
 
});

export default createAppContainer(RootDrawerNavigator);
