import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#25CCF7',
        margin: 10,
        padding: 5,
    },
    flatList: {
        width: Dimensions.get('window').width
    },
    title: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 25,
        color: '#FFF',
        paddingHorizontal: 10,
        paddingVertical: 3,
        flex: 1,
    },
    
});