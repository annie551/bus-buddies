import { processFontFamily } from "expo-font"
import { useFonts, Jost_400Regular } from '@expo-google-fonts/jost';
import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#125e50',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  questionContainer1: {
    flex: 1,
    paddingBottom: 150,
    backgroundColor: '#125e50',
    //alignItems: 'center',
    justifyContent: 'center',

  },

  skylineLogo: {
    width: 300,
    height: 110,
  },
  redstop: {
    width: 300,
  },
  logo: {
    width: 305,
    height: 305,
    marginBottom: 20,
  },
  homeScreenTitle: {
    color: '#ffffff',

    fontSize: 40,
    marginBottom: 15,
  },
  playButton: {
    backgroundColor: "light blue",
    padding: 20,
    borderRadius: 25,

  },
  container1: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#125e50',
  },
    tableTitle: {
    fontFamily: 'Jost_400Regular', 
    fontSize: 40,
    color: 'white',
    marginBottom: 10
  },
  head: { // head is the top of the table
    height: 60,
    backgroundColor: '#FFC300',
    //fontFamily: 'Jost_400Regular',
    fontSize: 40
  },
  tableHeadText: {
    padding: 10,
    fontSize: 24,
    fontFamily: 'Jost_400Regular',

  },
  tableText: {
    margin: 15,
    fontFamily: 'Jost_400Regular',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: '#FFF1C1'
  },
  tableButtons: {
    backgroundColor: '#78B7BB',
    borderRadius: 2,
    textAlign: 'right',
    texfontFamily: 'Jost_400Regular',
    //fle-xDirection: 'row', 
    //justifyContent: 'flex-end'
  },
  navigationButtons: {
    backgroundColor: "#1480a3",
    borderColor: "white",
    type: "primary",
},
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  setUpScreen: {
    fontSize: 10
  },
  questionTexts: {
    fontSize: 24,
    color: "white",
    paddingTop: 20,
    paddingBottom: 10,
    
  },
  inputText: {
    color: "white",
    placeholderTextColor: "white",
    height: 40,
    borderColor: "white",
    borderBottomWidth: 1,
    marginBottom: 36,
    fontSize: 15,
  },


  

})