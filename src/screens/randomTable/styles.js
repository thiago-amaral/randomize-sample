import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#243447',
    },
    title : {
        fontSize: 22, 
        margin: 5,
        fontWeight: 'bold',
        color: '#bdc3c7',
        textAlign: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: '#25CCF7',
        textAlign: 'center',
        marginVertical: 5,
        marginHorizontal: 10,
    },
    item: {
        width: 40,
        height: 40,
        textAlign: 'center',
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
        
    },
    modal: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#141D26',
    },
    modalTitle: {
        textAlign: 'center',
        fontSize: 34,
        color: '#25CCF7',
        marginHorizontal: 10,
        marginTop: 20
    },
    modalText: {
        textAlign: 'left',
        fontSize: 18,
        color: '#FFF',
        marginHorizontal: 10,
    },
    modalClose: {
        textAlign: 'center',
        fontSize: 20,
        color: '#25CCF7',
        marginHorizontal: 10,
        marginBottom: 3,
    },
     
});
