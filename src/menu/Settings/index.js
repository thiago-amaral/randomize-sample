import React from 'react';
import { 
  View, 
  Text, 
  Picker, 
  Modal, 
  TouchableWithoutFeedback,
  AsyncStorage,
} from 'react-native';

import { connect } from 'react-redux';
import { changeLanguage } from '../../store/actions.js';

import Header from '../../custom-components/Header/index.js';
import Version from '../../../app.json'
import SettingsItem from '../../custom-components/SettingsItem/index.js';
import TextData from './language.js';
import styles from './styles.js';


class Settings extends React.Component {
  state = {
    lang: 'english',
    pickerVisible: false,
    aboutVisible: false,
  }

  langToLabel(lang) {
    switch (lang) {
      case 'english':
        return 'English';

      case 'portuguese':
        return 'Português';

      case 'chinese':
        return '普通话';

      case 'german':
        return 'Deutsch';

      case 'spanish':
        return 'Español';

      default:
        return lang.charAt(0).toUpperCase() + lang.slice(1)
    }
  }

  async saveLang(lang) {
    try {
      AsyncStorage.setItem('@language', lang);
    } catch(e) {
      alert('Error saving default language.');
    }
  }

  componentDidMount() {
    const { lang } = this.props;
    this.setState({ lang });
  }

  onChangeLanguage(value) {
    const { dispatch } = this.props;
    this.setState({lang: value || 'english'});
    dispatch(changeLanguage(value || 'english'));
    this.saveLang(value || 'english');
  }

  render() {
    return (
      <View style={styles.container}>

        <Modal visible={this.state.pickerVisible}
          animationType={"slide"}
          transparent={true}
        >
          <View style={styles.pickerContainer}>
            <TouchableWithoutFeedback onPress={() => this.setState({pickerVisible: false})}>
              <Text style={styles.close}>DONE</Text>
            </TouchableWithoutFeedback>
            <Picker
              selectedValue={this.state.lang}
              onValueChange={value => this.onChangeLanguage(value)}
              style={{backgroundColor: '#242426'}}
            >
              <Picker.Item label={this.langToLabel('english')} color="#FFF" value="english" />
              <Picker.Item label={this.langToLabel('portuguese')} color="#FFF" value="portuguese" />
              <Picker.Item label={this.langToLabel('spanish')} color="#FFF" value="spanish" />
              <Picker.Item label={this.langToLabel('chinese')} color="#FFF" value="chinese" />
              <Picker.Item label={this.langToLabel('german')} color="#FFF" value="german" />
            </Picker>
          </View>
        </Modal>

        <Modal 
          animationType={"slide"}
          transparent={true} 
          visible={this.state.aboutVisible}
        >
          <TouchableWithoutFeedback onPress={() => this.setState({aboutVisible: false})}>
              <View style={styles.modal}>
                  <Text maxFontSizeMultiplier={1.1} style={styles.modalTitle}>{TextData[this.props.lang].about}</Text>
                  <Text maxFontSizeMultiplier={1.1} style={styles.modalText}>{TextData[this.props.lang].modalText}</Text>
                  <Text maxFontSizeMultiplier={1.1} style={styles.modalClose}>{TextData[this.props.lang].modalClose}</Text>
              </View>
          </TouchableWithoutFeedback>
        </Modal>
        
        <Header />
        <Text style={styles.title}>{TextData[this.props.lang].title}</Text>
        <SettingsItem 
          label={TextData[this.props.lang].language} 
          option={this.langToLabel(this.props.lang)} 
          action={() => this.setState({ pickerVisible: true })}
        />
        <SettingsItem 
          label={TextData[this.props.lang].about}
          action={() => this.setState({aboutVisible: true})}
        />
        <SettingsItem 
          label={TextData[this.props.lang].support}
        />
        <Text style={styles.version}>{TextData[this.props.lang].version + Version.expo.version}</Text>
      </View>
    );
  }
}

export default connect(state => ({lang: state.lang}))(Settings);
