import React from 'react';
import { 
    View, 
    ScrollView, 
    Text, 
    TouchableWithoutFeedback, 
    Keyboard, 
    TouchableOpacity, 
    Animated,
} from 'react-native';

import { TextInput, Switch } from 'react-native-paper';
import { connect } from 'react-redux';

import styles from './styles.js';
import Header from '../../custom-components/Header/index.js';
import TextData from './language.js';

class RandomNumbers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            min: 0,
            max: 0,
            amount: 1,
            repetition: true,
            randomNumbers: [],
            animation: new Animated.Value(0),
        }
    }

    randomize(min, max){
        return (Math.random() * (max - min) + min).toFixed(0);
    }

    isIn(element, list) {
        for (i of list) {
            if (element == i) {
                return true;
            }
        }
        return false;
    }

    animate() {
        this.state.animation.setValue(0);
        Animated.spring( this.state.animation, {
            toValue: 1,
            friction: 7,
            useNativeDriver: true,
        }).start();
    }

    generateNumbers() {
        let { min, max, amount, repetition } = this.state;
        Keyboard.dismiss();
        if (!repetition && (amount > max - min + 1)) {
            repetition = true;
            this.setState({ repetition });
        }
        let randomized = []
        for (let i = 0; i < amount; i++) {
            let n = this.randomize(parseFloat(min), parseFloat(max));
            if (repetition) {
                randomized.push(n);
            } else {
                while (this.isIn(n, randomized)) {
                    n = this.randomize(parseFloat(min), parseFloat(max));
                }
                randomized.push(n);
            }
        }
        randomized = randomized.sort(function(a, b) {return a - b}); //JS Numerical Sort
        this.setState({randomNumbers: randomized});
        this.animate();
    }

    render() {
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <ScrollView style={{display: 'flex', backgroundColor:'#243447'}} keyboardShouldPersistTaps={'handled'}>

                    <View>
                        <Header showBackButton={true} action={() => this.props.navigation.goBack()}/>
                    </View>

                    <View style={{backgroundColor:'#243447', height:'100%'}}>

                        <Text style={styles.text}>{TextData[this.props.lang].title}</Text>

                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <TextInput
                                mode='outlined'
                                label={TextData[this.props.lang].from}
                                placeholder={TextData[this.props.lang].placeholder}
                                style={styles.input}
                                keyboardType='numeric'
                                onChangeText={(txt) => this.setState({min: txt})}
                            />
                            
                            <TextInput
                                mode='outlined'
                                label={TextData[this.props.lang].to}
                                placeholder={TextData[this.props.lang].placeholder}
                                style={styles.input}
                                keyboardType='numeric'
                                onChangeText={(txt) => this.setState({max: txt})}
                            />
                        </View>

                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <TextInput 
                                mode='outlined'
                                label={TextData[this.props.lang].howMany}
                                placeholder={TextData[this.props.lang].placeholder}
                                style={styles.input}
                                keyboardType='numeric'
                                onChangeText={(txt) => this.setState({amount: txt})}
                            />

                            <View style={styles.switchContainer}>
                                <Text style={styles.switchText}>{TextData[this.props.lang].repetition}</Text>
                                <Switch 
                                    value={this.state.repetition}
                                    onValueChange={() => this.setState({ repetition: !this.state.repetition })}
                                    color='#25CCF7'
                                    disabled={false}
                                />
                            </View>    
                        </View>

                        <View style={{marginTop: 30, marginBottom: 30, marginLeft: 30, marginRight: 30}}>
                            <TouchableOpacity style={styles.button} onPress={() => this.generateNumbers()}><Text style={styles.buttonText}>{TextData[this.props.lang].generate}</Text></TouchableOpacity>
                        </View>

                        <Animated.View style={{alignItems: 'center', justifyContent: 'center', transform: [{scale: this.state.animation}]}}>
                            <Text style={[styles.title, {fontSize : 78, fontWeight: 'bold'}]}>{this.state.randomNumbers.join(', ')}</Text>
                        </Animated.View>

                    </View>
                    
                </ScrollView>
            </TouchableWithoutFeedback>
        );
    }
}

export default connect(state => ({lang: state.lang}))(RandomNumbers);
