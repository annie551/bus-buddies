import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Picker, TouchableOpacity, Text, TextInput, View, Button, Alert, Switch, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, Component, Fragment, FC } from 'react';
import { useFonts, Quicksand_300Light } from '@expo-google-fonts/quicksand';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';




import bcabuslogo from './assets/bcabuslogo.png';
// import { AwesomeButton } from "react-awesome-button";
// import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";


import styles from "./style"

// export default props => {
//   let [fontsLoaded] = useFonts({
//     'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
//   });

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={bcabuslogo} style={styles.logo} />
      <Text style={styles.homeScreenTitle} >Bus Buddies!</Text>
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

  function initialState() {
    return {
      focusDescriptionInput: false,
    };
  }

  const [town, setTown] = React.useState(null);

  

  

  const inputHandler = (e, enteredText) => {
    setTown(enteredText);
    if (e.key == `Return`){
      if (enteredText == "River Vale") {
        navigation.navigate('SetStopScreen');
      }
      else{
        Alert.alert(enteredText + `is not a valid town.`);
        navigation.navigate('SetupScreen');
      }
    }
  };

  // const handleTitleInputSubmit = () => {
  //   this.setState(focusDescriptionInput: true);
  // }

  return (
    <View style = {styles.container}>
      <Text style = {styles.startText}>Which town are you from?</Text>
      <TextInput style = {styles.inputText}
        //style={styles.input}
        onKeyDown={inputHandler}
        value={town}
        placeholder="Your town..."
        keyboardType="text"
        // onSubmitEditing={}
        // focus={this.state}
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
      <Text style = {styles.startText}>Which stop do you wait at?</Text>
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

function curValue(val) {
  /* if (val) {
    System.out.println("EXCUSE U LOOK HERE");
    return false;
  }
  return true;
  */
  //val ? false : true;
  return !val;
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
      tableHead: ['Stop', 'Estimated Time', 'Arrived'],
      tableData: [
        ['Kinderkamack Rd & Ralph Ave, HD', '6:32', ''],
        ['Prospect St & Ruckman Rd, RV', '6:35', ''],
        ['Rivervale Rd & Woodside Ave, RV', '6:40', ''],
        ['Winding Way & Dorchester Dr, RV', '6:41', ''],
        ['Rivervale Rd & Barr Ct, RV', '6:44', ''],
        ['Rivervale Rd & Wittich Terr, RV', '6:44', ''],
        ['Rivervale Rd & Thurnau Dr, RV', '6:45', ''],
        ['Rivervale Rd & Woodland Ct, RV', '6:45', ''],
        ['Piermont Ave & Holiday Farms, RV', '6:47', ''],
        ['Cedar La & E. Liberty Ave, RV', '6:48', ''],
        ['Cedar La & Dearest Ave, RV', '6:49', ''],
        ['Cleveland Ave & Nelson Cr, RV', '6:50', ''],
        ['Cleveland Ave & Rockland, RV', '6:50', ''],
        ['Cleveland Ave & May St, RV', '6:52', ''],
        ['Rockland & Hudson Ave, RV', '6:52', ''],
        ['Westwood Ave & Oak Ave, RV', '6:55', ''],
        ['Westwood Ave & Rivervale, RV', '6:57', ''],
        ['Rivervale Rd & Tiffany, RV', '6:58', '']
      ],
      hasArrived: ['Arrived', 'Pending']
    }
  }


  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
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

    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const element1 = () => (
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={'#f5dd4b'}
        //thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={(value) => console.log(value)}
        value={this.state.switchValue}

      />
    );



    return (

      <ScrollView style={styles.container1} >
        <Text style={{ fontFamily: 'Quicksand_300Light', fontSize: 40 }}>My Grey Knight
        </Text>
        <Table borderStyle={{ borderColor: 'transparent' }}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    //<Cell key={cellIndex} data={cellIndex === 2 ? element(cellData, index) : cellData} textStyle={styles.text} />
                    <Cell key={cellIndex} data={cellIndex === 2 ? element1(true) : cellData} textStyle={styles.text} />
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>

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
        <Stack.Screen name="SetupScreen" component={SetupScreen} />
        <Stack.Screen name="SetStopScreen" component={SetStopScreen} />
        <Stack.Screen name="SummaryScreen" component={SummaryScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;