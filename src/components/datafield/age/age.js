import React, {Component} from 'react';
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
import {Item, Input, Thumbnail, Left} from 'native-base';
import Arrows from 'react-native-vector-icons/AntDesign';
import Next from 'react-native-vector-icons/AntDesign';
import {store} from '../../../store';

// import RNPickerSelect from 'react-native-picker-select';

// import RadioButtonRN from 'radio-buttons-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import { Fonts } from '../../../utils/fonts';
import { strings } from '../../../Locatization';
import style from './style';

const {width, height} = Dimensions.get('window');
export default class age extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAge: 1990,
      calaulateAge: 2020 - 1990,
      ageValue: null,
      isModalVisible: false,
    };
  }

  _ageCalculate = () => {
    let add = 2020 - parseInt(this.state.selectedAge);
    if (this.state.selectedAge < 1950 || this.state.selectedAge > 2010) {
      Alert.alert(
        store.getState().language.alert,
        store.getState().language.pleaseTypeCurrectYears,
        [{ text: store.getState().language.ok}]
      );
      this.setState({
        selectedAge: 1990,
        isModalVisible: this.state.isModalVisible,
      });
    } else {
      this.setState(
        {
          calaulateAge: add,
          isModalVisible: !this.state.isModalVisible,
        },
        () => {
          this.props.selectAge(this.state.calaulateAge);
        },
      );
    }
  };
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  render() {
    // console.log(this.state.calaulateAge)
    const {selectAge} = this.props;
    return (
      <View >
        <View
          style={style.mainContainer}>
          <TouchableOpacity
            onPress={this.toggleModal}
            style={style.mainBotton}>
            <Text
              style={style.mainText}>
              {store.getState().language.yearOfBirth}
            </Text>
            <View
              style={style.selectAgeView}>
              <Text style={style.selectAgeText}>
                {this.state.selectedAge}
              </Text>
              <Arrows name={'upcircle'} size={15} color={'#4da9c5'} />
            </View>
          </TouchableOpacity>
        </View>
        <Modal
          animationIn="bounceIn"
          animationOut="bounceOut"
          isVisible={this.state.isModalVisible}
          style={style.modalContainer}>
          <View style={style.modalInner}>
            <Image
              source={require('../../../../image/age.jpg')}
              style={style.modalImage}
            />
            <View style={style.headerContainer}>
              <View
                style={style.headerInner}>
                <Text
                  style={style.headerHeading1}>
                  {store.getState().language.whichYearYouBorn}
                </Text>
                <Text
                  style={style.headerHeading2}>
                  {store.getState().language.typeYourBirthYear}
                </Text>
                <Text
                  style={style.headerHeading2}>
                  {store.getState().language.minMax}
                </Text>
              </View>
            </View>
            <View style={style.bodyContainer}>
              <View
                style={style.bodyInner}>
                <View
                  style={style.textInputView}>
                  <TextInput
                    placeholder={'1990'}
                    placeholderTextColor={'black'}
                    style={style.textInput}
                    maxLength={4}
                    keyboardType={'numeric'}
                    onChangeText={selectedAge => this.setState({selectedAge})}
                  />
                </View>
              </View>
            </View>
            <View style={style.footerContainer}>
              <View
                style={style.footerInner}>
                <TouchableOpacity onPress={this._ageCalculate}>
                  <View
                    style={style.bottonContainer}>
                    <Text
                      style={style.bottonText}>
                      {store.getState().language.submit}
                    </Text>
                    <Next
                      name={'checkcircle'}
                      size={width * 0.03}
                      color={'white'}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
