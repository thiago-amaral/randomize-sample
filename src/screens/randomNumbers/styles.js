import { StyleSheet, Platform } from 'react-native'
const FONT_FAMILY = Platform.OS === 'ios' ? 'AvenirNextCondensed-DemiBold' : 'normal'

export default StyleSheet.create({
    title : {
      fontSize: 35,
      fontFamily: FONT_FAMILY,
      color: 'white',
      textAlign: 'center'
    },
    switchText : {
      fontSize: 20,
      color: '#fff',
      fontWeight: 'bold',
      padding: 5
    },
    text : {
      fontSize: 24, 
      padding: 10,
      fontWeight: 'bold',
      color: '#bdc3c7',
      textAlign: 'center'
    },
    button : {
      borderWidth: 3,
      borderRadius: 20,
      borderColor: '#25CCF7',
      backgroundColor: '#25CCF7'
    },
    buttonText : {
      color: '#141d26',
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    input: {
      fontSize: 20,
      margin: 10,
      backgroundColor: '#243447',
      width: '42%',
      height: 60
    },
    switchContainer : {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '42%',
      height: 60,
      margin: 10,
      
    },
  });
  