import { StyleSheet, Platform, Dimensions } from 'react-native'
const FONT_FAMILY = Platform.OS === 'ios' ? 'AvenirNextCondensed-DemiBold' : 'normal'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#243447',
    },
    listContainer: {
        height: Dimensions.get('window').height * 0.38, 
        display: 'flex', 
        alignContent: 'center', 
        justifyContent: 'center', 
        marginBottom: 10,
        width: '100%'
    },
    addIcon : {
        fontSize: 45,
        color: '#25CCF7',
        padding: 10
    },
    button : {
        margin: 5,
        marginHorizontal: 5,
        padding: 10,
        borderWidth: 3,
        borderRadius: 20,
        borderColor: '#25CCF7',
        backgroundColor: '#25CCF7'
        },
    buttonText: {
        fontSize: 20,
        color: '#141d26',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textList : {
        fontSize: 28,
        padding: 5,
        fontWeight: 'bold',
        color: '#dddddd',
        textAlign: 'center',
    },
    modal: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        height: 300,
        width: 300,
        borderWidth: 2,
        borderRadius: 15,
        borderColor : '#fff',
        backgroundColor: '#243447',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleModal: {
      color: '#fff',
      fontSize: 33,
      fontFamily: FONT_FAMILY,
      textAlign: 'center',
      padding: 5,
    },
    subtextModal: {
        fontSize: 15,
        color: '#fff',
        opacity: 0.7
    },
    input: {
        fontSize: 20,
        margin: 10,
        backgroundColor: '#243447',
        width: '70%',
        height: 60
      },
      titleText : {
        fontSize: 24, 
        paddingTop: 5,
        fontWeight: 'bold',
        color: '#bdc3c7',
        textAlign: 'center'
      },
      remove: {
        textAlign: 'center', 
        fontSize: 18,
        color: '#bdc3c7',
        marginBottom: 5
    },
})