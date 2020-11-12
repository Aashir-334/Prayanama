import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Button,
  ListItem,
  Text,
  // Icon,
  Left,
  Body,
  Right,
  Switch,
  Separator,
} from 'native-base';
import {
  TextInput,
  TouchableOpacity,
  addons,
  Dimensions,
  Image,
  View,
  ScrollView,
  StatusBar,
  NativeModules
} from 'react-native';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import { strings } from '../../Locatization';
import style from './style';
import { Fonts } from '../../utils/fonts';
import Modal from 'react-native-modal';
import { selectLanguage } from '../../actions/language';
import { store } from '../../store';
import { languages } from '../../language/language';
import Tts from 'react-native-tts';

import { Toolbar, IconToggle, Icon } from 'react-native-material-ui';
const { width, height } = Dimensions.get('window');
class ParameterScreen extends Component {
  static navigationOptions = {
    title: store.getState().language.parameter,
  };
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      check: 0,
    };
  }
  onSubmit = () => {
    this.props.logout();
    this.props.navigation.navigate('Signin');
  };
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible }),
      setTimeout(() => {

        NativeModules.DevSettings.reload();
      }, 300);

  };
  handleEnglish = () => {
    // Tts.setDefaultLanguage('en')
    store.dispatch(selectLanguage(languages.en)),
      this.setState({ check: 1 })
    Tts.setDefaultLanguage(store.getState().language.ln);

  }
  handleItalian = () => {
    // Tts.setDefaultLanguage('it')
    store.dispatch(selectLanguage(languages.it)),
      this.setState({ check: 2 })
    Tts.setDefaultLanguage(store.getState().language.ln);


  }
  handleSpanish = () => {
    // Tts.setDefaultLanguage('es')
    store.dispatch(selectLanguage(languages.es)),
      this.setState({ check: 3 })
    Tts.setDefaultLanguage(store.getState().language.ln);



  }
  handleFrance = () => {
    // Tts.setDefaultLanguage('fr')
    store.dispatch(selectLanguage(languages.fr)),
      this.setState({ check: 4 })
    Tts.setDefaultLanguage(store.getState().language.ln);


  }
  render() {
    let iconEnglish;
    let iconItalian;
    let iconSpanish;
    let iconFrench;
    this.state.check == 1 ? iconEnglish = 'radio-button-checked' : iconEnglish = 'radio-button-unchecked';
    this.state.check == 2 ? iconItalian = 'radio-button-checked' : iconItalian = 'radio-button-unchecked';
    this.state.check == 3 ? iconSpanish = 'radio-button-checked' : iconSpanish = 'radio-button-unchecked';
    this.state.check == 4 ? iconFrench = 'radio-button-checked' : iconFrench = 'radio-button-unchecked';
    let name;
    this.props.userData
      ? (name = this.props.userData.name)
      : console.log(this.props.userData);
    return (
      <View style={style.contain}>
        <StatusBar
          backgroundColor="black"
          barStyle="light-content"
          hidden={false}
        // showHideTransition={'fade'}
        />
        <Image
          source={require('../../../image/parametterBg1.jpg')}
          style={style.backgroundImage}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{
            marginBottom: height * .22
          }}>

            {/* Basic Information */}
            <View style={style.viewContainerHeader}>
              <Text
                style={style.containerHeaderText}>
                {store.getState().language.basicInformation}
              </Text>
            </View>

            {/* Profile */}
            <TouchableOpacity style={style.viewContainer}
             activeOpacity={0.7}
              onPress={() => {
                this.props.navigation.navigate('Profile');
              }}>
              <View style={style.iconAndName}>
                <View style={style.iconViewBlue} >
                  <Icon name="account-circle" size={height * 0.035} color="white" />
                </View>
                <Text style={style.iconNameText}>{store.getState().language.profile}</Text>
              </View>
              <View style={style.iconAndName}>
                <Text style={style.iconNameText}>{name}</Text>
                <Icon name="navigate-next" size={height * 0.04} color="white" />
              </View>
            </TouchableOpacity>

            {/* Device Connect */}
            <View style={style.viewContainer}>
              <View style={style.iconAndName}>
                <View style={style.iconViewBlue} >
                  <Icon name="wifi-tethering" size={height * 0.035} color="white" />
                </View>
                <Text style={style.iconNameText}>
                  {store.getState().language.deviceConnected}</Text>
              </View>
              <View style={style.iconAndName}>
                <Text style={style.iconNameText}>100%</Text>
                <Icon name="navigate-next" size={height * 0.04} color="white" />
              </View>
            </View>

            {/* Language */}
            <TouchableOpacity style={style.viewContainer}
              activeOpacity={0.7}

              // onPress={() => console.log("stoerererre", this.props.userData)}
              onPress={() => this.setState({ isModalVisible: !this.state.isModalVisible })}
            >
              <View style={style.iconAndName}>
                <View style={style.iconViewBlue} >
                  <Icon name="translate" size={height * 0.035} color="white" />
                </View>
                <Text style={style.iconNameText}>
                  {store.getState().language.languageofApp}</Text>
              </View>
              <View style={style.iconAndName}>
                <Text style={style.iconNameText}>{store.getState().language.languag}</Text>
                <Icon name="navigate-next" size={height * 0.04} color="white" />
              </View>
            </TouchableOpacity>

            {/* Language Modal */}
            <Modal
              animationIn="bounceIn"
              animationOut="bounceOut"
              isVisible={this.state.isModalVisible}
              style={style.modalContainer}>
              <View style={style.modalInner}>

                {/* Modal Image */}
                <Image
                  source={require('../../../image/profileBack.jpg')}
                  style={style.modalImage}
                />
                {/* Modal Header */}
                <View style={style.headerContainer}>
                  <View style={style.headerInner}>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => this.setState({ isModalVisible: !this.state.isModalVisible })}
                      style={style.headerBackBotton}>
                      <Icon name='navigate-before' size={height * 0.05} color="black" style={style.handleCheckIcon} />
                    </TouchableOpacity>
                    <Text style={style.headerHeading1}>
                      {store.getState().language.languageofApp}
                    </Text>
                  </View>
                </View>
                <View style={style.bodyContainer}>
                  <View style={style.bodyInner}>
                    <TouchableOpacity style={style.languageBotton}
                     activeOpacity={0.7}
                      onPress={this.handleEnglish}>
                      <Text style={style.languageText}>
                        {store.getState().language.english}
                      </Text>
                      <Icon name={iconEnglish} size={height * 0.03} color="black" style={style.handleCheckIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={style.languageBotton}
                      activeOpacity={0.7}
                      onPress={this.handleItalian}>
                      <Text style={style.languageText}>
                        {store.getState().language.italian}
                      </Text>
                      <Icon name={iconItalian} size={height * 0.03} color="black" style={style.handleCheckIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={style.languageBotton}
                     activeOpacity={0.7}
                      onPress={this.handleSpanish}>
                      <Text style={style.languageText}>
                        {store.getState().language.spanish}
                      </Text>
                      <Icon name={iconSpanish} size={height * 0.03} color="black" style={style.handleCheckIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={style.languageBotton}
                     activeOpacity={0.7}
                      onPress={this.handleFrance}>
                      <Text style={style.languageText}>
                        {store.getState().language.french}
                      </Text>
                      <Icon name={iconFrench} size={height * 0.03} color="black" style={style.handleCheckIcon} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={style.footerContainer}>
                  <View style={style.footerInner}>
                    <TouchableOpacity onPress={this.toggleModal} activeOpacity={0.7}>
                      <View style={style.bottonContainer}>
                        <Text style={style.bottonText}>
                          {store.getState().language.select}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>

            {/* Notificaiton */}
            <View style={style.viewContainer}>
              <View style={style.iconAndName}>
                <View style={style.iconViewBlue} >
                  <Icon name="notifications" size={height * 0.035} color="white" />
                </View>
                <Text style={style.iconNameText}>
                  {store.getState().language.notification}
                </Text>
              </View>
              <View style={style.iconAndName}>
                <Text style={style.iconNameText}>{store.getState().language.onceADay}</Text>
                <Icon name="navigate-next" size={height * 0.04} color="white" />
              </View>
            </View>

            {/* More Information */}
            <View style={style.viewContainerHeader}>
              <Text
                style={style.containerHeaderText}>
                {store.getState().language.moreInformation}
              </Text>
            </View>

            {/* FAQ */}
            <View style={style.viewContainer}>
              <View style={style.iconAndName}>
                <View style={style.iconViewBlue} >
                  <Icon name="wifi" size={height * 0.035} color="white" />
                </View>
                <Text style={style.iconNameText}>
                  FAQ
                </Text>
              </View>
              <View style={style.iconAndName}>
                <Icon name="navigate-next" size={height * 0.04} color="white" />
              </View>
            </View>

            {/* Feedback */}
            <View style={style.viewContainer}>
              <View style={style.iconAndName}>
                <View style={style.iconViewBlue} >
                  <Icon name="feedback" size={height * 0.03} color="white" />
                </View>
                <Text style={style.iconNameText}>
                  {store.getState().language.sendUsYourFeedback}</Text>
              </View>
              <View style={style.iconAndName}>
                <Icon name="navigate-next" size={height * 0.04} color="white" />
              </View>
            </View>

            {/* Logout */}
            <TouchableOpacity style={style.viewContainer}
             activeOpacity={0.7}
              onPress={this.onSubmit}
            >
              <View style={style.iconAndName}>
                <View style={style.iconViewBlue} >
                  <Icon name="exit-to-app" size={height * 0.035} color="white" />
                </View>
                <Text style={style.iconNameText}>
                  {store.getState().language.logout}</Text>
              </View>
              <View style={style.iconAndName}>
                <Icon name="navigate-next" size={height * 0.04} color="white" />
              </View>
            </TouchableOpacity>

            {/* System Information */}
            <View style={style.viewContainerHeader}>
              <Text
                style={style.containerHeaderText}>
                {store.getState().language.systemInformation}
              </Text>
            </View>

            {/* App version */}
            <View style={style.viewContainer}>
              <View style={style.iconAndName}>
                <View style={{
                  width: height * .045,
                  height: height * .045,
                  backgroundColor: '#FF9501',
                  borderRadius: width * .01,
                  elevation: width * .005,
                  justifyContent: 'center',
                  alignItems: 'center',
                }} >
                  <Icon name="settings-applications" size={height * 0.035} color="white" />
                </View>
                <Text style={style.iconNameText}>
                  {store.getState().language.appVersion}</Text>
              </View>
              <View style={style.iconAndName}>
                <Text style={style.iconNameText}>1.0</Text>
                <Icon name="navigate-next" size={height * 0.04} color="white" />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  userData: state.auth.user,
});
export default connect(
  mapStateToProps,
  { logout },
)(ParameterScreen);
