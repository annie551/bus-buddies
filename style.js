import { processFontFamily } from "expo-font"
import { useFonts, Quicksand_300Light } from '@expo-google-fonts/quicksand';
import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#125e50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 305,
    marginBottom: 0,
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
    fontFamily: 'Quicksand_300Light', 
    fontSize: 40,
    color: 'white',
    marginBottom: 10
  },
  head: { // head is the top of the table
    padding: 10,
    paddingLeft: 10,
    height: 60,
    backgroundColor: '#FFC300',
    //fontFamily: 'Quicksand_300Light',
    fontSize: 40
  },
  tableHeadText: {
    fontSize: 20
  },
  text: {
    margin: 10,
    //fontFamily: 'Quicksand_300Light',
    fontSize: 16

  },
  row: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#FFF1C1'
  },
  tableButtons: {
    backgroundColor: '#78B7BB',
    borderRadius: 2,
    textAlign: 'right',
    //fle-xDirection: 'row', 
    //justifyContent: 'flex-end'
  },
    btnText: {
    textAlign: 'center',
    color: '#fff'

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
  }

})