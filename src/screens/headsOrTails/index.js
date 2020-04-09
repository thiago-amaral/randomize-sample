import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';

import Header from '../../custom-components/Header/index.js';
import TextData from './language.js';
import { connect } from 'react-redux';
import styles from './styles.js';


class HeadsOrTails extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            activeButton: 1,
            animation: new Animated.Value(0),

            buttonFlip : 
            <TouchableOpacity onPress={() => this.handleCoinChange()} style={[{marginBottom: 25, marginLeft: 30, marginRight: 30}, styles.button]}>
                <Text style={styles.buttonText}>{TextData[this.props.lang].toss}</Text>
            </TouchableOpacity>,

            buttonHide: 
            <TouchableOpacity onPress={() => this.handleHideCoin()} style={[{marginBottom: 25, marginLeft: 30, marginRight: 30}, styles.buttonRed]}>
                <Text style={styles.buttonTextRed}>{TextData[this.props.lang].hide}</Text>
            </TouchableOpacity>,

            shownImage: require('../../../assets/image-files/mistery_coin.jpg'),

            images: [ 
                require('../../../assets/image-files/heads_coin.jpg'),
                require('../../../assets/image-files/tails_coin.jpg')
            ]
        }
    }

    flipCoin() {
        return (Math.random() * (1 - 0) + 0).toFixed(0);
    }

    handleCoinChange() {
        Animated.timing(this.state.animation, {
            toValue: 360,
            duration: 1000,
        }).start(() => this.setState({shownImage: this.state.images[this.flipCoin()], activeButton: 0}));
    }

    handleHideCoin() {
        Animated.timing(this.state.animation, {
            toValue: 0,
            duration: 1000,
        }).start(() => {
            this.setState({shownImage: require('../../../assets/image-files/mistery_coin.jpg')});
            this.setState({activeButton: 1});
        });
    }

    render(){
        const rotateInterpolate = this.state.animation.interpolate({
            inputRange: [0, 360],
            outputRange: ["0deg", "360deg"],
        });

        const animatedStyle = {
            transform: [
                {
                    rotateY: rotateInterpolate
                }
            ]
        }

        return(
            <View>
                <View>
                    
                    <View>
                    <Header showBackButton={true} action={() => this.props.navigation.goBack()}/>
                    </View>

                    <View style={{backgroundColor: '#243447', height: '100%'}}>

                        <Text style={styles.titleText}>{TextData[this.props.lang].title}</Text>

                        <View style={{marginTop: 5, alignItems: 'center', justifyContent: 'center'}}>
                            <Animated.Image style={[{height: 300, width: 300, borderRadius: 150}, animatedStyle]} source={this.state.shownImage} />
                        </View>
                        
                        <View style={{marginTop: 25}}>
                            {this.state.activeButton == 1 ? this.state.buttonFlip : this.state.buttonHide}
                        </View>

                    </View>

                </View>
            </View>
        )
    }
}

export default connect(state => ({lang: state.lang}))(HeadsOrTails);
