import React, { useState, useEffect, useRef } from "react";
import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import * as Permissions from "expo-permissions";
import Card from "../shared/card";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { PacmanIndicator } from "react-native-indicators";
import Constants from "expo-constants";
import Navigator from "../routes/drawer";
import {
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  Image,
  Animated,
  SafeAreaView,
} from "react-native";
import * as Location from "expo-location";
import moment from "moment-timezone";

import DateTime from "../components/DateTime";
import WeatherScroll from "../components/WeatherScroll";
const API_KEY = "49cc8c821cd2aff9af04c9f98c36eb74";
const img = require("../assets/image.png");

export default function Home({ navigation }) {
  
  
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      var loc = await Location.hasServicesEnabledAsync();
      
      if (status == "granted") {
        fetchDataFromApi("35.8288175", "10.6405392");
        return;
      }

      let location = await Location.getCurrentPositionAsync(
        {}
      );
      console.log(location);
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
        })
        .catch((error) => {
          
          console.log(error);
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

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
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
