import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#243447',
    },
    titleText : {
        fontSize: 24, 
        paddingTop: 10,
        fontWeight: 'bold',
        color: '#bdc3c7',
        textAlign: 'center'
    },
    buttonsContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    icon: {
        padding: 20,
    },
    button: {
        borderWidth: 3,
        borderColor: '#25CCF7',
        borderRadius: 20,
        marginVertical: 10,
        backgroundColor: '#25CCF7',
    },
    btnText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#243447',
        padding: 10,
    },
    noPending: {
        fontSize: 24,
        color: '#FFF',
        paddingVertical: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    separator: {
        height: 1,
        width: '95%',
        backgroundColor: '#BDC3C7',
        alignSelf: 'center',
    },
    requestList: {
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#25CCF7',
        margin: 10,
        padding: 5,
        width: '95%',
    },
    title: {
        fontSize: 20,
        color: '#FFF',
        marginVertical: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    email: {
        fontSize: 20,
        marginVertical: 3,
        color: '#BDC3C7',
        textAlign: 'center',
    },
    statusCode: {
        fontSize: 20,
        color: '#FFF',
        padding: 15,
        fontWeight: 'bold',
        textAlign: 'center',
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
        textAlign: 'center',
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