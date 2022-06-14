import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Picker, TouchableOpacity, Text, TextInput, View, Button, Alert, Switch, ScrollView, Touchable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, Component, Fragment, FC, useEffect } from 'react';
import { useFonts, Quicksand_300Light } from '@expo-google-fonts/quicksand';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import AwesomeButton from "react-native-really-awesome-button";





import bcabuslogo from './assets/bcabuslogo.png';
import skyline from './assets/skyline.png';
import buslogo from './assets/buslogo.png';
// import { AwesomeButton } from "react-awesome-button";
// import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";


import styles from "./style"

// export default props => {
//   let [fontsLoaded] = useFonts({
//     'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
//   });


//      <Image source={bcabuslogo} style={styles.logo} />

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={buslogo} style={styles.logo} />
      <Text style={styles.homeScreenTitle} >Bus Buddies!</Text>

      <AwesomeButton
        backgroundColor="#1480a3"
        borderColor="white"
        type="primary"
        onPress={() => navigation.navigate('SendNotifScreen')}
        style={styles.navigation}
        >Bus Arrival</AwesomeButton>  

      <Text></Text>

      <AwesomeButton
        backgroundColor="#1480a3"
        borderColor="white"
        type="primary"
        onPress={() => navigation.navigate('ChooseTownScreen')}
        style={styles.navigation}
        >Get Started</AwesomeButton>  

      <Text></Text>

      <StatusBar style="auto" />

    </View>
  );
}

function ChooseTownScreen({navigation}) {
  // const [text, onChangeText] = React.useState("Your town...");
  const [town, setTown] = React.useState(null);

  const inputHandler = (enteredText) => {
    setTown(enteredText);
    if (enteredText == "River Vale") {
      navigation.navigate('SetStopScreen');
    }
  };

  return (
    <View style = {styles.questionContainer}>
      <Image source={skyline} style={styles.logo} />
      <Text style={styles.questionTexts}>Which town are you from?</Text>
      <TextInput style={styles.inputText}
          onChangeText={inputHandler}
          value={town}
          placeholder="Your town..."
          keyboardType="text"      
          defaultValue='River Vale'
        //style={styles.input}
      />      
      <StatusBar style="auto" />

    </View>

// <Image source={bcabuslogo}/>     


  );
}

function SummaryScreen({navigation}) {
  // const [text, onChangeText] = React.useState("Your town...");
  
  return (
    <View style = {styles.container}>
      <Text style={style.questionTexts}>Great! We'll give you relevant notifications for Cleveland and Rockland.</Text>
         
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
      <Text style={styles.questionTexts}>Which stop do you wait at?</Text>
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

function tSwitch() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <ScrollView style={styles.container}>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

    </ScrollView>
  )

}

function SendNotifScreen1() {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <ScrollView style={styles.container}>
      <Button
        title="Sending Bus Notif"
      //onPress={result}
      />
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

    </ScrollView>
  )
}

class SendNotifScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tableHead: ['Stop', 'Status', 'Alert'],
      tableData: [
        ['Kinderkamack Rd & Ralph Ave, HD', 'Pending', ''],
        ['Prospect St & Ruckman Rd, RV', 'Pending', ''],
        ['Rivervale Rd & Woodside Ave, RV', 'Pending', ''],
        ['Winding Way & Dorchester Dr, RV', 'Pending', ''],
        ['Rivervale Rd & Barr Ct, RV', 'Pending', ''],
        ['Rivervale Rd & Wittich Terr, RV', 'Pending', ''],
        ['Rivervale Rd & Thurnau Dr, RV', 'Pending', ''],
        ['Rivervale Rd & Woodland Ct, RV', 'Pending', ''],
        ['Piermont Ave & Holiday Farms, RV', 'Pending', ''],
        ['Cedar La & E. Liberty Ave, RV', 'Pending', ''],
        ['Cedar La & Dearest Ave, RV', 'Pending', ''],
        ['Cleveland Ave & Nelson Cr, RV', 'Pending', ''],
        ['Cleveland Ave & Rockland, RV', 'Pending', ''],
        ['Cleveland Ave & May St, RV', 'Pending', ''],
        ['Rockland & Hudson Ave, RV', 'Pending', ''],
        ['Westwood Ave & Oak Ave, RV', 'Pending', ''],
        ['Westwood Ave & Rivervale, RV', 'Pending', ''],
        ['Rivervale Rd & Tiffany, RV', 'Pending', '']
      ],
    }
  }


  _alertIndex(index) {
    if (this.state.tableData[index][1] == "Pending") {
      Alert.alert(`The bus has arrived at ${this.state.tableData[index][0]}`);
      this.state.tableData[index][1] = "Arrived";
      //
    }
    else {
      this.state.tableData[index][1] = "Pending";
    }
    this.forceUpdate();
    console.log("hi " + this.state.tableData[index][1]);
  }



  render() {
    const state = this.state;

    /*  const element = (data, index) => (
       <TouchableOpacity onPress={() => this._alertIndex(index)}>
         <View style={styles.btn}>
           <Text style={styles.btnText}>button</Text>
         </View>
       </TouchableOpacity>
     );
     */

    const element2 = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles .tableButtons}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );

    const element = (data, index) => (
      
      <AwesomeButton
      title="LOL PLEASE WORK?"
      backgroundColor="#1480a3"
      borderColor="white"
      type="primary"
      onPress={() => this._alertIndex(index) }
      style={styles.tableButtons}
      >Change Status</AwesomeButton>  
    );


    //const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const element1 = () => {

      <Switch
        // const [isEnabled, setIsEnabled] = useState(false)
        isEnabled = {useState(false)}
        setIsEnabled = {useState(false)}
        toggleSwitch = {(setIsEnabled(previousState => !previousState))}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={'#f5dd4b'}
        //thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={(value) => console.log(value)}
        value={this.state.switchValue}

      />;
    }


    //const [isEnabled, setIsEnabled] = useState(false);
    //const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (

      <ScrollView style={styles.container1} >
        <Text style={styles.tableTitle}>Route Check
        </Text>
        <Table borderStyle={{ borderColor: 'black' }}>
          <Row 
            data={state.tableHead} 
            style={styles.head} 
            textStyle={styles.tableHeadText} 
            widthArr={state.widthArr}
            />
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (

                    //<Cell key={cellIndex} data={cellIndex === 2 ? element(cellData, index) : cellData} textStyle={styles.text} />
                    <Cell key={cellIndex} 
                    data={cellIndex == 2 ? element(cellData, index) : cellData}
                    textStyle={styles.tableText} />
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>

      </ScrollView>
    )
  }
}



const Stack = createNativeStackNavigator();

function App() {

  // let [fontsLoaded] = useFonts({
  //   Inter_900Black,
  // });

 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SendNotifScreen" component={SendNotifScreen} />
        <Stack.Screen name="ChooseTownScreen" component={ChooseTownScreen} />
        <Stack.Screen name="SetStopScreen" component={SetStopScreen} />
        <Stack.Screen name="SummaryScreen" component={SummaryScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;