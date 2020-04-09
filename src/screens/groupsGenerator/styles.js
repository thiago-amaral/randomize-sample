import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column', 
    alignItems: 'center', 
    backgroundColor: '#243447'
  },
  inputContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginBottom: 25
  },
  input: {
    fontSize: 20,
    margin: 10,
    backgroundColor: '#243447',
    width: '42%',
    height: 60
  },
  button : {
    width: '80%',
    borderWidth: 3,
    borderRadius: 20,
    borderColor: '#25CCF7',
    backgroundColor: '#25CCF7',
    marginBottom: 35, 
    marginLeft: 30, 
    marginRight: 30,
  },
  buttonText : {
    color: '#141d26',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  groups : {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
    borderColor: '#25CCF7',
    borderWidth: 4,
    borderRadius: 10,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,  
  },
  titleText : {
    fontSize: 24, 
    padding: 10,
    fontWeight: 'bold',
    color: '#bdc3c7',
    textAlign: 'center'
  },
});
