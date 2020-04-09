import React from 'react';
import { View, AsyncStorage } from 'react-native';

import { connect } from 'react-redux';
import { changeLanguage } from '../../store/actions.js';

import Header from '../../custom-components/Header/index.js';
import List from '../../custom-components/List/index.js';
import TextData from './language.js';
import styles from './styles.js';

class Home extends React.Component {
  async componentDidMount() {
    const lang = await AsyncStorage.getItem('@language');
    const { dispatch } = this.props;
    dispatch(changeLanguage(lang || 'english'));
  }
  
  render() {
    const { lang, navigation } = this.props;
    return (
      <View style={styles.container}>
        <Header />
        <List data={TextData[lang]} action={navigation.navigate} />
      </View>
    );
  }
}

export default connect(state => ({lang: state.lang}))(Home);
