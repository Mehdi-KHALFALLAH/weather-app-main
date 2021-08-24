import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/drawer';



export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  
    return (
      <Navigator />
    );
  
    
  }

