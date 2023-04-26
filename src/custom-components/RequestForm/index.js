import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Constants from 'expo-constants';
import * as Crypto from 'expo-crypto';
import { Switch } from 'react-native-paper';

import Header from '../Header/index.js';
import styles from './styles';

export default class RequestForm extends React.Component {
  state = {
    title: '',
    description: '',
    email: '',
    emailConfirmation: '',
    samples: 1,
    csv: true,
    token: ''
  }

  tokenToState(tkn) {
    this.setState({ token: tkn });
  }

  async getToken(method, uuid, title) {
    const AUTH = '31415926535897932384626#2.718281828459045';
    const token = method + uuid + title + AUTH;
    let tokenSHA256 = '';

    try {
      tokenSHA256 = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        token
      );

      return tokenSHA256;

    } catch (e) {
      return tokenSHA256;
    }

  }

  clearState() {
    this.setState({
      title: null,
      description: null,
      email: null,
      emailConfirmation: null,
      samples: 1,
      csv: true,
    });
  }

  emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  validate(state) {
    if (state.title.length === 0 || state.description.length === 0 || state.email.length === 0 || state.emailConfirmation.length === 0) {
      return 'Please fill all fields.';
    } else if (!this.emailIsValid(state.email)) {
      return 'Please enter a valid email address.';
    } else if (isNaN(state.samples)) {
      return 'Your amount of samples need to be a number.';
    } else if (state.samples > 2147483647) {
      return 'Sorry, you asked for too many samples! (Maximum is 2147483647)';
    } else if (state.samples < 1) {
      return 'Sorry, you have to ask for at least 1 sample!';
    } else if (state.email != state.emailConfirmation) {
      return 'Check if you typed your email correctly! Confirmation does not match!';
    } else if (!this.state.token) {
      return 'An error occured'
    } else {
      return '';
    }

  }

  async sendRequest() {
    await this.getToken('POST', Constants.installationId, this.state.title).then(
      tkn => this.tokenToState(tkn)
    );
    const validation = this.validate(this.state);

    if (validation.length != 0) {
      Alert.alert('Error', validation);
    } else {
      try {

        const req = {
          title: this.state.title,
          description: this.state.description,
          email: this.state.email,
          amount: parseInt(this.state.samples),
          csv: this.state.csv,
          token: this.state.token
        }

        const rawResp = await fetch(`https://thiagoamaral.pythonanywhere.com/${Constants.installationId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(req)
        });

        const response = await rawResp.json();

        if (response === 'Success') {
          Alert.alert('Success', 'Request sent successfuly, now you can see it in your requests page.');
        } else {
          Alert.alert('Error', 'Something went wrong, please try again later. If this error persists contact our support.');
        }

        this.clearState();

      } catch (e) {
        Alert.alert('Network error', 'Check your internet connection');
      }
    }
  }

  render() {
    let { props } = this;
    return (
      <ScrollView contentContainerStyle={styles.container} style={{ backgroundColor: '#141D26' }}>
        <Header showBackButton={true} action={() => props.action()} />
        <Text style={styles.title}>Randomization Request</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.inputText}
            placeholder={'Title for your request.'}
            placeholderTextColor={'#888'}
            maxLength={2000}
            multiline={true}
            value={this.state.title}
            onChangeText={text => this.setState({ title: text })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.inputText}
            placeholder={'Detailed description of your request. Include all information necessary.'}
            placeholderTextColor={'#888'}
            maxLength={8000}
            multiline={true}
            value={this.state.description}
            onChangeText={text => this.setState({ description: text })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.inputText}
            placeholder={'Email to send result files.'}
            placeholderTextColor={'#888'}
            maxLength={1100}
            multiline={true}
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email Confirmation</Text>
          <TextInput
            style={styles.inputText}
            placeholder={'Confirm the email typed above.'}
            placeholderTextColor={'#888'}
            maxLength={1100}
            multiline={true}
            value={this.state.emailConfirmation}
            onChangeText={text => this.setState({ emailConfirmation: text })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Samples</Text>
          <TextInput
            style={styles.inputText}
            placeholder={'How many randomized samples would you like?'}
            placeholderTextColor={'#888'}
            maxLength={10}
            multiline={true}
            value={this.state.samples.toString()}
            onChangeText={text => this.setState({ samples: text })}
            keyboardType={'numeric'}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>CSV</Text>
          <Text style={[styles.inputText, { color: '#888' }]}
          >Would you like a CSV file with your results?</Text>
          <Switch
            value={this.state.csv}
            onValueChange={() => this.setState({ csv: !this.state.csv })}
            color='#25CCF7'
            style={{ alignSelf: 'center' }}
          />
        </View>

        <TouchableOpacity onPress={() => this.sendRequest()} style={styles.buttonContainer}><Text style={styles.buttonTitle}>SEND</Text></TouchableOpacity>

      </ScrollView>
    );
  }
}
