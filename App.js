import { StatusBar } from 'expo-status-bar';
import { Image,  StyleSheet, TouchableOpacity, Text, View } from 'react-native';
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
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
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
    marginBottom: 10,
  },
  title: {
  color: '#ffffff', 
  fontSize: 40} 
});

