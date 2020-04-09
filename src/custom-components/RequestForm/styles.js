import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#141D26',
    },
    title: {
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginHorizontal: 10,
        marginVertical: 20
    },
    inputText: {
        color: '#FFF',
        fontSize: 22,
        marginHorizontal: 10,
    },
    label: {
        color: '#25CCF7',
        fontSize: 26,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    inputContainer: {
        flexDirection: 'column',
        marginHorizontal: 10,
        marginVertical: 10,
        width: '95%',
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 15,
        padding: 5,
    },
    buttonContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 15,
        width: '95%',
        marginVertical: 15,
        marginBottom: 50,
        backgroundColor: '#FFF',
    },
    buttonTitle: {
        fontSize: 22,
        padding: 5,
        fontWeight: 'bold',
        color: '#000'
    },
});