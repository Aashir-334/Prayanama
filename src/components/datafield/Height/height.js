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
} from 'react-native';
import { Item, Input, Thumbnail, Left } from 'native-base';
import Arrows from 'react-native-vector-icons/AntDesign';
import Next from 'react-native-vector-icons/AntDesign';
import SwitchToggle from 'react-native-switch-toggle';
import RadioButtonRN from 'radio-buttons-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import style from './style';
import { Fonts } from '../../../utils/fonts';
import { strings } from '../../../Locatization';
import Modal from 'react-native-modal';
import {store} from '../../../store';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');
export default class weight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHeightCm: '167.64',
      selectedHeightInch: '66',
      changeCmAndInch: false,
      toggle: false,
    };
  }

  selectValueCmAndInches = () => {
    if (this.state.changeCmAndInch == false) {
      this.setState(
        {
          isModalVisible: !this.state.isModalVisible,
        },
        () => {
          this.props.selectHeight(this.state.selectedHeightCm + ' cm');
        },
      );
    } else {
      this.setState(
        {
          isModalVisible: !this.state.isModalVisible,
        },
        () => {
          this.props.selectHeight(this.state.selectedHeightInch + ' inches');
        },
      );
    }
  };
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {
    return (
      <View>
        {/* Outer Container */}
        <View
          style={style.mainContainer}>
          <TouchableOpacity
            onPress={this.toggleModal}
            style={style.mainBotton}>
            <Text
              style={style.mainText}>
              {store.getState().language.height1}
            </Text>
            {!this.state.changeCmAndInch ? (
              <View
                style={style.selectGenderView}>
                <Text style={style.selectGenderText}>
                  {this.state.selectedHeightCm} cm
                </Text>
                <Arrows name={'upcircle'} size={15} color={'#4da9c5'} />
              </View>
            ) : (
                <View
                  style={style.selectGenderView}>
                  <Text style={style.selectGenderText}>
                    {this.state.selectedHeightInch} {store.getState().language.inches}
                  </Text>
                  <Arrows name={'upcircle'} size={15} color={'#4da9c5'} />
                </View>
            )}
          </TouchableOpacity>
        </View>

        {/* Modal */}

        <Modal
          animationIn="bounceIn"
          animationOut="bounceOut"
          isVisible={this.state.isModalVisible}
          style={style.modalContainer}>
          <View style={{ flex: 1 }}>

            {/* Modal Image */}

            <Image
              source={require('../../../../image/heightModal.jpg')}
              style={style.modalImage}
            />

            {/* Modal Header */}
            <View style={style.headerContainer}>
              <View
                style={style.headerInner}>
                <Text
                  style={style.headerHeading1}>
                  {store.getState().language.yourHeight}
                </Text>
              </View>
            </View>
            <View style={style.headerContainer2}>
              <View
                style={style.headerInner2}>
                {!this.state.changeCmAndInch ? (
                  <Text
                    style={style.headerHeadin2}>
                    {store.getState().language.centimeter}
                  </Text>
                ) : (
                    <Text
                      style={style.headerHeadin2}>
                      {store.getState().language.inches}
                    </Text>
                  )}
                <SwitchToggle
                  switchOn={this.state.changeCmAndInch}
                  onPress={() =>
                    this.setState({
                      changeCmAndInch: !this.state.changeCmAndInch,
                    })
                  }
                  useNativeDriver={false}
                  backgroundColorOn={'#e7e6e66c'}
                  circleColorOn={'#05dd3b'}
                  backgroundColorOff={'#e7e6e66c'}
                  circleColorOff={'white'}
                  containerStyle={style.switchBottonContainer}
                  circleStyle={style.switchBottonCircle}
                />
              </View>
            </View>

            {/* Modal Body */}
            <View style={style.bodyContainer}>
              <View
                style={style.bodyInner}>
                {!this.state.changeCmAndInch ? (
                  <View>
                    <View
                      style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <View
                        style={style.textInputView}>
                        <TextInput
                          placeholder={'167.64'}
                          placeholderTextColor={'white'}
                          style={style.textInput}
                          maxLength={6}
                          keyboardType={'numeric'}
                          onChangeText={selectedHeightCm =>
                            this.setState({ selectedHeightCm })
                          }
                        />
                        <Text
                          style={style.textInputText}>
                          cm
                        </Text>
                      </View>
                    </View>
                  </View>
                ) : (
                    <View>
                      <View
                        style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View
                          style={style.textInputView}>
                          <TextInput
                            placeholder={'66'}
                            placeholderTextColor={'white'}
                            style={style.textInput}
                            maxLength={6}
                            keyboardType={'numeric'}
                            onChangeText={selectedHeightInch =>
                              this.setState({ selectedHeightInch })
                            }
                          />
                          <Text
                            style={style.textInputText}>
                            {store.getState().language.inches}
                        </Text>
                        </View>
                      </View>
                    </View>
                  )}
              </View>
            </View>

            {/* Modal Footer */}
            <View style={style.footerContainer}>
              <View
                style={style.footerInner}>
                <TouchableOpacity onPress={this.selectValueCmAndInches}>
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
