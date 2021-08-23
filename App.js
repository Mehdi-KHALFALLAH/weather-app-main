import { StatusBar } from "expo-status-bar";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { PacmanIndicator } from "react-native-indicators";
import Constants from "expo-constants";
import TopBar from "./components/TopBar";
import Navigator from './routes/drawer';
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  FlatList,
  Image,
  animated,
  SafeAreaView,
} from "react-native";
import * as Location from "expo-location";
import moment from "moment-timezone";

import DateTime from "./components/DateTime";
import WeatherScroll from "./components/WeatherScroll";
const API_KEY = "49cc8c821cd2aff9af04c9f98c36eb74";
const img = require("./assets/image.png");
export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        fetchDataFromApi("35.8288175", "10.6405392");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      fetchDataFromApi(location.coords.latitude, location.coords.longitude);
    })();
  }, []);

  const fetchDataFromApi = (latitude, longitude) => {
    if (latitude && longitude) {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&include=hourly,minutely&units=metric&appid=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data);
        });
    }
  };
  if (!data) {
    return (
      <SafeAreaView style={styles.loading}>
        <PacmanIndicator color="rgb(236,110,76)" />
        <View style={styles.statusBar} />
      </SafeAreaView>
    );
  }

  function HomeScreen() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <View style={styles.container}>
            <DateTime current={data.current} timezone={data.timezone} />
            <WeatherScroll weatherData={data.daily} />

            <FlatList
              horizontal
              data={data.hourly}
              keyExtractor={(item, index) => index.toString()}
              renderItem={(hour) => {
                const weather = hour.item.weather[0];
                var dt = new Date(hour.item.dt * 1000);
                return (
                  <View style={styles.hour}>
                    <Text style={styles.temp}>
                      {Math.round(hour.item.temp)}°C
                    </Text>
                    <Image
                      style={styles.smallIcon}
                      source={{
                        uri: `http://openweathermap.org/img/wn/${weather.icon}@4x.png`,
                      }}
                    />
                    <Text style={styles.temp}>
                      {moment(hour.item.dt * 1000).format("hA")}
                    </Text>
                    <Text style={styles.temp}>{weather.description}</Text>
                  </View>
                );
              }}
            />
            <FlatList
              horizontal
              data={data.daily}
              keyExtractor={(item, index) => index.toString()}
              renderItem={(daily) => {
                const weather = daily.item.weather[0];

                return (
                  <View style={styles.hour}>
                    <Text style={styles.temp}>
                      {moment(daily.item.dt * 1000).format("dddd MMM")}
                    </Text>
                    <Text style={styles.temp}>
                      {Math.round(daily.item.temp.day)}°C
                    </Text>
                    <Text style={styles.temp}>
                      {Math.round(daily.item.temp.night)}°C
                    </Text>
                    <Image
                      style={styles.smallIcon}
                      source={{
                        uri: `http://openweathermap.org/img/wn/${weather.icon}@4x.png`,
                      }}
                    />
                    <Text style={styles.temp}>{weather.description}</Text>
                  </View>
                );
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }

  function SettingsScreen() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text>Settinguihuihs!</Text>
      </View>
    );
  }

  const Tab = createMaterialTopTabNavigator();
  return (
    
    <NavigationContainer>
       <Navigator />
      <Tab.Navigator
        style={{ marginTop: Constants.statusBarHeight }}
        tabBarOptions={{
          activeTintColor: "rgb(236,110,76)",
          pressColor: "rgb(236,110,76)",
          indicatorStyle: {
            backgroundColor: "rgb(236,110,76)",
          },
          style: {
            backgroundColor: "black",
          },
        }}
      >
        
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  smallIcon: {
    width: 100,
    height: 100,
  },
  futureForecastItemContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#00000033",
    borderRadius: 10,
    borderColor: "#eee",
    borderWidth: 1,
    padding: 20,
    marginLeft: 10,
  },
  hour: {
    padding: 6,
    alignItems: "center",
  },
  temp: {
    fontSize: 14,
    color: "white",
    fontWeight: "100",
    textAlign: "center",
  },
  loading: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  statusBar: {
    backgroundColor: "#C2185B",
    height: Constants.statusBarHeight,
  },
});
