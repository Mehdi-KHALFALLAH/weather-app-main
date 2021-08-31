import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput, ActivityIndicator, shadow } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header({ title, navigation }) {

  const openMenu = () => {
    navigation.openDrawer();
  }

  return (
    <View style = {styles.header}>
          
          <MaterialIcons name='menu' size={28} onPress={openMenu}  style={styles.icon} />
          <Text style={styles.headerText}>{title}</Text> 
       
     
        
    
        
      
      
      </View>
    
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    
   
    
    

  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: "rgb(236,110,76)",
    letterSpacing: 1,
  },
  icon: {
    flex : 1,
    position: 'relative',
    alignContent : 'center',
    justifyContent : 'flex-start', 
    color : 'white',
    
    
    
    
    
  },
  headerTitle: {
    flexDirection: 'row',
    
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10
  },
});