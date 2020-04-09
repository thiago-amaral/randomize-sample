import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#243447',
  },
  button : {
    width: 300,
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
  buttonRed : {
    width: 300,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: '#ff5252',
    backgroundColor: '#ff5252'
  },
  buttonTextRed : {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleText : {
    fontSize: 24, 
    padding: 10,
    fontWeight: 'bold',
    color: '#bdc3c7',
    textAlign: 'center'
  },
});
