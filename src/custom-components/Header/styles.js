import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#141D26',
        flexDirection: 'row',
    },
    logo: {
        width: 112,
        height: 50,
    },
    sideBoxes: {
        flex: 1,
        width: 100,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    backButton: {
        color: '#FFF',
        margin: 15,
    }
});