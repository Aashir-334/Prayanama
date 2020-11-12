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
import { strings } from '../../../Locatization';
import Modal from 'react-native-modal';
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
        }
        ,
        () => {
          this.props.selectHeight(this.state.selectedHeightCm + ' cm');
        },
      );
    } else {
      this.setState(
        {
          isModalVisible: !this.state.isModalVisible,
        }
        ,
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
            {!this.state.changeCmAndInch ? (
              <View
                style={style.selectGenderView}>
                <Text style={style.selectGenderText}>
                  {this.state.selectedHeightCm} cm
                </Text>
                <Arrows name={'upcircle'} size={15} color={'white'} />
              </View>
            ) : (
                <View
                  style={style.selectGenderView}>
                  <Text style={style.selectGenderText}>
                    {this.state.selectedHeightInch} {strings.inches}
                  </Text>
                  <Arrows name={'upcircle'} size={15} color={'white'} />
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
              source={require('../../../../image/profileBack.jpg')}
              style={style.modalImage}
            />
            {/* Modal Header */}
            <View style={style.headerContainer}>
              <View
                style={style.headerInner}>
                <Text
                  style={style.headerHeading1}>
                  {strings.yourHeight}
                </Text>
              </View>
            </View>
            <View style={style.headerContainer2}>
              <View
                style={style.headerInner2}>
                {!this.state.changeCmAndInch ? (
                  <Text
                    style={style.headerHeadin2}>
                    {strings.centimeter}
                  </Text>
                ) : (
                    <Text
                      style={style.headerHeadin2}>
                      {strings.inches}
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
                            {strings.inches}
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
                      {strings.submit}
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

const style = StyleSheet.create({

    
    mainContainer: {
        height: height * 0.07,
        width: width * .58,
    },
    mainBotton: {
        flex: 1,
    },
    mainText: {
        fontFamily: Fonts.BalooChettan2,
        fontSize: width * .05,
        color: 'rgb(77, 77, 77)',
    },
    selectGenderView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: width * .01
    },
    selectGenderText: {
        fontFamily: Fonts.BalooChettan2,
        fontSize: width * .05,
    },
    // Modal Styling


    modalContainer: {
        backgroundColor: 'white',
        maxHeight: height * 0.45,
        maxWidth: width * 1,
        top: height * 0.09,
        borderRadius: width * .1,
    },
    modalInner: {
        height: height * 0.4,
        width: width * .83,
        backgroundColor: '#97C9EE',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        elevation: width * .03,
        borderRadius: width * .1,
    },
    modalImage: {
        height: height * 0.4,
        width: width * .83,
        position: 'absolute',
        borderRadius: width * .1,
    },
    headerContainer: {
        height: height * 0.07,
        width: width * 0.9,
    },
    headerInner: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerHeading1: {
        fontFamily: Fonts.BalooChettan2,
        fontSize: height * .038,
        color: 'white',
        textShadowOffset: {
            width: width * 0.001,
            height: height * 0.001,
        },
        textShadowRadius: width * 0.005,
        textShadowColor: 'black',
    },
    headerContainer2: {
        height: height * 0.06,
        width: width * 0.9
    },
    headerInner2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerHeadin2: {
        fontFamily: Fonts.BalooChettan2,
        fontSize: height * .033,
        color: 'white',
        textShadowOffset: {
            width: width * 0.001,
            height: height * 0.001,
        },
        textShadowRadius: width * 0.005,
        textShadowColor: 'black',
    },
    switchBottonContainer: {
        width: width * 0.15,
        height: height * 0.038,
        borderRadius: width * 0.04,
        padding: width * 0.01,
        elevation: width * 0.005,
        marginLeft: width * 0.02,
    },
    switchBottonCircle: {
        width: width * 0.052,
        height: height * 0.029,
        borderRadius: width * 0.1,
        backgroundColor: 'white',
    },
    bodyContainer: {
        height: height * 0.16,
        width: width * 0.9
    },
    bodyInner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInputView: {
        alignItems: 'center',
        flexDirection: 'row',
        width: width * 0.5,
        height: height * 0.07,
        backgroundColor: '#41404098',
        borderRadius: width * 0.1,
        justifyContent: 'center',
        borderWidth:2,
        borderColor:'white',
        paddingHorizontal: width * 0.05,
        elevation: width * 0.01,
    },
    textInput: {
        fontFamily: Fonts.BalooChettanBold,
        textAlign: 'center',
        fontSize: width * 0.06,
        width: width * 0.3,
        // marginLeft:width * .08,
        color: 'white',
    },
    textInputText:{
        color: 'white',
        fontSize: width * 0.05,
        position: 'relative',
        fontFamily: Fonts.BalooChettanBold,
        right: width * 0.02,
      },
    footerContainer: { 
        height: height * 0.11, 
        width: width * 0.9 
    },
    footerInner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottonContainer: {
        backgroundColor: 'black',
        padding: width * 0.02,
        paddingLeft: width * 0.06,
        alignItems: 'center',
        borderRadius: width * 0.1,
        elevation: width * 0.005,
        height: height * 0.06,
        width: width * 0.5,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    bottonText: {
        color: '#fff',
        fontSize: width * 0.04,
        position: 'relative',
        // left: width * .01,
        fontFamily: Fonts.BalooChettan2,
        marginRight: width * 0.02,
    },

});