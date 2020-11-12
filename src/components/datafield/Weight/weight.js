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
import { Fonts } from '../../../utils/fonts';
import style from './style';
import {store} from '../../../store';

import Modal from 'react-native-modal';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import { strings } from '../../../Locatization';
const { width, height } = Dimensions.get('window');
export default class weight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedWeightKg: '55',
      selectedWeightLb: '121.25',
      ageValue: null,
      changeKgAndLb: false,
      toggle: false,
      kgWeight: 0,
    };
  }
  selectValueKgAndLb = () => {
    if (this.state.changeKgAndLb == false) {
      this.setState(
        {
          isModalVisible: !this.state.isModalVisible,
        },
        () => {
          this.props.weightKg(this.state.selectedWeightKg + ' kg');
        },
      );
    } else {
      this.setState(
        {
          isModalVisible: !this.state.isModalVisible,
        },
        () => {
          this.props.weightKg(this.state.selectedWeightLb + ' lb');
        },
      );
    }
  };
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {
    const { selectAge } = this.props;

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
              {store.getState().language.weight}
            </Text>
            {!this.state.changeKgAndLb ? (
              <View
                style={style.selectGenderView}>
                <Text style={style.selectGenderText}>
                  {this.state.selectedWeightKg} kg
                </Text>
                <Arrows name={'upcircle'} size={15} color={'#4da9c5'} />
              </View>
            ) : (
                <View
                  style={style.selectGenderView}>
                  <Text style={style.selectGenderText}>
                    {this.state.selectedWeightLb} lb
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
          <View style={style.modalInner}>

            {/* Modal Image */}
            <Image
              source={require('../../../../image/weightModal.jpg')}
              style={style.modalImage}
            />
            
            {/* Modal Header */}
            <View style={style.headerContainer}>
              <View
                style={style.headerInner}>
                <Text
                  style={style.headerHeading1}>
                  {store.getState().language.yourWeight}
                </Text>
              </View>
            </View>
            <View style={style.headerContainer2}>
              <View
                style={style.headerInner2}>
                {!this.state.changeKgAndLb ? (
                  <Text
                    style={style.headerHeadin2}>
                    {store.getState().language.kilogram}
                  </Text>
                ) : (
                    <Text
                      style={style.headerHeadin2}>
                    {store.getState().language.pounds}
                    </Text>
                  )}
                <SwitchToggle
                  switchOn={this.state.changeKgAndLb}
                  onPress={() =>
                    this.setState({ changeKgAndLb: !this.state.changeKgAndLb })
                  }
                  useNativeDriver={false}
                  backgroundColorOn={'#ffffff6c'}
                  circleColorOn={'#05dd3b'}
                  backgroundColorOff={'#ffffff6c'}
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
                {!this.state.changeKgAndLb ? (
                  <View>
                    <View
                      style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <View
                        style={style.textInputView}>
                        <TextInput
                          placeholder={'55'}
                          placeholderTextColor={'white'}
                          style={style.textInput}
                          maxLength={6}
                          keyboardType={'numeric'}
                          onChangeText={selectedWeightKg =>
                            this.setState({ selectedWeightKg })
                          }
                        />
                        <Text
                          style={style.textInputText}>
                          kg
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
                            placeholder={'121.25'}
                            placeholderTextColor={'white'}
                            style={style.textInput}
                            maxLength={6}
                            keyboardType={'numeric'}
                            onChangeText={selectedWeightLb =>
                              this.setState({ selectedWeightLb })
                            }
                          />
                          <Text
                            style={style.textInputText}>
                            lb
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
                <TouchableOpacity onPress={this.selectValueKgAndLb}>
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
