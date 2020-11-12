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
} from 'react-native';
import {Item, Input, Thumbnail, Left} from 'native-base';
import Arrows from 'react-native-vector-icons/AntDesign';
import Next from 'react-native-vector-icons/AntDesign';
import RadioButtonRN from 'radio-buttons-react-native';
import SwitchToggle from 'react-native-switch-toggle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import {Fonts} from '../../../utils/fonts';
import {store} from '../../../store';

import {TextInput, ScrollView} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');
import {strings} from '../../../Locatization';
import style from './style';

export default class gender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: [
        {label: store.getState().language.male, value: store.getState().language.male},
        {label: store.getState().language.female, value: store.getState().language.female},
        {label: store.getState().language.custom, value: store.getState().language.custom},
      ],
      selectGender: store.getState().language.male,
      customValue: '',
      toggle: false,
      custum: store.getState().language.male,
    };
  }

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
    this.props.selectGender(this.state.selectGender);
  };
  render() {
    return (
      <View>
        <View style={style.mainContainer}>
          <TouchableOpacity onPress={this.toggleModal} style={style.mainBotton}>
            <Text style={style.mainText}>{store.getState().language.gender}</Text>

            {this.state.custum == store.getState().language.custom ? (
              <View style={style.selectGenderView}>
                <Text style={style.selectGenderText}>
                  {this.state.customValue}{' '}
                </Text>
                <Arrows name={'upcircle'} size={15} color={'#4da9c5'} />
              </View>
            ) : (
              <View style={style.selectGenderView}>
                <Text style={style.selectGenderText}>
                  {this.state.selectGender}
                </Text>
                <Arrows name={'upcircle'} size={15} color={'#4da9c5'} />
              </View>
            )}
          </TouchableOpacity>
        </View>
        <Modal
          animationIn="bounceIn"
          animationOut="bounceOut"
          isVisible={this.state.isModalVisible}
          style={style.modalContainer}>
          <View style={{flex: 1}}>
            <Image
              source={require('../../../../image/genderModal.jpg')}
              style={style.modalImage}
            />
            <View style={style.headerContainer}>
              <View style={style.headerInner}>
                <Text style={style.headerHeading1}>
                  {store.getState().language.selectYourGender}
                </Text>
              </View>
            </View>
            <View style={style.bodyContainer}>
              <View style={style.bodyInner}>
                <RadioButtonRN
                  style={{alignItems: 'center'}}
                  data={this.state.gender}
                  initial={1}
                  selectedBtn={e =>
                    this.setState({custum: e.label, selectGender: e.label})
                  }
                  boxStyle={style.boxStyle}
                  circleSize={width * 0.02}
                  activeColor="#b3fa83"
                  deactiveColor="white"
                  textStyle={style.textStyle}
                />
                {this.state.custum == store.getState().language.custom ? (
                  <View style={style.textInputCustomView}>
                    <TextInput
                      placeholder={store.getState().language.typeYouGender}
                      placeholderTextColor={'white'}
                      style={style.textInputCustom}
                      onChangeText={customValue =>
                        this.setState({customValue}, () => {
                          this.setState({selectGender: customValue});
                        })
                      }
                      // maxLength={11}
                    />
                  </View>
                ) : null}
              </View>
            </View>
            <View style={style.footerContainer}>
              <View style={style.footerInner}>
                <TouchableOpacity onPress={this.toggleModal}>
                  <View style={style.bottonContainer}>
                    <Text style={style.bottonText}>{store.getState().language.submit}</Text>
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
