// import React, {Component} from 'react';
// import {
//   View,
//   Text,
//   StatusBar,
//   FlatList,
//   TouchableOpacity,
//   Dimensions,
//   Image,
//   BackHandler,
//   Alert,
//   ToastAndroid,
// } from 'react-native';
// import style from './style';
// import Icon from 'react-native-vector-icons/AntDesign';
// import {strings} from '../../../Locatization';
// import FreeExercise from './freeExercise';
// import LinearGradient from 'react-native-linear-gradient';
// import {Fonts} from '../../../utils/fonts';
// import Back from 'react-native-vector-icons/MaterialIcons';
// import Notification from 'react-native-vector-icons/MaterialIcons';
// import {store} from '../../../store';
// import SpinnerLoader from '../../../components/spinnerLoader';
// const {width, height} = Dimensions.get('window');

// export default class ExerciseScreen extends Component {
//   static navigationOptions = {
//     title: 'Exercise',
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       songName: '',
//       seconds: 4,
//       pause: false,
//       songInfo:[],
//       bgLoading:false,
//       bgPath:'',
//       excerciseComplete:false
//     };

//   }
//   componentDidMount(){
//     this.setState({excerciseComplete:false})
//   }
//   handleSong = child => {
//     this.setState({
//       songName: child,
//     });
//   };
//   handleSeconds = child => {
//     this.setState({
//       seconds: child,
//     });
//   };
//   handlePause = child => {
//     this.setState(
//       {
//         pause: !this.state.pause,
//       },
//       console.log('-----', this.state.pause),
//     );
//   };

//   exerciseData = (info) => {
//     console.log('ifo',info);
//     this.setState({songInfo: info});
//   };
//   exerciseBgPath = (bgPath) => {
//     this.setState({bgPath:bgPath});
//   };
//   onPressFunc = () => {
//     Alert.alert(
//       store.getState().language.holdOn,
//       store.getState().language.firstYouCompleteYourExercise,
//       [
//         {
//           text: store.getState().language.ok,
//           //onPress: () => null,
//         },
//       ],
//     );
//   };
//   onBackButtonPressAndroid = () => {
//     // if (!this.props.navigation.isFocused()) {
//     //   return false;
//     // }
//     // if (true) {
//       Alert.alert(
//         store.getState().language.holdOn,
//         store.getState().language.firstYouCompleteYourExercise,
//         [
//           {
//             text: store.getState().language.ok,
//             //onPress: () => null,
//           },
//         ],
//       );
//       return true;
//     // } else {
//     //   return false;
//     // }
//   };
//   render() {
//     const {songInfo, pause} = this.state;
//     this.focus = this.props.navigation.isFocused()
//     BackHandler.addEventListener(
//       'hardwareBackPress',
//       this.onBackButtonPressAndroid,
//     )
//     if(this.state.excerciseComplete){
//       ToastAndroid.show(
//         store.getState().language.thanks,
//         ToastAndroid.BOTTOM,
//       )
//     }
//     // this.state.pause == true
//     //   ?  BackHandler.addEventListener(
//     //       'hardwareBackPress',
//     //       this.onBackButtonPressAndroid,
//     //     )
//     //   : BackHandler.removeEventListener(
//     //       'hardwareBackPress',
//     //       this.onBackButtonPressAndroid,
//     //     );
//     // let bgChanger;
//     // this.state.songName == 'relaxingg'
//     //   ? (bgChanger = require('../../../../image/background14.gif'))
//     //   : this.state.songName == 'awesomerelaxingg.mp3'
//     //   ? (bgChanger = require('../../../../image/background15.gif'))
//     //   : this.state.songName == 'anambientday.mp3'
//     //   ? (bgChanger = require('../../../../image/background14.gif'))
//     //   : this.state.songName == 'heaven.mp3'
//     //   ? (bgChanger = require('../../../../image/background17.gif'))
//     //   : this.state.songName == 'deepmeditation.mp3'
//     //   ? (bgChanger = require('../../../../image/background18.gif'))
//     //   : this.state.songName == 'healingwater.mp3'
//     //   ? (bgChanger = require('../../../../image/background16.gif'))
//     //   : this.state.songName == 'mindrelaxation.mp3'
//     //   ? (bgChanger = require('../../../../image/background22.gif'))
//     //   : this.state.songName == 'inthemoment.mp3'
//     //   ? (bgChanger = require('../../../../image/background19.gif'))
//     //   : this.state.songName == 'softrelaxing.mp3'
//     //   ? (bgChanger = require('../../../../image/background20.gif'))
//     //   : (bgChanger = require('../../../../image/background14.gif'));
//     return (
//       <View style={style.mainContainer}>
//         <StatusBar hidden={true} />
//         <TouchableOpacity
//           onPress={this.handlePause}
//           style={style.mainLenear}
//           activeOpacity={0.7}>
//           <SpinnerLoader isLoading={this.state.bgLoading} />
//           <Image
//             onLoadStart={e => {
//               this.setState({bgLoading:true})
//             }}
//             onLoad={e => {
//               this.setState({bgLoading:false})
//             }}
//             onLoadEnd={e =>  this.setState({bgLoading:false})}
//             source={{
//                uri:this.state.bgPath!=''&&this.state.bgPath
//              // uri:'https://paryanama-songs-bucket.s3.us-east-2.amazonaws.com/16032024340017632458339512742141.gif'
//             }}
//             style={style.backgroundImage}
//           />
//           <View style={style.headerContainer}>
//             <View style={style.headerInner}>
//               {this.state.pause == false ? (
//                 <TouchableOpacity
//                   onPress={this.onPressFunc}
//                   style={style.headerBackBotton}>
//                   <Back
//                     size={width * 0.08}
//                     color="black"
//                     name="keyboard-backspace"
//                   />
//                 </TouchableOpacity>
//               ) : null}
//               <Text style={style.headerHeading}>
//                 {store.getState().language.exerciseBegins}
//               </Text>
//             </View>
//           </View>
//           <View style={style.bodyContainer}>
//             <View style={style.bodyInner}>

