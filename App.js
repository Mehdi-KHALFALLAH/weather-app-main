import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  FlatList,
  Image,
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

  return (
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
                  {moment(hour.item.dt * 1000).format("hA")}
                </Text>
                <Text style={styles.temp}>{Math.round(hour.item.temp)}°C</Text>
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
});
