import { StatusBar } from 'expo-status-bar';
import { Image,  StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import bcabuslogo from './assets/bcabuslogo.png'; 
// import { AwesomeButton } from "react-awesome-button";
// import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";



export default function App() {
  return (
    <View style={styles.container}>
      <Image source={bcabuslogo} style={styles.logo} /> 
      <Text style={styles.title} >Bus Buddies!</Text>

      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.playButton}>
        <Text style={styles.playButtonText}>Pick a photo</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

/** function Button() {
  return (
    <AwesomeButton cssModule={AwesomeButtonStyles} type="primary">
      Button
    </AwesomeButton>
  );
}
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#125e50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 305,
    marginBottom: 0,
  },
  title: {
    color: '#ffffff', 
    fontSize: 40,
    marginBottom: 15,
  }, 
  playButton: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 25,

  },
  playButtonText: { 
    fontSize: 20,
   color: '#fff',
  },
  
});

