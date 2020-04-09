import React, { Component } from 'react';
import { 
  View, 
  FlatList, 
  Text, 
  TouchableOpacity, 
  TouchableWithoutFeedback,
  Modal,
  Animated,
} from 'react-native';

import Header from '../../custom-components/Header/index.js';
import TextData from './language.js';
import { connect } from 'react-redux';
import styles from './styles.js';

class RandomTable extends Component {
  size = 198;

  state = {
    modalVisible: false,
    table: this.generateTable(this.size),
    springAnimation: new Animated.Value(1),
  }

  generateTable(size) {
    let table = [];
    for (let i = 0; i < size; i++) {
        table.push((Math.random() * (9 - 0) + 0).toFixed(0));
    }
    return table;
  }

  refresh() {
    this.state.springAnimation.setValue(0)
    this.setState({ table: this.generateTable(this.size) })
    Animated.spring(this.state.springAnimation, {
        toValue: 1,
        bounciness: 25,
        useNativeDriver: true
    }).start()
  }

  render() {
    return (
        <View style={styles.container}>
            <Modal 
                animationType={"slide"}
                transparent={true} 
                visible={this.state.modalVisible}
            >
                <TouchableWithoutFeedback onPress={() => this.setState({modalVisible: false})}>
                    <View style={styles.modal}>
                        <Text maxFontSizeMultiplier={1} style={styles.modalTitle}>{TextData[this.props.lang].modalTitle}</Text>
                        <Text maxFontSizeMultiplier={1} style={styles.modalText}>{TextData[this.props.lang].modalText}</Text>
                        <Text maxFontSizeMultiplier={1} style={styles.modalClose}>{TextData[this.props.lang].modalClose}</Text>
                    </View>
                </TouchableWithoutFeedback>
              </Modal>

            <Header showBackButton={true} action={() => this.props.navigation.goBack()}/>
            <Text style={styles.title}>{TextData[this.props.lang].title}</Text>
            <View style={styles.mockFlatList}/>

            <FlatList
              initialNumToRender={this.size}
              data={this.state.table}
              renderItem={({item}) => 
              <Animated.Text maxFontSizeMultiplier={1.4} style={[styles.item, {transform: [{scale: this.state.springAnimation}]}]}>{item}</Animated.Text>}
              keyExtractor={(item, index) => index.toString()}
              numColumns={9}
              getItemLayout={(data, index) => (
                {length: 37, offset: 37 * index, index})}
            />

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => this.refresh()}><Text style={styles.buttonText}>{TextData[this.props.lang].new}</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({ modalVisible: true })}><Text style={styles.buttonText}>{TextData[this.props.lang].doubts}</Text></TouchableOpacity>
            </View>
        </View>
    );
  }
}


export default connect(state => ({lang: state.lang}))(RandomTable);
