import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment-timezone'
import { Card } from "react-native-paper";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUGUST', 'SEP', 'OCT', 'NOV', 'DEC'];


const WeatherItem = ({title, value, unit}) => {
    return(
        <View style={styles.weatherItem}>
            <Text style={styles.weatherItemTitle}>{title}</Text>
            <Text style={styles.weatherItemTitle}>{value}{unit}</Text>
        </View>
    )
}

const DateTime = ({current,  timezone}) => {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    useEffect (() => {
        setInterval(() => {
            const time = new Date();
            const month = time.getMonth();
            const date = time.getDate();
            const day = time.getDay();
            const hour = time.getHours();
            const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
            const minutes = time.getMinutes();
            const ampm = hour >=12 ? ' PM' : ' AM'
        
            setTime((hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes) +ampm) 
        
            setDate(days[day] + ', ' + date+ ' ' + months[month]) 
        
        }, 1000);
    }, [])
    let [fontsLoaded] = useFonts({
        "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
        "Roboto-LightItalic": require("../assets/fonts/Roboto-LightItalic.ttf"),
        "Roboto-Thin" : require("../assets/fonts/Roboto-Thin.ttf"),
        "Roboto-Bold" : require("../assets/fonts/Roboto-Bold.ttf"),
        "Roboto-Regular" : require  ("../assets/fonts/Roboto-Regular.ttf")
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      }
    return (
        <View style={styles.container}>  
        
           <View>
           
               <View>
              
                   <Text style={styles.heading}>{time}</Text>
                   <Card style style = {{marginLeft:0,marginRight:0, backgroundColor : "black", } }>
        <Card.Cover source={{ uri: 'https://picsum.photos/700?'+ new Date().getTime() }}
        style = {{marginLeft:0,marginRight:0, backgroundColor: " black",borderRadius:15,height:350}} />
       
        
        
        </Card>
               </View>
               
               <View>
                   <Text style={styles.subheading}>{date}</Text>
                   <View style={styles.rightAlign}>
               <Text style={styles.timezone}>{timezone}</Text>
               
           </View>
               </View>
               <View style={styles.weatherItemContainer}>
                    <WeatherItem title="Humidity" value={current? current.humidity : ""} unit="%"/>
                    <WeatherItem title="Pressure" value={current? current.pressure : ""} unit="hPA"/>
                    <WeatherItem title="Sunrise" value={current? moment.tz(current.sunrise * 1000, timezone ).format('HH:mm'): ""} unit="am"/>
                    <WeatherItem title="Sunset" value={current? moment.tz(current.sunset * 1000, timezone ).format('HH:mm') : ""} unit="pm"/>
               </View>
           </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1.5,
        flexDirection: 'column',
        justifyContent:'space-between',
        padding: 15
    },
    heading: {
        fontFamily: "Roboto-Regular",
        fontSize: 22,
        color:'white',
        fontWeight: '100'
    },
    subheading: {
        fontFamily: "Roboto-Regular",
        fontSize: 15,
        color: '#eee',
        fontWeight: '300'
    },
    rightAlign: {
        textAlign:'right',
        opacity:0.6   },
    timezone: {
        fontSize: 20,
        color:'white'
    },
    latlong:{
        fontSize:16,
        color:'white',
        fontWeight: '700'
    },
    weatherItemContainer: {
        backgroundColor: "#18181b99",
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        
    }, 
    weatherItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    weatherItemTitle: {
        color:'#eee',
        fontSize: 14,
        fontWeight: '100'
    },
    timezone : {

        fontFamily: "Roboto-Bold",
        fontSize: 25,
        color:'white',
        fontWeight: '100'
    }
    
})

export default DateTime
