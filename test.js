import { StatusBar } from 'expo-status-bar';
import { Image,  StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import bcabuslogo from './assets/bcabuslogo.png'; 
// import { AwesomeButton } from "react-awesome-button";
// import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";


import styles from "./style"


function HomeScreen() {
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

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



/*
const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: 'Bus Buddies Home',
          headerLeft: () => (
            <DrawerButton onPress={() => navigation.toggleDrawer()} />
          ),
        })}/>
      <Stack.Screen name="Second" component={SecondScreen}
        options={({ navigation }) => ({
          title: 'Bus Buddies Second',
          headerLeft: () => (
            <DrawerButton onPress={() => navigation.toggleDrawer()} />
          ),
        })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/

export default App;




/** function Button() {
  return (
    <AwesomeButton cssModule={AwesomeButtonStyles} type="primary">
      Button
    </AwesomeButton>
  );
}
*/

