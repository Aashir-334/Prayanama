import React, { Component } from 'react';
import {
  Platform,
  View,
  StatusBar,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  Alert
} from 'react-native';
import { Item, Input, Thumbnail, Left } from 'native-base';
import Arrows from 'react-native-vector-icons/AntDesign';
import Next from 'react-native-vector-icons/MaterialIcons';
import RNPickerSelect from 'react-native-picker-select';
import Age from '../../components/datafield/age/age';
import Weight from '../../components/datafield/Weight/weight';
import Height from '../../components/datafield/Height/height';
import Gender from '../../components/datafield/Gender/gender';
import { Fonts } from '../../utils/fonts';
import style from './styleSignup';
import { strings } from '../../Locatization';
import {store} from '../../store';

// import {
//   WheelPicker,
//   TimePicker,
//   DatePicker,
// } from 'react-native-wheel-picker-android';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');
export default class SliderFormMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigateToScreen1: false,
      name: '',
      inputTextGender: '',
      password: '',
      email: '',
      age: 0,
      gender: '',
      weight: '',
      heights: '',
    };
    this.handleAge = this.handleAge.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleWeight = this.handleWeight.bind(this);
    this.handleHeight = this.handleHeight.bind(this);
  }
  buttonChanger = () => {
    if (this.state.name == '') {
      Alert.alert(
        store.getState().language.alert,
        store.getState().language.enterName,
        [{ text: store.getState().language.ok}]);
    } else if (this.state.email == '') {
      Alert.alert(
        store.getState().language.alert,
        store.getState().language.enterEmail,
        [{ text: store.getState().language.ok}]);
    } else if (this.state.password == '') {
      Alert.alert(
        store.getState().language.alert,
        store.getState().language.enterPassword,
        [{ text: store.getState().language.ok}]);
    } else if (this.state.age == 0) {
      Alert.alert(
        store.getState().language.alert,
        store.getState().language.enterAge,
        [{ text: store.getState().language.ok}]);
    } else if (this.state.gender == '') {
      Alert.alert(
        store.getState().language.alert,
        store.getState().language.enterGender,
        [{ text: store.getState().language.ok}]);;
    } else if (this.state.weight == '') {
      Alert.alert(
        store.getState().language.alert,
        store.getState().language.enterWeight,
        [{ text: store.getState().language.ok}]);
    } else if (this.state.heights == '') {
      Alert.alert(
        store.getState().language.alert,
        store.getState().language.enterHeight,
        [{ text: store.getState().language.ok}]);
    } else {
      const { email, password, name, age, gender, weight, heights } = this.state;

      this.props.navigation.navigate('Selection1', {
        user: { email, password, name, age, gender, weight, heights },
      });
    }
  };
  handleAge(child) {
    this.setState({
      age: child,
    });
  }
  handleGender(child) {
    this.setState({
      gender: child,
    });
  }
  handleWeight(child) {
    this.setState({
      weight: child,
    });
  }
  handleHeight(child) {
    this.setState({
      heights: child,
    });
  }

  render() {
    return (
      <ScrollView style={style.Main} showsVerticalScrollIndicator={false}>
        {/* status / BackgroundImage /Header */}

        <StatusBar
          backgroundColor="#325570"
        />
        <Image
          source={require('../../../image/signup1.jpg')}
          style={style.imageBackground}
        />
        <View
          style={style.dataFieldContainer}>
          <View
            style={style.dataFieldInner}>
            <Text
              style={style.headerText}>
              {store.getState().language.tellUs}
            </Text>
          </View>
        </View>

        {/* end */}
        {/* Data Fields Name/Age/Gender/Height/Weight */}

        <View
          style={style.bodyContainer}>
          <View
            style={style.nameContainer}>
            <View style={style.Text}>
              <Input
                style={style.nameInput}
                placeholder={store.getState().language.name}
                onChangeText={name => this.setState({ name })}
              />
            </View>
          </View>
          <View
            style={style.nameContainer}>
            <View style={style.Text}>
              <Input
                style={style.nameInput}
                keyboardType='email-address'
                placeholder="email@.com"
                onChangeText={email => this.setState({ email })}
              />
            </View>
          </View>
          <View
            style={style.nameContainer}>
            <View style={style.Text}>
              <Input
                style={style.nameInput}
                value={this.state.password}
                secureTextEntry={true}
                placeholder={store.getState().language.password}
                onChangeText={password => this.setState({ password })}
              />
            </View>
          </View>
          <Age selectAge={this.handleAge} />
          <Gender selectGender={this.handleGender} />
          <Weight weightKg={this.handleWeight} />
          <Height selectHeight={this.handleHeight} />
        </View>

        {/* Next Button Chech restrictions And go to Next page & footer Text*/}
        <View
          style={style.footerContainer}>
          <View
            style={style.bottonContainer}>
            <View>
              <TouchableOpacity onPress={() => this.buttonChanger()} activeOpacity={0.7}>
                <View
                  style={style.botton}>
                  <Text
                    style={style.bottonText}>
                    {store.getState().language.next}
                  </Text>
                  <Next name={'navigate-next'} size={width * .07} color={'white'} style={{ position: 'absolute', right: width * .02 }} />
                </View>
              </TouchableOpacity>
              <View
                style={style.footerTextContainer}>
                <Text
                  style={style.footerText}>
                  {store.getState().language.signUpText}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}



