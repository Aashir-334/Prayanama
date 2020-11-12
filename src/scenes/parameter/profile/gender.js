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
import RadioButtonRN from 'radio-buttons-react-native';
import SwitchToggle from 'react-native-switch-toggle';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import { Fonts } from '../../../utils/fonts';
import {store} from '../../../store';

import { TextInput, ScrollView } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');
// import { strings } from '../../../Locatization';

export default class gender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: [
                { label: store.getState().language.male, value: store.getState().language.male },
                { label: store.getState().language.female, value: store.getState().language.female },
                { label: store.getState().language.custom, value: store.getState().language.custom },
            ],
            selectGender: store.getState().language.male,
            customValue: '',
            toggle: false,
            custum: store.getState().language.male,
        };
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
        this.props.selectGender(this.state.selectGender);

    };
    render() {
        return (
            <View>
                <View style={style.mainContainer}>
                    <TouchableOpacity onPress={this.toggleModal} style={style.mainBotton}>
                        {this.state.custum == store.getState().language.custom ? (
                            <View style={style.selectGenderView}>
                                <Text style={style.selectGenderText}>
                                    {this.state.customValue}{' '}
                                </Text>
                                <Arrows name={'upcircle'} size={15} color={'white'} />
                            </View>
                        ) : (
                                <View style={style.selectGenderView}>
                                    <Text style={style.selectGenderText}>
                                        {this.state.selectGender}
                                    </Text>
                                    <Arrows name={'upcircle'} size={15} color={'white'} />
                                </View>
                            )}
                    </TouchableOpacity>
                </View>
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
                            <View style={style.headerInner}>
                                <Text style={style.headerHeading1}>
                                    {store.getState().language.selectYourGender}
                                </Text>
                            </View>
                        </View>
                        <View style={style.bodyContainer}>
                            <View style={style.bodyInner}>
                                <RadioButtonRN
                                    style={{ alignItems: 'center' }}
                                    data={this.state.gender}
                                    initial={1}
                                    selectedBtn={e =>
                                        this.setState({ custum: e.label, selectGender: e.label })
                                    }
                                    boxStyle={style.boxStyle}
                                    circleSize={width * 0.02}
                                    activeColor="black"
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
                                                this.setState({ customValue }, () => {
                                                    this.setState({ selectGender: customValue });
                                                })
                                            }
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
const style = StyleSheet.create({

    mainContainer: {
        height: height * 0.07,
        width: width * .55,
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
        marginRight: width * .01
    },
    selectGenderText: {
        fontFamily: Fonts.BalooChettan2,
        fontSize: width * .05,
    },
    // Modal Styling
    modalContainer: {
        backgroundColor: 'white',
        maxHeight: height * 0.5,
        maxWidth: width * 1,
        top: height * 0.09,
        borderRadius: width * .1,
    },
    modalInner: {
        height: height * 0.45,
        width: width * .83,
        backgroundColor: '#97C9EE',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        elevation: width * .03,
        borderRadius: width * .1,
    },
    modalImage: {
        height: height * 0.45,
        width: width * .83,
        position: 'absolute',
        borderRadius: width * .1,
    },
    headerContainer: {
        height: height * 0.07,
        width: width * 0.9
    },
    headerInner: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerHeading1: {
        fontFamily: Fonts.BalooChettan2,
        fontSize: width * 0.08,
        // fontWeight: 'bold',
        color: 'white',
        textShadowOffset: {
            width: width * 0.001,
            height: height * 0.001,
        },
        textShadowRadius: width * 0.005,
        textShadowColor: 'black',
    },
    bodyContainer: {
        height: height * 0.28,
        width: width * 0.9
    },
    bodyInner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxStyle: {
        width: width * 0.6,
        height: height * 0.02,
        backgroundColor: '#adadadc4',
        borderWidth: width * 0.01,
        elevation: width * 0.006,
        marginBottom: -4,
    },
    textStyle: {
        marginLeft: width * 0.18,
        fontSize: width * 0.035,
        fontFamily: Fonts.BalooChettan2,
        color: 'black',
    },
    textInputCustomView: {
        alignItems: 'center',
        flexDirection: 'row',
        width: width * 0.5,
        height: height * 0.06,
        backgroundColor: '#41404098',
        borderRadius: width * 0.1,
        justifyContent: 'center',
        paddingHorizontal: width * 0.05,
        elevation: width * 0.005,
        marginTop: height * 0.02,
    },
    textInputCustom: {
        fontFamily: Fonts.BalooChettan2,
        textAlign: 'center',
        color: 'white',
        fontSize: width * 0.04,
        width: width * 0.45,
    },
    footerContainer: {
        height: height * 0.1,
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