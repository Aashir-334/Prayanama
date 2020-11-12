import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Button,
  Dimensions,
  Image,
  BackHandler,
  Alert,
  Animated
} from 'react-native';
import style from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import { strings } from '../../../../Locatization';
import FreeExercise from './freeExercise';
import LinearGradient from 'react-native-linear-gradient';
import Back from 'react-native-vector-icons/MaterialIcons';
import Notification from 'react-native-vector-icons/MaterialIcons';
import { store } from '../../../../store';

const { width, height } = Dimensions.get('window');

export default class ExerciseScreen extends Component {
  static navigationOptions = {
    title: 'Exercise',
  };
  constructor(props) {
    super(props);
    this.state = {
      songName: '',
      seconds: 4,
      pause: false,
      animatedValue: new Animated.Value(0)

    };
  }
  componentDidMount() {

    setTimeout(() => {
      Animated.timing(this.state.animatedValue, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true
      }).start();
    }, 10);
  }
  componentWillUnmount() {

  }
  handleSong = (child) => {
    this.setState({
      songName: child,
    })
  }
  handleSeconds = (child) => {
    this.setState({
      seconds: child,
    })
  }
  handlePause = (child) => {
    this.setState({
      pause: child,
    })
  }
  onPressFunc = () => {
    this.state.pause == false ? this.props.navigation.goBack() : alert(store.getState().language.firstCompleteYourExercise)

  }
  onBackButtonPressAndroid = () => {
    if (!this.props.navigation.isFocused()) {
      return false;
    }
    if (true) {
      Alert.alert(store.getState().language.holdOn, store.getState().language.firstYouCompleteYourExercise, [
        {
          text: store.getState().language.ok,
          onPress: () => null,
        },
      ]);
      return true;
    } else {
      return false;
    }
  };
  render() {
    // this.state.pause == true ? () => this.setState({animatedValue: new Animated.Value(0) }): () => this.setState({animatedValue: new Animated.Value(1) });
    let { animatedValue } = this.state;
    this.state.pause == true
      ?
      this.backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        this.onBackButtonPressAndroid,
      )
      :
      BackHandler.removeEventListener(
        'hardwareBackPress',
        this.onBackButtonPressAndroid,
      )
    console.log("index :",this.state.pause)

    // let pressFun;
    this.state
    let bgChanger;
    // this.state.songName == 'relaxing' ? bgChanger = require('../../../../../image/background14.gif')
    //   : this.state.songName == 'awesomerelaxingg.mp3' ? bgChanger = require('../../../../../image/background15.gif')
    //     : this.state.songName == 'anambientday.mp3' ? bgChanger = require('../../../../../image/background14.gif')
    //       : this.state.songName == 'heaven.mp3' ? bgChanger = require('../../../../../image/background17.gif')
    //         : this.state.songName == 'deepmeditation.mp3' ? bgChanger = require('../../../../../image/background18.gif')
    //           : this.state.songName == 'healingwater.mp3' ? bgChanger = require('../../../../../image/background16.gif')
    //             : this.state.songName == 'mindrelaxation.mp3' ? bgChanger = require('../../../../../image/background22.gif')
    //               : this.state.songName == 'inthemoment.mp3' ? bgChanger = require('../../../../../image/background19.gif')
    //                 : this.state.songName == 'softrelaxing.mp3' ? bgChanger = require('../../../../../image/background20.gif')
    //                   : bgChanger = require('../../../../../image/background14.gif');

    return (
      <View style={style.mainContainer}>
        <StatusBar hidden={true} />
        <View
          style={style.mainLenear}>
          <Image
            source={bgChanger}
            style={style.backgroundImage}
          />
          <View style={style.headerContainer}>
            <View style={style.headerInner}>
                <Animated.View
                  style={{
                    transform: [
                      {
                        translateX: animatedValue.interpolate({
                          inputRange: [0, 1],
                          outputRange: [-600, 0]
                        })
                      }
                    ],
                    position: 'absolute',
                    width: width * 1,
                    top: height * .04,

                  }}
                >
                  <TouchableOpacity
                    onPress={this.onPressFunc}
                    style={style.headerBackBotton}>
                    <Back size={width * .08} color='black' name='keyboard-backspace' />
                  </TouchableOpacity>
                </Animated.View>
              <Text
                style={style.headerHeading}>
                {store.getState().language.exerciseBegins}
              </Text>
            </View>
          </View>
          <View style={style.bodyContainer}>
            <View
              style={style.bodyInner}>
              <FreeExercise
                bgSong={this.handleSong}
                second={this.handleSeconds}
                pauseValue={this.handlePause}
              />
              {/* <Time /> */}
            </View>
          </View>
        </View>
      </View>
    );
  }
}
