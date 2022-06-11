import { StatusBar } from 'expo-status-bar';
import { Image,  StyleSheet, TouchableOpacity, Alert, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import React, { Component } from 'react';


const API_KEY = "p7xv2xrch8yw";


import bcabuslogo from './assets/bcabuslogo.png'; 
// import { AwesomeButton } from "react-awesome-button";
// import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";


import styles from "./style"

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={bcabuslogo} style={styles.logo} /> 
      <Text style={styles.title} >Bus Buddies!</Text>
      <Button
        title="SendNotifScreen"
        onPress={() => navigation.navigate('SendNotifScreen')}
        style={styles.playButton}
      />
      <StatusBar style="auto" />

    </View>
  );
}

// HELLO


function SecondScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >LOL!</Text>
    </View>
  );
}


function SendNotifScreen() {
  let r = RouteTable()
  return (
    <View style={styles.container}>
      <Button
        title="Sending Bus Notif"
        onPress={result}
      />
    </View>
    r
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SendNotifScreen" component={SendNotifScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
