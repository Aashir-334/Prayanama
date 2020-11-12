import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Picker,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  Dimensions,
  Image,
  Animated
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import style from './freeStyle';
import Refresh from 'react-native-vector-icons/Foundation';
import RNPickerSelect from 'react-native-picker-select';
import Modal from 'react-native-modal';
import CountDown from '../../../../components/countDown/paidExercise/elevate';
// import InhaleRightAndExhaleLeft from '../../../../components/countDown/inhaleRightAndExhaleLeft';
import { strings } from '../../../../Locatization';
import { Fonts } from '../../../../utils/fonts';
import { store } from '../../../../store';

import Tts from 'react-native-tts';

Tts.setDefaultRate(0.7, true);
Tts.setDucking(true);
Tts.setDefaultPitch(1);
// Tts.addEventListener('tts-start', event => console.log('start', event));
// Tts.addEventListener('tts-finish', event => console.log('finish', event));
// Tts.addEventListener('tts-cancel', event => console.log('cancel', event));

const { width, height } = Dimensions.get('window');
const Sound = require('react-native-sound');
let song = new Sound('anambientday.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Error while initializing song instance', error);
  }
});
class freeExercise extends Component {
  constructor() {
    super();
    this.state = {
      values: 'relaxing',
      pause: false,
      timer: true,
      rightClose: false,
      inhale: false,
      exhale: false,
      refresh: false,
      playBottonView: false,
      guideView: false,
      selectedMinutes: 0,
      selectedSeconds: 0,
      animatedValue: new Animated.Value(0)
    };
  }
  componentDidMount() {
    this.setState({ isModalVisible: !this.state.isModalVisible, })
    setTimeout(() => {
      Animated.timing(this.state.animatedValue, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true
      }).start();
    }, 10);
  }
  toggleModal = () => {
    const minutes = this.state.selectedMinutes;
    if (
      minutes == 0
    ) {
      alert('Please Select Exercise Minutes')
    } else if (
      minutes < 1 || minutes > 30
    ) {
      alert('Minutes must be in 1 ,3 ,5 ,7 ,11 ,21 ,31')
    } else {
      this.setState({
        isModalVisible: !this.state.isModalVisible, refresh: !this.state.refresh, playBottonView: !this.state.playBottonView
      },
        () => {
          this.props.bgSong(this.state.values);
          this.props.second(this.state.selectedSeconds);
          this.props.pauseValue(!this.state.pause)
        }
      );
      Tts.speak(store.getState().language.elevateExercise, {
        androidParams: {
          KEY_PARAM_PAN: 0,
          KEY_PARAM_VOLUME: 1,
          KEY_PARAM_STREAM: 'STREAM_MUSIC',
        },
      });
      
      setTimeout(() => {
        this.setState({ refresh: !this.state.refresh, playBottonView: !this.state.playBottonView },
          () => this.props.pauseValue(this.state.pause))
        this.animationOn()
      }, 24000);
    }
  };
  passPause = () => {
    this.props.pauseValue(!this.state.pause)
  }
  onRefresh = () => {
    this.animationOn()
    this.setState({ refresh: !this.state.refresh, playBottonView: !this.state.playBottonView })
    this.passPause();
    Tts.speak(store.getState().language.elevateExercise, {
      androidParams: {
        KEY_PARAM_PAN: 0,
        KEY_PARAM_VOLUME: 1,
        KEY_PARAM_STREAM: 'STREAM_MUSIC',
      },
    });
    setTimeout(() => {
      this.setState({ refresh: !this.state.refresh, playBottonView: !this.state.playBottonView },
        () => this.props.pauseValue(this.state.pause)),
        this.animationOn()

    }, 23000);
  }
  animationOn = () => {
    this.setState({ animatedValue: new Animated.Value(0) })
    setTimeout(() => {
      Animated.timing(this.state.animatedValue, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true
      }).start();
    }, 10);
  }


  // Play And Stop Botton Func
  onPauseSound = () => {
    if (!this.state.pause) {
      this.passPause();
      this.setState({ pause: !this.state.pause, guideView: !this.state.guideView, animatedValue: new Animated.Value(0) })
      // const seconds = this.state.selectedSeconds;
      Tts.speak(store.getState().language.inhaleLeftNostril4Seconds, {
        androidParams: {
          KEY_PARAM_PAN: 0,
          KEY_PARAM_VOLUME: 1,
          KEY_PARAM_STREAM: 'STREAM_MUSIC',
        },
      });
      this.inhaleLeftInterval = setInterval(() => {
        Tts.speak(store.getState().language.inhaleLeftNostril4Seconds, {
          androidParams: {
            KEY_PARAM_PAN: 0,
            KEY_PARAM_VOLUME: 1,
            KEY_PARAM_STREAM: 'STREAM_MUSIC',
          },
        });
      }, 1000 * 44);
      this.exhaleRight = setTimeout(() => {
        Tts.speak(store.getState().language.exhaleRightNostril8Seconds, {
          androidParams: {
            KEY_PARAM_PAN: 0,
            KEY_PARAM_VOLUME: 1,
            KEY_PARAM_STREAM: 'STREAM_MUSIC',
          },
        });
        this.exhaleRightInterval = setInterval(() => {
          Tts.speak(store.getState().language.exhaleRightNostril8Seconds, {
            androidParams: {
              KEY_PARAM_PAN: 0,
              KEY_PARAM_VOLUME: 1,
              KEY_PARAM_STREAM: 'STREAM_MUSIC',
            },
          });
        }, 1000 * 44);
      }, 1000 * 4);
      this.hold1 = setTimeout(() => {
        Tts.speak(store.getState().language.nowHold8Seconds, {
          androidParams: {
            KEY_PARAM_PAN: 0,
            KEY_PARAM_VOLUME: 1,
            KEY_PARAM_STREAM: 'STREAM_MUSIC',
          },
        });
        this.hold1Interval = setInterval(() => {
          Tts.speak(store.getState().language.nowHold8Seconds, {
            androidParams: {
              KEY_PARAM_PAN: 0,
              KEY_PARAM_VOLUME: 1,
              KEY_PARAM_STREAM: 'STREAM_MUSIC',
            },
          });
        }, 1000 * 44);
      }, 1000 * 12);
      this.IntervalinhaleRight = setTimeout(() => {
        Tts.speak(store.getState().language.inhaleRightNostril8Seconds, {
          androidParams: {
            KEY_PARAM_PAN: 0,
            KEY_PARAM_VOLUME: 1,
            KEY_PARAM_STREAM: 'STREAM_MUSIC',
          },
        });
        this.inhaleRightInterval = setInterval(() => {
          Tts.speak(store.getState().language.inhaleRightNostril8Seconds, {
            androidParams: {
              KEY_PARAM_PAN: 0,
              KEY_PARAM_VOLUME: 1,
              KEY_PARAM_STREAM: 'STREAM_MUSIC',
            },
          });
        }, 1000 * 44);
      }, 1000 * 20);
      this.exhaleLeft = setTimeout(() => {
        Tts.speak(store.getState().language.exhaleLeftNostril8Seconds, {
          androidParams: {
            KEY_PARAM_PAN: 0,
            KEY_PARAM_VOLUME: 1,
            KEY_PARAM_STREAM: 'STREAM_MUSIC',
          },
        });
        this.exhaleLeftInterval = setInterval(() => {
          Tts.speak(store.getState().language.exhaleLeftNostril8Seconds, {
            androidParams: {
              KEY_PARAM_PAN: 0,
              KEY_PARAM_VOLUME: 1,
              KEY_PARAM_STREAM: 'STREAM_MUSIC',
            },
          });
        }, 1000 * 44);
      }, 1000 * 28);
      this.hold2 = setTimeout(() => {
        Tts.speak(store.getState().language.nowHold8Seconds, {
          androidParams: {
            KEY_PARAM_PAN: 0,
            KEY_PARAM_VOLUME: 1,
            KEY_PARAM_STREAM: 'STREAM_MUSIC',
          },
        });
      this.hold2Interval = setInterval(() => {
          Tts.speak(store.getState().language.nowHold8Seconds, {
            androidParams: {
              KEY_PARAM_PAN: 0,
              KEY_PARAM_VOLUME: 1,
              KEY_PARAM_STREAM: 'STREAM_MUSIC',
            },
          });
        }, 1000 * 44);
      }, 1000 * 36);
     
      song.play(success => {
        if (!success) {
          console.log('song didnt play', error);
        }
      });
    } else {
      // this.passPause();
      // this.animationOn()
      song.stop(() => ToastAndroid.show(strings.thanks, ToastAndroid.BOTTOM));
      this.setState({ pause: !this.state.pause, guideView: !this.state.guideView, })
      Tts.stop();

      clearInterval(this.inhaleLeftInterval);
      clearInterval(this.exhaleRightInterval);
      clearInterval(this.inhaleRightInterval);
      clearInterval(this.exhaleLeftInterval);
      clearInterval(this.hold1Interval);
      clearInterval(this.hold2Interval);
      
      clearTimeout(this.inhaleLeft);
      clearTimeout(this.exhaleRight);
      clearTimeout(this.inhaleRight);
      clearTimeout(this.exhaleLeft);
      clearTimeout(this.hold1);
      clearTimeout(this.hold2);
      Animated.timing(this.state.animatedValue, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true
      }).start();
    }

  }

  // rn Picker Value Selection Funtion
  valueChange(value) {
    this.setState({ values: value });
    song = new Sound(value, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('Error while initializing song instance', error);
      }
    });
  }
  valueMinutesChange(selectedMinutes) {
    this.setState({ selectedMinutes: selectedMinutes });
  }
  render() {
    const minuts = this.state.selectedMinutes
    // It work to Stop Auto maticly exercise and song
    if (this.state.pause == true) {
      this.timePause = setTimeout(() => {
        this.passPause();
        this.onPauseSound();
      }, minuts * 60000);
    } else {
      clearTimeout(this.timePause)
    }
    let { animatedValue } = this.state;
    console.log("Exercise :", this.state.pause)
    return (
      <View style={style.mainContainer}>
        {this.state.playBottonView == false ? (
          <View style={style.mainInner}>
            {!this.state.pause ?
              (
                <Animated.View
                  style={{
                    opacity: animatedValue,
                  }}
                >
                  <TouchableOpacity onPress={this.onPauseSound} style={{ justifyContent: 'center', alignItems: 'center', height: height * .2, }}>
                <Text style={style.headerHeading}>{store.getState().language.start}</Text>
                    <View style={style.playBotton}>
                      <Image source={require('../../../../../image/playbottongray.png')} style={{
                        width: height * .12,
                        height: height * .12
                      }} />
                    </View>
                  </TouchableOpacity>
                </Animated.View>
              ) : (
                <View style={{ width: width * 1, height: height * .4 }}>
                  <CountDown onBotton={!this.state.pause}/>
                  {/* <TouchableOpacity onPress={this.onPauseSound} style={{ justifyContent: 'center', alignItems: 'center', height: height * .2, }}>
                    <View style={style.playBotton}>
                    </View>
                  </TouchableOpacity> */}
                  {/* <InhaleRightAndExhaleLeft onBotton={!this.state.pause} second={this.state.selectedSeconds} /> */}
                </View>
              )
            }
          </View>
        )
          : null
        }
        {!this.state.guideView ?
          (
            <View style={style.mainInner}>
              {!this.state.refresh ?
                (
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
                      width: width * 1,
                      height: height * .4,
                    }}
                  >
                    <View style={{
                      position: 'absolute',
                      right: width * -.15,
                      bottom: height * 0,
                    }}>
                      <TouchableOpacity onPress={this.onRefresh} >
                        <Text style={style.headerRefreshHeading}>{store.getState().language.guideAgain}</Text>
                        <View style={style.refreshBotton}>
                          <Refresh size={width * .09} color='white' name='refresh' style={{
                            textShadowOffset: {
                              width: width * 0.001,
                              height: height * 0.001,
                            },
                            textShadowRadius: width * 0.01,
                            textShadowColor: 'black',
                          }} />
                        </View>
                      </TouchableOpacity>
                    </View>

                  </Animated.View>

                ) : (
                  <Animated.View
                    style={{
                      opacity: animatedValue,
                      justifyContent: "center",
                      alignItems: 'center',
                    }}
                  >
                    <View style={style.infoText}>
                      <Text style={style.insideHeading}>
                        {store.getState().language.elevateExercise}
                      </Text>
                    </View>
                  </Animated.View>
                )
              }
            </View>
          )
          : null
        }
        <Modal
          animationIn="slideInLeft"
          animationOut="slideOutRight"
          isVisible={this.state.isModalVisible}
          style={style.modalMainContainer}>
          <LinearGradient colors={['#363636', '#75c3ff', '#363636']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1.5 }}
            style={style.modalLinear}>
            <Animated.View
              style={{
                transform: [
                  {
                    translateY: animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-600, 0]
                    })
                  }
                ],
                justifyContent: "center",
                alignItems: 'center',
              }}
            >
              <View style={style.modalHeaderContainer}>
                <View style={style.modalHeader}>
                  <Text style={style.selectExerText}>{store.getState().language.selectExerciseSong}</Text>
                  <View style={style.songInputView}>
                    <RNPickerSelect
                      placeholder={{
                        label: store.getState().language.selectSong,
                        value: 'anambientday.mp3',
                      }}
                      onValueChange={value => this.valueChange(value)}
                      enabled={!this.state.pause}
                      style={{
                        inputAndroid: {
                          fontSize: width * .04,
                          fontFamily: Fonts.WorkSansBold,
                          width: width * .7,
                          height: height * .07,
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center',
                          color: 'white',
                          borderRadius: width * .005,
                          elevation: width * .02,
                          borderWidth: 1,
                          borderColor: 'black',
                        },
                      }}
                      items={[
                        { label: 'Awesome Relaxing', value: 'awesomerelaxingg.mp3' },
                        { label: 'Relaxing', value: 'anambientday.mp3' },
                        { label: 'Deep Meditaion', value: 'deepmeditation.mp3' },
                        { label: 'Heaven', value: 'heaven.mp3' },
                        { label: 'Deeply Feel', value: 'healingwater.mp3' },
                        { label: 'Mind Relaxation', value: 'mindrelaxation.mp3' },
                        { label: 'Beautiful Movement', value: 'inthemoment.mp3' },
                        { label: 'Soft Feel Relax', value: 'softrelaxing.mp3' },
                      ]}
                      useNativeAndroidPickerStyle={false}
                    />
                  </View>
                </View>
              </View>
            </Animated.View>
            <Animated.View
              style={{
                opacity: animatedValue,
                justifyContent: "center",
                alignItems: 'center',

              }}
            >
              <View style={style.modalBodyContainer}>
                <View style={style.modalBodyInner}>
                  <Text style={style.timeInMinHeading}>{store.getState().language.selectExerciseTimingsInMins}</Text>
                  <View style={style.minInputView}>
                    <RNPickerSelect
                      placeholder={{
                        label: store.getState().language.minutes,
                        value: 0,
                      }}
                      onValueChange={selectedMinutes => this.valueMinutesChange(selectedMinutes)}
                      // enabled={!this.state.pause}
                      style={{
                        inputAndroid: {
                          fontSize: width * .04,
                          fontFamily: Fonts.WorkSansBold,
                          width: width * .4,
                          height: height * .07,
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center',
                          color: 'white',
                          borderRadius: width * .005,
                          elevation: width * .02,
                          borderWidth: 1,
                          borderColor: 'black',
                        },
                      }}
                      items={[
                        { label: '1', value: 1 },
                        { label: '3', value: 3 },
                        { label: '5', value: 5 },
                        { label: '7', value: 7 },
                        { label: '11', value: 11 },
                        { label: '21', value: 21 },
                        { label: '31', value: 31 },
                      ]}
                      useNativeAndroidPickerStyle={false}
                    />
                  </View>
                </View>
              </View>
            </Animated.View>
            <Animated.View
              style={{
                transform: [
                  {
                    translateY: animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [600, 0]
                    })
                  }
                ],
                justifyContent: "center",
                alignItems: 'center',
              }}
            >
              <View style={style.modalFooterContainer}>
                <View style={style.modalFooter}>
                  <TouchableOpacity onPress={this.toggleModal} style={style.okBotton}>
                    <Text style={style.okText}>
                      {store.getState().language.ok}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Animated.View>
          </LinearGradient>
        </Modal>
      </View >
    );
  }
}

export default freeExercise;
