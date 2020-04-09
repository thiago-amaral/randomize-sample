import React from 'react';
import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles.js';

import RN from '../../../assets/image-files/RandomNumbers.png';
import GN from '../../../assets/image-files/GroupGenerator.png';
import LO from '../../../assets/image-files/List.png';
import RT from '../../../assets/image-files/RandomTable.png';
import DC from '../../../assets/image-files/Dice.png';
import HT from '../../../assets/image-files/HeadsTails.png';

const screenIcon  = (navName) => {
  switch (navName) {
    case 'RandomNumbers':
      return RN;

    case 'GroupsGenerator':
      return GN;

    case 'Lists':
      return LO;

    case 'RandomTable':
      return RT;    
  
    case 'Dice':
      return DC;    

    case 'HeadsOrTails':
      return HT;
  }
}

const listItem = (item) => (
  <View style={styles.container}>
    <Image source={screenIcon(item.navName)} style={{ height: 70, width: 70 }}/>
    <Text style={styles.title}>{item.title}</Text>
  </View>
);

export default function List(props) {
  return (
    <FlatList
      style={styles.flatList}
      data={props.data}
      renderItem={( {item} ) => (
        <TouchableOpacity onPress={() => props.action(item.navName)}>{listItem(item)}</TouchableOpacity>
      )}
      keyExtractor={item => item.title}
      directionalLockEnabled={true}
    />
  );
}
