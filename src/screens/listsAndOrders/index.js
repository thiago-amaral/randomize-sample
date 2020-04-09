import React from 'react';
import { 
    View, 
    TouchableOpacity, 
    TouchableWithoutFeedback, 
    Text, FlatList, 
    Animated, 
    Modal 
} from 'react-native';

import Header from '../../custom-components/Header/index.js';
import Icon from '@expo/vector-icons/Ionicons';
import TextData from './language.js';
import styles from './styles.js';
import { connect } from 'react-redux';

import { TextInput } from 'react-native-paper'

class List extends React.Component{

    constructor(props) {
        super(props)
        this.array = []
        this.state = {
            data : [],
            inputText: '',
            name: '',
            modalVisible : false,
            opacity: 1,
            animation: new Animated.Value(1),
        }
    }

    addName() {
        this.textInput.clear();
        let badInput = false;
        for(i of this.state.data) {
            if(this.state.inputText.trim() == i) {
                badInput = true;
                break;
            }
        }
        if(this.state.inputText.trim() != '' && !badInput) {
            this.array.push(this.state.inputText.trim());
            this.setState({ data: [...this.array] });
            this.setState({inputText: ''});
        }
    }

    renderSeparator() {
        return <View style={{height: 1, backgroundColor: '#141d26', width: 180, alignSelf: 'center'}} />
    }

    componentDidMount() {
        this.setState({ data: [...this.array] });
    }

    shuffle(array=this.state.data){
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }    
        this.array = array;
        this.animate();
        this.setState({ data: [...this.array] });
    }

    pickAName(){
        const namePicked = this.state.data[(Math.random() * ((this.state.data.length - 1) - 0) + 0).toFixed(0)];
        this.setState({modalVisible: true, name: namePicked, opacity: 0.9});
    }

    deleteItem(value) {
        let newData = [...this.state.data];
        const index = newData.indexOf(value);
        if (index > -1) {    
            newData.splice(index, 1);
        }
        this.setState({data: newData});
        this.array = newData;
    }

    animate() {
        this.state.animation.setValue(0);
        Animated.spring(this.state.animation, {
            toValue: 1,
            friction: 7,
        }).start();
    }

    render(){
        return(
            <View style={[styles.container, { opacity: this.state.opacity }]}>
                <Modal 
                    animationType={"slide"}
                    transparent={true} 
                    visible={this.state.modalVisible}
                >
                    <TouchableWithoutFeedback onPress={() => this.setState({modalVisible: false, opacity: 1})}>
                        <View style={styles.modal}>
                            <View style={styles.modalView}>
                                <Text style={styles.titleModal}>{this.state.name}</Text>
                                <Text style={styles.subtextModal}>{TextData[this.props.lang].close}</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>

                <Header showBackButton={true} action={() => this.props.navigation.goBack()}/>
                <Text style={styles.titleText}>{TextData[this.props.lang].title}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 5}}>
                    <TextInput 
                        mode='outlined'
                        label={TextData[this.props.lang].placeholder}
                        placeholder={TextData[this.props.lang].placeholder}
                        style={styles.input}
                        onChangeText={(txt) => this.setState({inputText: txt})} 
                        ref={input => this.textInput = input} 
                    />
                    <TouchableOpacity onPress={() => this.addName()}><Icon style={styles.addIcon} name="ios-add-circle-outline" /></TouchableOpacity>
                </View>
                <View style={styles.listContainer}>
                    <FlatList 
                    style={{backgroundColor: '#364659'}}
                    contentContainerStyle={{ alignItems: 'center' }}
                    numRows={3}
                    data={this.state.data}
                    extraData={this.state}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) =>  {
                        return (<TouchableWithoutFeedback style={{width: '100%'}} onLongPress={() => this.deleteItem(item)}><Animated.Text style={ [styles.textList, {transform: [{scale: this.state.animation}]}] }>{item}</Animated.Text></TouchableWithoutFeedback>)
                    }}
                    ItemSeparatorComponent={() => this.renderSeparator()}
                    />
                </View>
                <Text style={styles.remove}>{TextData[this.props.lang].remove}</Text>
                <View style={{flexDirection: 'row', alignContent: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => this.pickAName()} style={styles.button}><Text maxFontSizeMultiplier={1} style={styles.buttonText}>{TextData[this.props.lang].pickName}</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.shuffle()} style={styles.button}><Text maxFontSizeMultiplier={1} style={styles.buttonText}>{TextData[this.props.lang].randomOrder}</Text></TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default connect(state => ({lang: state.lang}))(List);
