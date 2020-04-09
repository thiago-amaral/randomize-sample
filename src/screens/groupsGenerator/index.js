import React from 'react';
import { 
  Keyboard, 
  Text, 
  View,  
  TouchableOpacity, 
  FlatList, 
  Animated,
} from 'react-native';

import { TextInput } from 'react-native-paper';
import { connect } from 'react-redux';

import Header from '../../custom-components/Header/index.js';
import TextData from './language.js';
import styles from './styles.js';


class GroupsGenerator extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      people: null,
      groups: null,
      groupsArray: [],
      animation: new Animated.Value(0),
    }
  }
  
  animate() {
    this.state.animation.setValue(0)
    Animated.spring( this.state.animation, {
        toValue: 1,
        bounciness: 15,
        useNativeDriver: true,
    }).start();
  }

  handleScreen(numOfPeople, numOfGroups) {
    let screenOutput;
    if (numOfPeople > 7000 || numOfGroups > 4000) {
      Keyboard.dismiss();
      screenOutput = [['Sorry, this is too large!']];
    } else {
      screenOutput = this.sortGroups(numOfPeople, numOfGroups);
    }
    this.setState({groupsArray: screenOutput});
    this.animate();
  }

  randomize(min, max){
    return (Math.random() * (max - min) + min).toFixed(0);
  }

  generateEmptyGroups(numOfGroups) {
    let emptyGroups = [];

    for (let i = 0; i < numOfGroups; i++) {
        emptyGroups.push([]);      
    }

    return emptyGroups;
  }

  generateNumbersArray(n) {
    let numbers = [];

    for (let i = 1; i <= n; i++) {
      numbers.push(i);
    }

    return numbers;
  }

  sortGroups(numOfPeople, numOfGroups) {
    Keyboard.dismiss();
    numOfPeople = Math.ceil(parseFloat(numOfPeople));
    numOfGroups = Math.ceil(parseFloat(numOfGroups));

    if (isNaN(parseInt(numOfPeople)) || 
        isNaN(parseInt(numOfGroups)) || 
        numOfPeople == 0 || 
        numOfGroups == 0 ||
        numOfGroups > numOfPeople) {
      return [['Invalid input']];
    }
    
    let groups = this.generateEmptyGroups(numOfGroups);
    let numbers = this.generateNumbersArray(numOfPeople);

    const integerDivision = Math.floor(numOfPeople/numOfGroups);
    
    for (i of groups) {
      for (let j = 0; j < integerDivision; j++) {
        const n = this.randomize(0, numbers.length - 1);
        i.push(numbers[n]);
        numbers.splice(n, 1);
      }
    }
    
    let g = 0;
    while (numbers.length != 0) {
      const n = this.randomize(0, numbers.length - 1);
      groups[g].push(numbers[n]);
      numbers.splice(n, 1);
      g++;
    }
    
    let displayGroups = [];
    for (i of groups) {
      displayGroups.push(i.sort(function(a, b) { return a - b })) ;
      // Pushes numerically sorted array
    }
    return displayGroups;
  }

  render() {
    return (
      <View style={styles.container} keyboardShouldPersistTaps={'handled'}>
        <Header showBackButton={true} action={() => this.props.navigation.goBack()}/>
        <Text style={styles.titleText}>{TextData[this.props.lang].title}</Text>
        <View style={styles.inputContainer}>
          <TextInput 
            mode='outlined'
            label={TextData[this.props.lang].people}
            placeholder={TextData[this.props.lang].enterTot}
            style={styles.input}
            keyboardType='numeric'
            onChangeText={text => this.setState({people:text})}
          />
          
          <TextInput 
            mode='outlined'
            label={TextData[this.props.lang].groups}
            placeholder={TextData[this.props.lang].enterNum}
            style={styles.input}
            keyboardType='numeric'
            onChangeText={text => this.setState({groups:text})}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => this.handleScreen(this.state.people, this.state.groups)}><Text style={styles.buttonText}>{TextData[this.props.lang].sortGroups}</Text></TouchableOpacity>
        <FlatList   
          style={{width: '90%'}}  
          data={this.state.groupsArray}
          renderItem={({item}) =>  {
            return (<Animated.Text style={[styles.groups, {transform: [{scale: this.state.animation}]}]}>{item.join(', ')}</Animated.Text>)
          }}
          keyExtractor={item => this.state.groupsArray.indexOf(item).toString()}
        />
      </View>
    );
  }
}

export default connect(state => ({lang: state.lang}))(GroupsGenerator);
