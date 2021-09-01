import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from "./shared/tabs"
 

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  
    return (
      <NavigationContainer>

        <Tabs />
       
      </NavigationContainer>
      
    );
  
    
  }

