import React , {useState} from "react";
import ToggleButton from 'react-native-toggle-element';
import { View, StyleSheet,Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient"
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export function DrawerContent(props) {
  const [toggleValue, setToggleValue] = useState(false);
  return (
    
    <View style={{ flex: 1, backgroundColor : "black" }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
        <LinearGradient colors={['rgb(236,110,76)', 'rgb(236,110,76)', 'rgb(252, 139, 109)']} start={{ x: 0, y: 0}}
        end={{x: 1, y: 1}} >
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 25 }}>
              <Avatar.Image
                source={{
                  uri: "https://api.adorable.io/avatars/50/abott@adorable.png",
                }}
                size={40}
                
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>WeatherGo</Title>
                <Caption style={styles.caption}>@j_doe</Caption>
              </View>
            </View>
            <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>Subscription :</Paragraph>
                                
                            </View>
                           
                        </View>
                        
                        
          </View>
          
          </LinearGradient>
        </View>
      
      <Drawer.Section style={styles.drawerSection}>
      <DrawerItem 
       
                            icon={() => (
                                <Icon 
                                name="home-outline" 
                                color={"rgb(255,228,196)"}
                                size={28}
                                />
                            )}
                            label="Home"
                            labelStyle={{color: 'white'}}
                            onPress={() =>{} }
                            
                        />
                         <DrawerItem 
       
       icon={({color, size}) => (
           <Icon 
           name="account-outline" 
           color={"rgb(255,228,196)"}
           size={28}
           />
       )}
       label="Profile"
       labelStyle={{color: 'white'}}
       onPress={() =>{} }
       
   />
    <DrawerItem 
       
       icon={({color, size}) => (
           <Icon 
           name="cog-outline" 
           color={"rgb(255,228,196)"}
           size={28}
           />
       )}
       label="Settings"
       labelStyle={{color: 'white'}}
       onPress={() =>{} }
       
   />
    <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={"rgb(255,228,196)"}
                                size={28}
                                />
                            )}
                            label="Support"
                            labelStyle={{color: 'white'}}
                            onPress={() => {}}
                        />
    <DrawerItem 
       
       icon={({color, size}) => (
           <Icon 
           name="heart" 
           color={"rgb(255,228,196)"}
           size={28}
           />
       )}
       label="Feedback"
       labelStyle={{color: 'white'}}
       onPress={() =>{} }
       
   />
   <View style={{ flexDirection: "row", marginTop: 25 }}>
   
   <ToggleButton
   
  value={toggleValue}
  onPress={(newState) => setToggleValue(newState)}
  
  thumbActiveComponent={
    <Avatar.Image
                source={
                  require('../assets/sun.png') 
                }
                size={45}
                backgroundColor = {"#9ee3fb"}
              />
  }
  thumbInActiveComponent={
    <Avatar.Image
    source={
      require('../assets/moon.png') 
    }
    size={45}
  />
  }
  trackBar={{
    activeBackgroundColor: '#9ee3fb',
    inActiveBackgroundColor: '#3c4145',
    borderActiveColor: '#86c3d7',
    borderInActiveColor: '#1c1c1c',
    borderWidth: 3,
    width: 100,
   
  }}
  
/>
<View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.titleTheme}> Theme</Title>
               
              </View>
</View>

   <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() =>{} }>
                            <View style={styles.preference}>
                              
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                        
                        
                        
        </Drawer.Section>
        </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
      
    </View>
  );
}
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: "rgb(236,110,76)"
  },
  userInfoSection: {
    paddingLeft: 20,
    paddingBottom: 50,
    
  },
  title: {
    fontSize: 25,
    marginTop: 3,
    fontWeight: "bold",
    color : "rgb(255,222,173)"
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "rgb(236,110,76)",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  titleTheme: {
    fontSize: 25,
    marginTop: 10,
    fontWeight: "bold",
    color : "rgb(255,222,173)"}
});
