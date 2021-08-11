import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState}from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import * as Location from 'expo-location';

import DateTime from './components/DateTime'
import WeatherScroll from './components/WeatherScroll'
const API_KEY ='49cc8c821cd2aff9af04c9f98c36eb74';
const img = require('./assets/image.png')
export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        fetchDataFromApi("35.8288175", "10.6405392")
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      fetchDataFromApi(location.coords.latitude, location.coords.longitude);
    })();
  }, [])

  const fetchDataFromApi = (latitude, longitude) => {
    if(latitude && longitude) {
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

      console.log(data)
      setData(data)
      })
    }
    
  }

  return (
    <ScrollView style={styles.container}>
    <View style={styles.container}>
      
        <DateTime current={data.current} timezone={data.timezone} 
         />
        <WeatherScroll weatherData={data.daily}/>
        
        
      
      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
    
    
  },
  image:{
    flex:1, 
    resizeMode:"cover", 
    justifyContent:"center"
    
  }
});
