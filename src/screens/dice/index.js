import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Image 
} from 'react-native';

import Header from '../../custom-components/Header/index.js';
import TextData from './language.js';
import { connect } from 'react-redux';
import styles from './styles.js'


class Dice extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            activeButton: 1,

            buttonRoll : 
            <TouchableOpacity onPress={() => this.handleDiceChange()} style={[{marginBottom: 25, marginLeft: 30, marginRight: 30}, styles.button]}>
                <Text style={styles.buttonText}>{TextData[this.props.lang].roll}</Text>
            </TouchableOpacity>,

            buttonHide: 
            <TouchableOpacity onPress={() => this.handleHideDice()} style={[{marginBottom: 25, marginLeft: 30, marginRight: 30}, styles.buttonRed]}>
                <Text style={styles.buttonTextRed}>{TextData[this.props.lang].hide}</Text>
            </TouchableOpacity>,

            shownImage: require('../../../assets/image-files/dado_INT.png'),

            images: [
                require('../../../assets/image-files/dado_UM.png'),
                require('../../../assets/image-files/dado_DOIS.png'),
                require('../../../assets/image-files/dado_TRES.png'),
                require('../../../assets/image-files/dado_QUATRO.png'),
                require('../../../assets/image-files/dado_CINCO.png'),
                require('../../../assets/image-files/dado_SEIS.png')
            ]
        }
    }

    rollDice() {
        return (Math.random() * (5 - 0) + 0).toFixed(0)
    }

    handleDiceChange() {
        this.setState({shownImage: this.state.images[this.rollDice()], activeButton: 0})
    }

    handleHideDice() {
        this.setState({shownImage: require('../../../assets/image-files/dado_INT.png')})
        this.setState({activeButton: 1})
    }

    render(){
        return(
            <View style={styles.container}>
                <Header showBackButton={true} action={() => this.props.navigation.goBack()}/>
                <Text style={styles.titleText}>{TextData[this.props.lang].title}</Text>

                    <View style={{marginTop: 15, alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{height: 250, width: 250, borderRadius: 50}} source={this.state.shownImage} />
                    </View>
                    
                    <View style={{marginTop: 35}}>
                        {this.state.activeButton == 1 ? this.state.buttonRoll : this.state.buttonHide}
                    </View>
            </View>
        )
    }
}

export default connect(state => ({lang: state.lang}))(Dice);
