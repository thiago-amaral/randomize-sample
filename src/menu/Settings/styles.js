import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#141D26',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'left',
        paddingVertical: 30,
        paddingHorizontal: 10,
    },
    pickerContainer: {
        flex:1, 
        justifyContent: 'flex-end'
    },
    close: {
        color: '#FFF', 
        fontSize: 20,
    },
    version: {
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
        padding: 20
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
        marginTop: 50
    },
    modalText: {
        textAlign: 'left',
        fontSize: 20,
        color: '#FFF',
        marginHorizontal: 10,
    },
    modalClose: {
        textAlign: 'center',
        fontSize: 20,
        color: '#25CCF7',
        marginHorizontal: 10,
        marginBottom: 10,
    },
});