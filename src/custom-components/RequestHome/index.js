import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
  Modal,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { connect } from 'react-redux';

import Header from '../../custom-components/Header/index.js';
import TextData from './language.js';
import styles from './styles.js';

class Service extends React.Component {
  state = {
    animation: new Animated.Value(1),
    helpVisible: false,
    loading: false,
    loadingText: TextData[this.props.lang].noPending,
    home: true,
    data: [],
  }

  startAnimation() {
    Animated.spring(this.state.animation, {
      toValue: 0.75,
      bounciness: 15,
    }).start();
  }

  endAnimation() {
    Animated.spring(this.state.animation, {
      toValue: 1,
      bounciness: 15,
    }).start();
  }

  codeToStatus(code) {
    switch (code) {
      case 1:
        return {
          label: TextData[this.props.lang].code_1,
          color: '#FFA500',
        };

      case 2:
        return {
          label: TextData[this.props.lang].code_2,
          color: '#D3DF0B',
        };

      case 3:
        return {
          label: TextData[this.props.lang].code_3,
          color: '#05C955',
        };

      case 4:
        return {
          label: TextData[this.props.lang].code_4,
          color: '#F80B0B',
        };

    }
  }

  async refresh() {
    this.setState({ loading: true, loadingText: TextData[this.props.lang].loading });

    try {
      console.log(Constants.installationId)
      const request = await fetch(`https://thiagoamaral.pythonanywhere.com/${Constants.installationId}`);
      const response = await request.json();
      this.setState({ data: response });
    } catch (e) {
      Alert.alert(TextData[this.props.lang].networkTitle, TextData[this.props.lang].networkMessage);
    }

    this.setState({ loading: false, loadingText: TextData[this.props.lang].noPending });
  }

  async componentDidMount() {
    this.startAnimation();
    await this.refresh();
    this.endAnimation();

    this._interval = setInterval(async () => {
      await this.refresh();
    }, 15000);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container} style={{ backgroundColor: '#243447' }}>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.helpVisible}
        >
          <TouchableWithoutFeedback onPress={() => this.setState({ helpVisible: false })}>
            <View style={styles.modal}>
              <Text maxFontSizeMultiplier={1.1} style={styles.modalTitle}>{TextData[this.props.lang].troubleTitle}</Text>
              <Text maxFontSizeMultiplier={1.1} style={styles.modalText}>{TextData[this.props.lang].troubleText}</Text>
              <Text maxFontSizeMultiplier={1.1} style={styles.modalClose}>{TextData[this.props.lang].troubleClose}</Text>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <Header />
        <Text style={styles.titleText}>Randomization Service</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity disabled={this.state.loading} onPress={() => this.props.action()} style={styles.button}><Text style={styles.btnText}>{TextData[this.props.lang].newRequest}</Text></TouchableOpacity>
          <TouchableOpacity onPress={async () => {
            this.startAnimation();
            await this.refresh();
            this.endAnimation();
          }}>
            <MaterialIcons name={'refresh'} color={'#FFF'} size={33} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({ helpVisible: true })}><MaterialIcons name={'help'} color={'#FFF'} size={30} style={styles.icon} /></TouchableOpacity>
        </View>
        {this.state.data.length != 0

          ? this.state.data.map(obj => {
            return (
              <Animated.View style={[styles.requestList, { transform: [{ scale: this.state.animation }] }]} key={obj.id}>
                <Text style={styles.title}>{obj.title}</Text>
                <Text style={styles.email}>{obj.email}</Text>
                <View style={styles.separator} />
                <Text style={[
                  styles.statusCode,
                  { color: this.codeToStatus(obj.status_code).color }
                ]
                }>
                  Status: {this.codeToStatus(obj.status_code).label}
                </Text>
              </Animated.View>
            )
          })

          : <View style={styles.requestList}><Text style={styles.noPending}>{this.state.loadingText}</Text></View>}

      </ScrollView>
    );
  }
}

export default connect(state => ({ lang: state.lang }))(Service);
