import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, TouchableOpacity, Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import React, { Component } from 'react';
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
      <StatusBar style="auto" />

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;