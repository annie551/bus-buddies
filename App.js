import { StatusBar } from 'expo-status-bar';
import { Image,  AppRegistry, StyleSheet, TouchableOpacity, Alert, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import React, { Component, useEffect, useState} from 'react';
import {StreamChat, OverlayProvider, Chat, ChannelList, MessageList} from 'stream-chat-react-native';
import  {SafeAreaProvider} from 'react-native-safe-area-context';
import App from './App';
import { registerRootComponent } from 'expo';

AppRegistry.registerComponent('main', () => App);

// if (Platform.OS === 'ios') {
//   const rootTag = document.getElementById('root') || document.getElementById('Main');
//   AppRegistry.runApplication('Main', { rootTag });
// }

const API_KEY = "p7xv2xrch8yw";
const client = StreamChat.getInstance(API_KEY);

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
  )
}

const Stack = createNativeStackNavigator();

export default function Main() {
  const [isReady, setIsReady] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState(true);

  useEffect(() => {
    const connectUser = async () => {
      await client.connectUser (
        {
            id: 'christina',
            name: 'Christina Kaddouh',
        },
        client.devToken('christina')
      );
      console.log("User connected");

      const channel = client.channel("messaging", "busbuddies", {
        name: "River Vale/Hillsdale",
      });
      await channel.watch();

      setIsReady(true);
    };

    connectUser();

    return () => client.disconnectUser();
  }, [])

   

    const onChannelPressed = (channel) => {
      setSelectedChannel(channel);
    }

    console.log(isReady);
    if (!isReady) {
      return null;
    }
    else {
      
      return (
        <SafeAreaProvider>
        <OverlayProvider>
          {/* <Chat client = {client}>

            {selectedChannel ? (
              <Channel channel={selectedChannel}>
                <MessageList />
                <MessageInput />
                <Text style={{margin: 40}}
                      onPress={() => setSelectedChannel(null)}>Go back</Text>
              </Channel>
            ) : (
            <ChannelList onSelect={onChannelPressed}/>
            )}
          </Chat> */}
        </OverlayProvider>
        <StatusBar />
        </SafeAreaProvider>
      );

      // return (
      //   <NavigationContainer>
      //     <Stack.Navigator initialRouteName="Home">
      //       <Stack.Screen name="HomeScreen" component={HomeScreen} />
      //       <Stack.Screen name="SendNotifScreen" component={SendNotifScreen} />
      //     </Stack.Navigator>
      //   </NavigationContainer>
      // );
    }

    
    
}


// export default App;
