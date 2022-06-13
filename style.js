import { processFontFamily } from "expo-font"
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
  playButtonText: {
    fontSize: 20,
    color: 'light blue',
    backgroundColor: "white",
  },
  container1: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#125e50',
  },
  head: { // head is the top of the table
    padding: 1,
    height: 60,
    backgroundColor: '#FFC300',
    fontFamily: 'Quicksand_300Light',
    fontSize: 40
  },
  text: {
    margin: 10,
    fontFamily: 'Quicksand_300Light',
    fontSize: 12

  },
  row: {
    flexDirection: 'row',
    height: 75,
    backgroundColor: '#FFF1C1'
  },
  btn: {
    width: 50,
    height: 20,
    backgroundColor: '#78B7BB',
    borderRadius: 2
  },
  btnText: {
    textAlign: 'center',
    color: '#fff'

  },
  startText: {
    fontFamily: 'Quicksand_300Light',
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff'

  },
  inputText: {
    fontFamily: 'Quicksand_300Light',
    fontSize: 20,
    textAlign: 'center',
    color: '#D3D3D3'

  }


})