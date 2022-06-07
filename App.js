import { StatusBar } from 'expo-status-bar';
import { Image,  StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import bcabuslogo from './assets/bcabuslogo.png'; 
// import { AwesomeButton } from "react-awesome-button";
// import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";


import styles from "./style"

function HomeScreen( {navigation} ) {
  return (
    <View style={styles.container}>
      <Image source={bcabuslogo} style={styles.logo} /> 
      <Text style={styles.title} >Bus Buddies!</Text>

      <Button
        onPress={() => navigation.navigate('SecondScreen')}
        style={styles.playButton}>
        <Text style={styles.playButtonText}>Pick a photo</Text>
      </Button>

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


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>

        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;




/** function Button() {
  return (
    <AwesomeButton cssModule={AwesomeButtonStyles} type="primary">
      Button
    </AwesomeButton>
  );
}
*/

