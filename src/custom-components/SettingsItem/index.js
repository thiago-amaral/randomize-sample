import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles.js';

export default function SettingsItem(props) {
  return (
    <TouchableOpacity activeOpacity={0.4} onPress={props.action}>
        <View style={styles.settingsContainer}>
            <Text style={styles.settingsText}>{props.label}</Text>
            <Text style={styles.settingsOption}>{props.option}</Text>
        </View>
    </TouchableOpacity>
  );
}
