import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Picker, TouchableOpacity, Text, TextInput, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, { Component, Fragment, FC, useState } from 'react';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';




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

      <Button
        title="Get started"
        onPress={() => navigation.navigate('SetupScreen')}
        style={styles.playButton}
      />

      <StatusBar style="auto" />

    </View>
  );
}

function SetupScreen({navigation}) {
  // const [text, onChangeText] = React.useState("Your town...");
  const [town, setTown] = React.useState(null);

  const inputHandler = (enteredText) => {
    setTown(enteredText);
    if (enteredText == "River Vale") {
      navigation.navigate('SetStopScreen');
    }
  };

  return (
    <View style = {styles.container}>
      <Text>Which town are you from?</Text>
      <TextInput
        //style={styles.input}
        onChangeText={inputHandler}
        value={town}
        placeholder="Your town..."
        keyboardType="text"
      />      
    </View>

    
  );
}

function SummaryScreen({navigation}) {
  // const [text, onChangeText] = React.useState("Your town...");
  
  return (
    <View style = {styles.container}>
      <Text>Great! We'll give you relevant notifications for Cleveland and Rockland.</Text>
         
      <Button
        title="SendNotifScreen"
        onPress={() => navigation.navigate('SendNotifScreen')}
        style={styles.playButton}
      />
    </View>

    
  );
}

function SetStopScreen({navigation}) {
  const [stop, setStop] = React.useState(null);

  const inputHandler = (enteredText) => {
    setStop(enteredText);
    if (enteredText == "Cleveland & Rockland") {
      navigation.navigate('SummaryScreen');
    }
  };

  return (
    <View style = {styles.container}>
      <Text>Which stop do you wait at?</Text>
      <TextInput
        //style={styles.input}
        onChangeText={inputHandler}
        value={stop}
        placeholder="Your stop..."
        keyboardType="text"
      />      
    </View>

    
  );
 

 
}



function SecondScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >LOL!</Text>
    </View>
  );
}


function SendNotifScreen1() {
  return (
    <View style={styles.container}>
      <Button
        title="Sending Bus Notif"
      //onPress={result}
      />
    </View>
  )
}

class SendNotifScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
      tableData: [
        ['1', '2', 'passed', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd']
      ]
    }
  }

  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }

  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles1.btn}>
          <Text style={styles1.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={styles1.container}>
        <Table borderStyle={{ borderColor: 'transparent' }}>
          <Row data={state.tableHead} style={styles1.head} textStyle={styles1.text} />
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles1.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text} />
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
      </View>
    )
  }
}

const styles1 = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#125e50' },
  head: { height: 40, backgroundColor: '#FFC300' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
});



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SendNotifScreen" component={SendNotifScreen} />
        <Stack.Screen name="SetupScreen" component={SetupScreen} />
        <Stack.Screen name="SetStopScreen" component={SetStopScreen} />
        <Stack.Screen name="SummaryScreen" component={SummaryScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;