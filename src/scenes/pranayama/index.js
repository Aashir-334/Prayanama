import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
  AsyncStorage,
} from 'react-native';
import style, {colors} from '../../styles/index';
import {Container} from '../../components/layout/index';
import {Fonts} from '../../utils/fonts';
import {strings} from '../../Locatization';
import Tts from 'react-native-tts';
import styles from './style';
import {store} from '../../store';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {AndroidBackHandler} from 'react-navigation-backhandler';
import {BackHandler, Alert, Button} from 'react-native';
import {getExercise} from '../../actions/exercise';
import {getSongs} from '../../actions/songs';
const Sound = require('react-native-sound');

const {width, height} = Dimensions.get('window');

const ParanyamaWrapper = prop => (
  <View style={styles.prayanamaWrapper}>{prop.children}</View>
);

const ParanyamaButton = prop => (
  <>
    <TouchableOpacity
      style={[styles.paranyamaButton, prop.style]}
      activeOpacity={0.7}
      onPress={prop.switchTo}>
      <Image source={prop.ImageSource} style={[styles.paranyamaButtonImage,{transform: [{ rotate: prop.deg}]}]} />
      <View>
        <View>
          <Text style={styles.paranyamaButtonText}>{prop.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  </>
);
Tts.setDefaultRate(0.6, true);

export class ParanyamaScreen extends Component {
  constructor() {
    super();
    this.state = {
      lastExercise: '',
    };
  }

  switchToStateOfMind() {
    this.props.navigation.navigate('StateOfMind');
  }

  switchToHealth() {
    this.props.navigation.navigate('HealthManagement');
  }
  switchToCosmic() {
    this.props.navigation.navigate('CosmicRuler');

  }
  switchToOnTheGoPranayama() {
    this.props.navigation.navigate('OnTheGoPranayama');

  }
  
  onBackButtonPressAndroid = () => {
    if (this.props.navigation.isFocused()) {
      Alert.alert(strings.holdOn, strings.areYouSure, [
        {
          text: strings.cancel,
          onPress: () => null,
        },
        {
          text: strings.yes,
          onPress: () => BackHandler.exitApp(),
        },
      ]);
      return true;
    }
    else{
      return false
    }
  };
  componentDidMount() {
    const {navigation} = this.props;
    this.setState({excerciseComplete:false})
    store.dispatch(getExercise());
    store.dispatch(getSongs());

    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.onBackButtonPressAndroid,
    );

    this.props.navigation.addListener('didFocus', () =>
      this.setState({name: ''}),
    );
  }
  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.onBackButtonPressAndroid,
    );
  }
  render() {
    return (
      <Container>
        {/* <Image
          source={require('../../../image/genderModalRotate.jpg')}
          style={{
            width: width * 1,
            height: height * 1,
            opacity: .9,
            position: 'absolute',
            // backgroundColor: '#75c3ff',
          }} /> */}
        <StatusBar
          backgroundColor="#155AAA"
          barStyle="default"
          hidden={true}
          showHideTransition={'fade'}
        />
        <ParanyamaWrapper>
          <ParanyamaButton
            title={store.getState().language.pranayama}
            ImageSource={require('../../statics/images/Wallpaper_5_Half.jpg')}
            switchTo={this.switchToStateOfMind.bind(this)}
            deg={'40deg'}
            style={{
              backgroundColor: '#d68100',
            }}
          />
          <ParanyamaButton
            title={store.getState().language.stateofMindWanted}
            ImageSource={require('../../statics/images/Wallpaper_4_Half.jpg')}
            switchTo={this.switchToOnTheGoPranayama.bind(this)}
            deg={'90deg'}
            style={{
              backgroundColor: '#4bc903',
            }}
          />
           <ParanyamaButton
            title={store.getState().language.healthManagment}
            ImageSource={require('../../statics/images/Wallpaper_5_Half.jpg')}
            switchTo={this.switchToHealth.bind(this)}
            deg={'125deg'}
            style={{
              backgroundColor: '#d68100',
            }}
          />
          <ParanyamaButton
            title={store.getState().language.cosmicRule}
            ImageSource={require('../../statics/images/Wallpaper_4_Half.jpg')}
            switchTo={this.switchToCosmic.bind(this)}
            deg={'120deg'}
            style={{
              backgroundColor: '#4bc903',
            }}
          />
        </ParanyamaWrapper>
      </Container>
    );
  }
}
