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
  Animated,
  Easing
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import style from './freeStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Fonts } from '../../../utils/fonts';
import RNPickerSelect from 'react-native-picker-select';
import Modal from 'react-native-modal';
import CountDown from '../../../components/countDown/index';
import { strings } from '../../../Locatization';
import Tts from 'react-native-tts';
import { user_last_exer } from '../../../actions/userHistory';
import { sub_exer } from '../../../actions/subExercise';
import { connect } from 'react-redux';
import { store } from '../../../store';
import { withNavigation } from 'react-navigation';
var voiceId = 'EN-US-X-IOL-LOCAL'

const pickerStyle = {
  inputIOS: {
    color: 'white',
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
  },
  inputAndroid: {
    color: 'white',
    fontSize: width * 0.04,
  },
};
const { width, height } = Dimensions.get('window');
// var RNFS = require('react-native-fs');
const Sound = require('react-native-sound');
class freeExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: 'https://paryanama-songs-bucket.s3.us-east-2.amazonaws.com/uploads/076968423-dark-om.wav',
      animation: new Animated.Value(0),
      inhale: '',
      pause: false,
      timer: true,
      SpringValue: new Animated.Value(0),
      rightClose: false,
      inhale: false,
      exhale: false,
      selectedMinutes: 0,
      selectedSeconds: 0,
      song: '',
      songs: [],
      filterSongs: [],
      exerciseArray: [],
      guideArray: [],
      guideIndex: 0,
      guideText: false,
      guideCompleted: false,
      isShowingGuide: false,
      isGuide: false,
      exercise: false,
      StartExcercise: false
    };
    //https://paryanama-songs-bucket.s3.us-east-2.amazonaws.com/102375783-432hz-meditation-i-aura-cleans.wav
    // 
    this.song = new Sound('https://paryanama-songs-bucket.s3.us-east-2.amazonaws.com/076968423-dark-om.wav', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.warn(error)
      }
    });
    this.index = 0
    this.exercise = false
    this.guideIndex = 0
    Tts.setDefaultRate(0.58, true);
    Tts.setDucking(true);
    Tts.setDefaultPitch(0.84);
    Tts.setDefaultVoice(voiceId.toLowerCase());
    Tts.addEventListener("tts-start", event => {
      //  console.warn('started', event);
      //setTimeout(()=>{ this.guideStart=true},1000),
      if (this.state.isGuide && !this.state.isShowingGuide) {
        Tts.setDefaultRate(0.58, true);
        Tts.setDucking(true);
        Tts.setDefaultPitch(0.84);
        Tts.setDefaultVoice(voiceId.toLowerCase());
        this.setState({ exercise: true })
        this.exercise = true
        //   console.warn('Guide Running');
      }
      if (!this.state.isGuide && this.state.isShowingGuide) {
        this.setState({ guideText: true })
        //   console.warn(`Guide Condition  Started ${this.guideIndex}`)

      }
    });
    Tts.addEventListener("tts-finish", event => {
      //  console.warn('finished', event);
      if (this.state.isGuide && !this.state.isShowingGuide) {
        this.exercise = false
        if (this.index == this.state.exerciseArray.length - 1) {
          this.setState({ index: 0 });
          this.index = 0
        } else {
          this.index = this.index + 1
          //this.setState({ index: this.index + 1 });
        }
        this.setState({ exercise: false })
        //  console.warn('Guide Finish');
      }
      if (!this.state.isGuide && this.state.isShowingGuide) {
        if (
          this.guideIndex ==
          this.props.selectedExercise.exerciseText.guides.length - 1
        ) {

          this.setState({ isGuide: true, pause: false, exercise: false, guideCompleted: true, isShowingGuide: false });
          Tts.stop(this.guidess_);
          clearInterval(this.guidess_);
          this.onPauseSound(false);

        } else {

          this.guideIndex = this.guideIndex + 1
          this.setState({ guideIndex: this.guideIndex + 1 })
          //  console.warn(`Guide Condition  2nd ${this.guideIndex}`)
        }
        this.setState({ guideText: false })
        //   console.warn('Guide Finish');
      }
      // this.guideStart=true,
      //this.setState({guideStart:true}),
      this.setState({ ttsStatus: "finished" })
    }

    );
    Tts.addEventListener("tts-cancel", event =>
      this.setState({ ttsStatus: "cancelled" })
    );
  }
  async componentDidMount() {
    this.setState(
      {
        songs: store.getState().songs.songs,
        isModalVisible: !this.state.isModalVisible,
      },
      () => this.handleDataForDropdown(),
    );
    await Tts.setDefaultVoice(voiceId.toLowerCase())
    //this.props.pauseValue == true &&  && this.props.excerciseComplete == false
  }

  componentWillUnmount() {
    this.onPauseSound(true)
  }

  toggleModal = () => {

    const minutes = this.state.selectedMinutes;
    const second = this.state.selectedSeconds;
    if (minutes == 0) {
      Alert.alert('Error', 'Please Select Exercise Minutes');
    } else if (second == 0) {
      Alert.alert('Error', 'Please Select Inhale Or Exhale Seconds');
    } else if (minutes < 1 || minutes > 30) {
      Alert.alert('Error', 'Minutes must be in 1 ,3 ,5 ,7 ,11 ,21 ,31');
    } else if (second < 4 || second > 9) {
      Alert.alert('Error', 'Seconds must be in 4 to 9 range');
    } else {
      this.setState({ isModalVisible: !this.state.isModalVisible, StartExcercise: true }, () => {
        this.props.bgSong(this.state.values);
        this.props.second(this.state.selectedSeconds);
        this.props.exerciseData(this.state.songInfo);
      });
    }
  };
  passPause = () => {
    // this.props.pauseValue(!this.state.pause);
    // this.props.pauseValue;
    this.props.handlePause()
    this.setState({
      pause: this.props.pauseValue,
    });
  };

  renderGuide = async () => {
    // const seconds = this.state.selectedSeconds;

    // this.guidess_ = setInterval(() => {

    //   // console.warn('ExerciseTEXT',this.props.selectedExercise?.exerciseText?.guides[this.state.guideIndex])
    //  if(!this.state.isGuide){
    //   Tts.speak(
    //     this.props.selectedExercise?.exerciseText?.guides[
    //     this.guideIndex
    //     ],
    //     {
    //       androidParams: {
    //         KEY_PARAM_PAN: 0,
    //         KEY_PARAM_VOLUME: 1,
    //         KEY_PARAM_STREAM: 'STREAM_MUSIC',
    //       },
    //     },
    //   );
    //  }

    // }, 1000);
  };

  // Play And Stop Botton Func
  onPauseSound = isHandle => {
    if (isHandle) {
      this.props.handleComplete();
      clearTimeout(this.timePause);
      this.props.handleComplete();
      this.props.handleRunning(false)
      this.setState({ guideIndex: 0, isGuide: false, pause: false, isShowingGuide: false });
      Tts.stop(this.exhale)
      Tts.stop(this.guidess_)
      clearInterval(this.intervalInhale);
      clearInterval(this.intervalExhale);
      clearInterval(this.exhale);
      clearTimeout(this.totalTime);
      clearTimeout(this.inhale);
      clearTimeout(this.exhale);
      clearTimeout(this.exhale);
      clearInterval(this.guide_);
      clearInterval(this.guidess_);
      clearTimeout(this.exhaleTime);

      // this.setState({pause: !this.state.pause});
      this.song.stop(() => {
       
      }
      );
      ToastAndroid.show(
        store.getState().language.thanks,
        ToastAndroid.BOTTOM,
      )
      this.props.navigation.goBack();
    }
    else {
      
    //  let { values } = this.state;

      // new Sound(
      //   `${values}`,
      //   Sound.MAIN_BUNDLE,
      //   error => {
      //     if (error) {
      //     }
      //   },
      // );
      if (this.props.pauseValue != true && this.state.pause != true) {
        this.onHandleAction();
      }
      if (!this.state.pause) {
        this.passPause();
        this.setState({ pause: !this.state.pause });
        const seconds = this.state.selectedSeconds;
        const { exerciseArray, index } = this.state;

        // const exercise = exerciseArray[0];
        // const exerciseArray = this.props.selectedExercise.exerciseText.exercise;
        this.setState({
          exerciseArray: this.props.selectedExercise.exerciseText.exercise,
          //guideArray:this.props.selectedExercise.exerciseText.guides
        });
        this.song.play(success => {
          if (!success) {
          }
        });

        if (this.state.isGuide && !this.state.isShowingGuide) {
          // Tts.stop(this.guidess_ )
          // clearInterval(this.guidess_)
          this.exhale = setInterval(() => {
            this.animateView();
            this.setState({ guideStart: true })
            Tts.speak(this.state.exerciseArray[this.index], {
              androidParams: {
                KEY_PARAM_PAN: 0,
                KEY_PARAM_VOLUME: 1,
                KEY_PARAM_STREAM: 'STREAM_MUSIC',
              },
            });
            // this.exhaleTime = setTimeout(() => {
            //   if (this.index == this.state.exerciseArray.length - 1) {
            //     this.setState({ index: 0 });
            //     this.index=0
            //   } else {
            //     this.index=this.index+1
            //     //this.setState({ index: this.index + 1 });
            //   }
            // });
          }, 1000 * seconds);
        }
        if (!this.state.isGuide && !this.state.isShowingGuide) {
          this.setState({ isShowingGuide: true })
          this.guidess_ = setInterval(() => {
            this.animateView();
            Tts.speak(
              this.props.selectedExercise.exerciseText.guides[this.guideIndex],
              {
                androidParams: {
                  KEY_PARAM_PAN: 0,
                  KEY_PARAM_VOLUME: 1,
                  KEY_PARAM_STREAM: 'STREAM_MUSIC',
                },
              },
            );
          }, 8000);
        }
      }

    }

  };

  // rn Picker Value Selection Funtion
  valueChange(value, index) {
    const { songs } = this.state;
    let selected_song = songs[index - 1].song;
    let selected_image = songs[index - 1].image;
    let songInfo = songs[index - 1];

    // for (let i = 0; i < songs.length-1; i++) {
    //   if (value == songs[i]._id) {
    //     selected_song = songs[i].song;
    //     selected_image = songs[i].image;
    //     console.warn('selected_song', selected_song);
    //     songInfo.push(songs[i]);
    //   }
    // }

    this.setState({ values: selected_song, songInfo }, () => { 
      this.props.exerciseBgPath(selected_image) 
    });
    this.props.Loading(true)
    this.song = new Sound(
      `${selected_song}`,
      Sound.MAIN_BUNDLE,
      error => {
        if (!error) {
          this.props.Loading(false)
        }
      },
    );
  }

  valueMinutesChange(selectedMinutes) {
    this.setState({ selectedMinutes: selectedMinutes });
  }
  valueSecondChange(selectedSeconds) {
    this.setState({ selectedSeconds: selectedSeconds });
  }
  onHandleDownload() {
    const name = this.props.selectedExercise.name;
    this.props.sub_exer({ name: this.props.selectedExercise.name });
  }
  onHandleAction() {
    const subExerciseName = this.props.selectedExercise.name;
    const exerciseMinutes = this.state.selectedMinutes;
    const exerciseSeconds = this.state.selectedSeconds;
    this.props.user_last_exer({
      subExerciseName,
      exerciseMinutes,
      exerciseSeconds,
    });
  }

  handleDataForDropdown = () => {
    let { songs, filterSongs } = this.state;

    let filter_song =
      songs.length &&
      songs.map(v => {
        return { label: v.name, value: v._id };
      });

    this.setState({
      filterSongs: filter_song,
    });
    //this.onPauseSound(false)
  };

  animateView = () => {
    this.state.SpringValue.setValue(0.4);
    Animated.spring(
      this.state.SpringValue,
      {
        toValue: 1,
        friction: 1,
        useNativeDriver: true
      }
    ).start();
  }

  EndExcercise=()=>{
    this.timePause = setTimeout(() => {
      if (this.state.pause == true) {
      this.onPauseSound(true);
    }
    }, (this.state.selectedMinutes * 60000)+1000);
  }

  // arrayBufferToBase64(buffer) {
  //   var binary = '';
  //   var bytes = [].slice.call(new Uint8Array(buffer));
  //   bytes.forEach(b => {
  //     binary += String.fromCharCode(b);
  //     var path = RNFS.DocumentDirectoryPath + '/audio.txt';
  //     RNFS.writeFile(path, 'btoa(binary)')
  //       .then(success => {
  //       })
  //       .catch(err => {
  //       });
  //   });
  // }

  render() {
    const { mockDta, songs, filterSongs, isGuide, selectedSeconds, selectedMinutes } = this.state;

    // this.setState({exerciseArray:this.props.selectedExercise.exerciseText.exercise})

    // It work to Stop Auto maticly exercise and song


    // this.props.audio ? this.arrayBufferToBase64(this.props.audio.data) : null;
    // const animatedStyle = {
    //   opacity: this.state.animation,
    // }
    // Animated.timing(this.state.animation, {
    //   toValue: 1,
    //   duration: 1000,
    //   easing: Easing.bounce
    // }).start();
    return (
      <View style={style.mainContainer}>
        <View style={style.mainInner}>
          <View>
            {!this.state.pause ?
              <TouchableOpacity
                onPress={() => {
                  this.onPauseSound(false); 
                  this.props.handleRunning(true);
                  this.EndExcercise()
                }}
                activeOpacity={0.9}
                style={style.playBotton}>
                <Image
                  source={require('../../../../image/playbottongray.png')}
                  style={{
                    width: height * 0.12,
                    height: height * 0.12,
                  }}
                />
              </TouchableOpacity> :

              <>
                {
                  this.state.exercise == true && this.state.isGuide && this.state.guideStart && this.state.guideCompleted && this.guideIndex == 1 ?
                    <View style={style.MainContainer}>
                      <Animated.View style={[style.animatedBox, { transform: [{ scale: this.state.SpringValue }] }]} >
                        {this.state.isGuide && <Text style={style.remainHeading}>{this.state.exerciseArray[this.index]}</Text>}
                      </Animated.View>
                    </View>
                    :
                    null
                }
                {
                  this.state.guideText == true ?
                    <View style={style.MainContainer}>
                      <Animated.View style={[style.animatedBox, { transform: [{ scale: this.state.SpringValue }] }]} >
                        {!this.state.isGuide && <Text style={style.remainHeading}>{this.props.selectedExercise.exerciseText.guides[this.guideIndex]}</Text>}
                      </Animated.View>
                    </View>
                    :
                    null
                }

              </>
            }

          </View>

        </View>
        <>
          <Modal
            animationIn="slideInLeft"
            animationOut="slideOutRight"
            isVisible={this.state.isModalVisible}
            style={style.modalMainContainer}>
            <LinearGradient
              colors={['#363636', '#75c3ff', '#363636']}
              style={style.modalLinear}>
              <View style={style.modalHeaderContainer}>
                <View style={style.modalHeader}>
                  <Text style={style.selectExerText}>
                    {store.getState().language.selectExerciseSong}
                  </Text>

                  <RNPickerSelect
                    placeholder={{
                      label: store.getState().language.selectSong,
                      value: 'anambientday.mp3',
                    }}
                    onValueChange={(value, index) => this.valueChange(value, index)}
                    enabled={!this.state.pause}
                    style={{
                      inputAndroid: {
                        fontSize: width * 0.04,
                        fontFamily: Fonts.WorkSansBold,
                        width: width * 0.7,
                        height: height * 0.07,
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        color: 'white',
                        backgroundColor: '#000000ab',
                        borderRadius: width * 0.005,
                        elevation: width * 0.01,
                        borderWidth: 1,
                        borderColor: 'white',
                      },
                    }}
                    items={
                      filterSongs.length
                        ? filterSongs
                        : [{ label: 'Please Select', value: '' }]
                    }
                    useNativeAndroidPickerStyle={false}
                  />
                </View>
              </View>
              <View style={style.modalBodyContainer}>
                <View style={style.modalBodyInner}>
                  <Text style={style.timeInMinHeading}>
                    {store.getState().language.selectExerciseTimingsInMins}
                  </Text>
                  <View style={style.minInputView}>
                    <RNPickerSelect
                      placeholder={{
                        label: store.getState().language.minutes,
                        value: 0,
                      }}
                      onValueChange={selectedMinutes =>
                        this.valueMinutesChange(selectedMinutes)
                      }
                      // enabled={!this.state.pause}
                      style={{
                        inputAndroid: {
                          fontSize: width * 0.04,
                          fontFamily: Fonts.WorkSansBold,
                          width: width * 0.4,
                          height: height * 0.07,
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center',
                          color: 'white',
                          backgroundColor: '#000000ab',
                          borderRadius: width * 0.005,
                          elevation: width * 0.01,
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
                  <Text style={style.timeInSecHeading}>
                    {
                      store.getState().language
                        .selectInhaleExhaleHoldTimingsInSecs
                    }
                  </Text>
                  <View style={style.minInputView}>
                    <RNPickerSelect
                      placeholder={{
                        label: store.getState().language.seconds,
                        value: 0,
                      }}
                      onValueChange={selectedSeconds =>
                        this.valueSecondChange(selectedSeconds)
                      }
                      // enabled={!this.state.pause}
                      style={{
                        inputAndroid: {
                          fontSize: width * 0.04,
                          fontFamily: Fonts.WorkSansBold,
                          width: width * 0.4,
                          height: height * 0.07,
                          justifyContent: 'center',
                          alignItems: 'center',
                          textAlign: 'center',
                          color: 'white',
                          borderRadius: width * 0.005,
                          backgroundColor: '#000000ab',
                          elevation: width * 0.01,
                          borderWidth: 1,
                          borderColor: 'white',
                        },
                      }}
                      items={[
                        { label: '4', value: 4 },
                        { label: '5', value: 5 },
                        { label: '6', value: 6 },
                        { label: '7', value: 7 },
                        { label: '8', value: 8 },
                        { label: '9', value: 9 },
                      ]}
                      useNativeAndroidPickerStyle={false}
                    />
                  </View>
                </View>
              </View>
              <View style={style.modalFooterContainer}>
                <View style={style.modalFooter}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({
                        isModalVisible: !this.state.isModalVisible,
                      })
                      this.props.navigation.goBack();
                    }
                    }
                    style={style.okBotton}>
                    <Text style={style.okText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={this.toggleModal}
                    style={style.okBotton}>
                    <Text style={style.okText}>
                      {store.getState().language.ok}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </LinearGradient>
          </Modal>
        </>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  audio: state.subExercise.audio,
});

const mapDispatchToProps = { user_last_exer, sub_exer };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(freeExercise));


// import React, { Component } from "react";
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   FlatList,
//   Slider,
//   TextInput,
//   Keyboard
// } from "react-native";
// import Tts from "react-native-tts";

// type Props = {};
// export default class App extends Component<Props> {
//   state = {
//     voices: [],
//     ttsStatus: "initiliazing",
//     selectedVoice: null,
//     speechRate: 0.5,
//     speechPitch: 1,
//     text: "This is an example text"
//   };

//   constructor(props) {
//     super(props);
//     Tts.addEventListener("tts-start", event =>
//       this.setState({ ttsStatus: "started" })
//     );
//     Tts.addEventListener("tts-finish", event =>
//       this.setState({ ttsStatus: "finished" })
//     );
//     Tts.addEventListener("tts-cancel", event =>
//       this.setState({ ttsStatus: "cancelled" })
//     );
//     Tts.setDefaultRate(this.state.speechRate);
//     Tts.setDefaultPitch(this.state.speechPitch);
//     Tts.getInitStatus().then(this.initTts);
//   }

//   initTts = async () => {
//     const voices = await Tts.voices();
//     const availableVoices = voices
//       .filter(v => !v.networkConnectionRequired && !v.notInstalled)
//       .map(v => {
//         return { id: v.id, name: v.name, language: v.language };
//       });
//     let selectedVoice = null;
//     if (voices && voices.length > 0) {
//       selectedVoice = voices[0].id;
//       try {
//         await Tts.setDefaultLanguage(voices[0].language);
//       } catch (err) {
//         // My Samsung S9 has always this error: "Language is not supported"
//         console.log(`setDefaultLanguage error `, err);
//       }
//       await Tts.setDefaultVoice(voices[0].id);
//       this.setState({
//         voices: availableVoices,
//         selectedVoice,
//         ttsStatus: "initialized"
//       });
//     } else {
//       this.setState({ ttsStatus: "initialized" });
//     }
//   };

//   readText = async () => {
//     Tts.stop();
//     Tts.speak(this.state.text);
//   };

//   setSpeechRate = async rate => {
//     await Tts.setDefaultRate(rate);
//     this.setState({ speechRate: rate });
//   };

//   setSpeechPitch = async rate => {
//     await Tts.setDefaultPitch(rate);
//     this.setState({ speechPitch: rate });
//   };

//   onVoicePress = async voice => {
//     try {
//       await Tts.setDefaultLanguage(voice.language);
//     } catch (err) {
//       // My Samsung S9 has always this error: "Language is not supported"
//       console.log(`setDefaultLanguage error `, err);
//     }
//     await Tts.setDefaultVoice(voice.id);
//     this.setState({ selectedVoice: voice.id });
//   };

//   renderVoiceItem = ({ item }) => {
//     return (
//       <Button
//         title={`${item.language} - ${item.id}`}
//         color={this.state.selectedVoice === item.id ? undefined : "#969696"}
//         onPress={() => this.onVoicePress(item)}
//       />
//     );
//   };

//   render() {
//     /*
//      *       React Native TTS Example
//      *             |Read text|
//      *           Status: ready
//      *    Selected Voice: com.apple....
//      *      Speed: 0.50   ------o------
//      *      Pitch: 1.00   -----o-------
//      *  ________________________________
//      * | This is an example text        |
//      * |                                |
//      * |________________________________|
//      *           |de-DE - Anna|
//      *          |en-GB - Arthur|
//      *           |it-IT - Alice|
//      */
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>{`React Native TTS Example`}</Text>

//         <Button title={`Read text`} onPress={this.readText} />

//         <Text style={styles.label}>{`Status: ${this.state.ttsStatus ||
//           ""}`}</Text>

//         <Text style={styles.label}>{`Selected Voice: ${this.state
//           .selectedVoice || ""}`}</Text>

//         <View style={styles.sliderContainer}>
//           <Text
//             style={styles.sliderLabel}
//           >{`Speed: ${this.state.speechRate.toFixed(2)}`}</Text>
//           <Slider
//             style={styles.slider}
//             minimumValue={0.01}
//             maximumValue={0.99}
//             value={this.state.speechRate}
//             onSlidingComplete={this.setSpeechRate}
//           />
//         </View>

//         <View style={styles.sliderContainer}>
//           <Text
//             style={styles.sliderLabel}
//           >{`Pitch: ${this.state.speechPitch.toFixed(2)}`}</Text>
//           <Slider
//             style={styles.slider}
//             minimumValue={0.5}
//             maximumValue={2}
//             value={this.state.speechPitch}
//             onSlidingComplete={this.setSpeechPitch}
//           />
//         </View>

//         <TextInput
//           style={styles.textInput}
//           multiline={true}
//           onChangeText={text => this.setState({ text })}
//           value={this.state.text}
//           onSubmitEditing={Keyboard.dismiss}
//         />

//         <FlatList
//           keyExtractor={item => item.id}
//           renderItem={this.renderVoiceItem}
//           extraData={this.state.selectedVoice}
//           data={this.state.voices}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 26,
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF"
//   },
//   title: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10
//   },
//   label: {
//     textAlign: "center"
//   },
//   sliderContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   sliderLabel: {
//     textAlign: "center",
//     marginRight: 20
//   },
//   slider: {
//     width: 150
//   },
//   textInput: {
//     borderColor: "gray",
//     borderWidth: 1,
//     flex: 1,
//     width: "100%"
//   }
// });
