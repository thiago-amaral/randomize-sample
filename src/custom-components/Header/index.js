import React from 'react';
import { SafeAreaView, Image, View, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

import logo from '../../../assets/image-files/icon-text.png';
import styles from './styles.js';

const backButton = <Icon style={styles.backButton} name={'ios-arrow-back'} size={30}/>


export default function Header(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sideBoxes}>
        {props.showBackButton ? <TouchableOpacity onPress={props.action}>{backButton}</TouchableOpacity>: null}
      </View>
      <Image style={styles.logo} source={logo} />
      <View style={styles.sideBoxes}></View>
    </SafeAreaView>
  );
}