//               <FreeExercise
//                 {...this.prop}
//                 bgSong={this.handleSong}
//                 second={this.handleSeconds}
//                 focus={this.focus}
//                 handleRunning = {(state)=>  this.setState(
//                   {
//                     pause: state,
//                   }
//                 )}
//                 handleComplete = {()=>this.setState({excerciseComplete:true})}
//                 excerciseComplete={this.state.excerciseComplete}
//                 pauseValue={pause}
//                 handlePause={this.handlePause}
//                 exerciseData={this.exerciseData}
//                 exerciseBgPath={this.exerciseBgPath}
//                 selectedExercise={this.props.navigation.state.params}
//               />
//               {/* <Time /> */}
//             </View>
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }
import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
  BackHandler,
  Alert,
  ToastAndroid,
} from 'react-native';
import style from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import { strings } from '../../../Locatization';
import FreeExercise from './freeExercise';
import LinearGradient from 'react-native-linear-gradient';
import { Fonts } from '../../../utils/fonts';
import Back from 'react-native-vector-icons/MaterialIcons';
import Notification from 'react-native-vector-icons/MaterialIcons';
import { store } from '../../../store';
import SpinnerLoader from '../../../components/spinnerLoader';
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
      songInfo: [],
      bgLoading: false,
      bgPath: '',
      excerciseComplete: false
    };

  }
  componentDidMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.onBackButtonPressAndroid,
    )
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.onBackButtonPressAndroid,
    );

  }
  handleSong = child => {
    this.setState({
      songName: child,
    });
  };
  handleSeconds = child => {
    this.setState({
      seconds: child,
    });
  };
  handlePause = child => {
    this.setState(
      {
        pause: !this.state.pause,
      },
      console.log('-----', this.state.pause),
    );
  };

  exerciseData = (info) => {
    console.log('ifo', info);
    this.setState({ songInfo: info });
  };
  exerciseBgPath = (bgPath) => {
    this.setState({ bgPath: bgPath });
  };
  onPressFunc = () => {
    Alert.alert(
      store.getState().language.holdOn,
      store.getState().language.firstYouCompleteYourExercise,
      [
        {
          text: store.getState().language.ok,
          //onPress: () => null,
        },
      ],
    );
  };
  onBackButtonPressAndroid = () => {
    // if (!this.props.navigation.isFocused()) {
    //   return false;
    // }
   if (this.state.pause && !this.state.excerciseComplete) {
    Alert.alert(
      store.getState().language.holdOn,
      store.getState().language.firstYouCompleteYourExercise,
      [
        {
          text: store.getState().language.ok,
          //onPress: () => null,
        },
      ],
    );
    return true;
    } 
    else {
      return false;
    }
  };
  render() {
    const { songInfo, pause } = this.state;
    this.focus = this.props.navigation.isFocused()
    // BackHandler.addEventListener(
    //   'hardwareBackPress',
    //   this.onBackButtonPressAndroid,
    // )
    
    // let bgChanger;
    // this.state.songName == 'relaxingg'
    //   ? (bgChanger = require('../../../../image/background14.gif'))
    //   : this.state.songName == 'awesomerelaxingg.mp3'
    //   ? (bgChanger = require('../../../../image/background15.gif'))
    //   : this.state.songName == 'anambientday.mp3'
    //   ? (bgChanger = require('../../../../image/background14.gif'))
    //   : this.state.songName == 'heaven.mp3'
    //   ? (bgChanger = require('../../../../image/background17.gif'))
    //   : this.state.songName == 'deepmeditation.mp3'
    //   ? (bgChanger = require('../../../../image/background18.gif'))
    //   : this.state.songName == 'healingwater.mp3'
    //   ? (bgChanger = require('../../../../image/background16.gif'))
    //   : this.state.songName == 'mindrelaxation.mp3'
    //   ? (bgChanger = require('../../../../image/background22.gif'))
    //   : this.state.songName == 'inthemoment.mp3'
    //   ? (bgChanger = require('../../../../image/background19.gif'))
    //   : this.state.songName == 'softrelaxing.mp3'
    //   ? (bgChanger = require('../../../../image/background20.gif'))
    //   : (bgChanger = require('../../../../image/background14.gif'));
    // console.warn("ok")
    return (
      <View style={style.mainContainer}>
        <StatusBar hidden={true} />
        <TouchableOpacity
          onPress={this.state.pause && !this.state.excerciseComplete ? null : this.handlePause}
          activeOpacity={1}
          style={style.mainLenear}
          activeOpacity={0.7}>
          <SpinnerLoader isLoading={this.state.bgLoading} />
          <Image
            // onLoadStart={e => {
            //   this.setState({bgLoading:true})
            // }}
            // onLoad={e => {
            //   this.setState({bgLoading:false})
            // }}
            // onLoadEnd={e =>  this.setState({bgLoading:false})}
            source={{
              uri: this.state.bgPath != '' && this.state.bgPath
              // uri:'https://paryanama-songs-bucket.s3.us-east-2.amazonaws.com/16032024340017632458339512742141.gif'
            }}
            style={style.backgroundImage}
          />
          <View style={style.headerContainer}>
            <View style={style.headerInner}>
              {this.state.pause == false ? (
                <TouchableOpacity
                  onPress={this.onPressFunc}
                  style={style.headerBackBotton}>
                  <Back
                    size={width * 0.08}
                    color="black"
                    name="keyboard-backspace"
                  />
                </TouchableOpacity>
              ) : null}
              <Text style={style.headerHeading}>
                {store.getState().language.exerciseBegins}
              </Text>
            </View>
          </View>
          <View style={style.bodyContainer}>
            <View style={style.bodyInner}>

              <FreeExercise
                {...this.prop}
                bgSong={this.handleSong}
                second={this.handleSeconds}
                focus={this.focus}
                handleRunning={(state) => this.setState(
                  {
                    pause: state,
                  }
                )}
                Loading={(state) => this.setState({ bgLoading: state })}
                handleComplete={() => this.setState({ excerciseComplete: true })}
                excerciseComplete={this.state.excerciseComplete}
                pauseValue={pause}
                handlePause={this.handlePause}
                exerciseData={this.exerciseData}
                exerciseBgPath={this.exerciseBgPath}
                selectedExercise={this.props.navigation.state.params}
              />
              {/* <Time /> */}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

