// UPDATE app.json IF THIS BUILD GETS OPTIMAL
// + UPDATE babel stuff
// + BUNDLE ICONS CONFIG
import React from 'react';
import { View, Text } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { Provider } from 'react-redux';
import store from './src/store/index.js';

import HomeScreen from './src/menu/Home/homeStackNavigator.js';
import ServiceScreen from './src/menu/Service/index.js';
import SettingsScreen from './src/menu/Settings/index.js';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.maxFontSizeMultiplier = 1.2;

const tabNavigator = createMaterialBottomTabNavigator(
{
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <View><Icon style={{color: tintColor}} size={25} name={'ios-home'} /></View>
      ),
    },
  },

  Service: {
    screen: ServiceScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <View><Icon style={{color: tintColor}} size={25} name={'ios-send'} /></View>
      ),
    },
  },

  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <View><Icon style={{color: tintColor}} size={25} name={'ios-settings'} /></View>
      ),
    },
  },

}, 

{
  initialRouteName: 'Home',
  activeColor: '#FFF',
  inactiveColor: '#707070',
  barStyle: { backgroundColor: '#141D26' },
  labeled: false,
});

const Nav = createAppContainer(tabNavigator);

const theme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      primary: '#25CCF7',
      placeholder: '#fff',
      text: '#fff',  
  }
}

const Root = () => (
  <Provider store={store}>
    <PaperProvider theme={theme}>
      <Nav />
    </PaperProvider>
  </Provider>
)

export default Root;
