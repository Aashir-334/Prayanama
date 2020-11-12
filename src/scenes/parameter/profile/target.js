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
import SwitchToggle from 'react-native-switch-toggle';
import SelectMultiple from 'react-native-select-multiple';
import RadioButtonRN from 'radio-buttons-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import EditText from 'react-native-vector-icons/Entypo';
import {Fonts} from '../../../utils/fonts';
import Modal from 'react-native-modal';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import {strings} from '../../../Locatization';
import {Toolbar, IconToggle, Icon} from 'react-native-material-ui';
import SpinnerLoader from '../../../components/spinnerLoader';

import {
  profile_edit,
  updateCategory,
  updateArchType,
} from '../../../actions/auth';
import {store} from '../../../store';
import {connect} from 'react-redux';

const {width, height} = Dimensions.get('window');
const workOnData = [
  {
    label: store.getState().language.mind,
    value: 'Mind',
  },
  {
    label: store.getState().language.body,
    value: 'Body',
  },
  {
    label: store.getState().language.emotion,
    value: 'Emotion',
  },
  {
    label: store.getState().language.ethicBody,
    value: 'Ethic Body',
  },
];
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
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        isLoading: false,
        isModalVisible: false,
      });
    });
  }
  onSelectionsChange = selectedArch => {
    // selectedFruits is array of { label, value }

    // selectedArch.map(v =>
    //   console.log('selectedArchselectedArchselectedArch', v.value),
    // );
    this.setState({selectedArch});
  };
  //   _takeCondition = () => {
  //     if (this.state.selectedArch == '') {
  //       Alert.alert(strings.alert, strings.selectAnyone, [{text: strings.ok}]);
  //     } else {
  //       this.state.selectedArch.map(arch =>
  //         this.state.labelsArch.push(arch.value),
  //       );
  //       this.props.navigation.navigate('Selection2', {
  //         category: this.state.labelsArch,
  //         user: this.props.navigation.state.params.user,
  //       });
  //     }
  //   };

  toggleModal = isSubmit => {
    const {selectedArch, isModalVisible} = this.state;

    this.setState({isModalVisible: !isModalVisible});

    isSubmit && this.props.getData(selectedArch);
  };

  handleAddTarget = () => {
    const {selectedArch, isModalVisible} = this.state;

    this.setState({isLoading: true});

    let payload = [];

    selectedArch.map(v => payload.push(v.value));

    store.dispatch(updateCategory({targetCategory: payload}));

    this.setState({isModalVisible: !isModalVisible});

    // updateCategory
  };
  renderLoader() {
    let {isLoading} = this.state;
    return <SpinnerLoader isLoading={isLoading} />;
  }
  render() {
    const {selectAge} = this.props;

    return (
      <View style={style.mainContainer}>
        {/* Outer Container */}
        <TouchableOpacity
          onPress={() => this.toggleModal(false)}
          style={style.bottonView}>
          <View style={style.headerMenuBotton}>
            <EditText size={width * 0.04} color="white" name="edit" />
          </View>
        </TouchableOpacity>
        {/* Modal */}
        <Modal
          animationIn="zoomIn"
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
                <TouchableOpacity
                  onPress={() =>
                    this.setState({isModalVisible: !this.state.isModalVisible})
                  }
                  style={style.headerBackBotton}>
                  <Icon
                    name="navigate-before"
                    size={height * 0.05}
                    color="black"
                  />
                </TouchableOpacity>
                <Text style={style.headerHeading1}>
                  {store.getState().language.form3Heading}
                </Text>
              </View>
            </View>
            <View style={style.headerContainer2}>
              <View style={style.headerInner2}>
                <Text style={style.headerHeading2}>
                  {store.getState().language.form3Heading2}
                </Text>
              </View>
            </View>
            {/* Modal Body */}
            <View style={style.bodyContainer}>
              <View style={style.bodyInner}>
                <SelectMultiple
                  rowStyle={style.multiRow}
                  labelStyle={style.multiLabel}
                  selectedLabelStyle={{color: 'white'}}
                  selectedRowStyle={{backgroundColor: 'black'}}
                  selectedCheckboxStyle={{backgroundColor: 'white'}}
                  items={workOnData}
                  selectedItems={this.state.selectedArch}
                  onSelectionsChange={this.onSelectionsChange}
                />
              </View>
            </View>
            {/* Modal Footer */}
            <View style={style.footerContainer}>
              <View style={style.footerInner}>
                <TouchableOpacity onPress={() => this.handleAddTarget(true)}>
                  <View style={style.bottonContainer}>
                    <Text style={style.bottonText}>{strings.submit}</Text>
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
        {this.renderLoader()}
      </View>
    );
  }
}

const style = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    top: height * -0.02,
    right: height * -0.02,
  },
  headerMenuBotton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.05,
    width: height * 0.05,
    elevation: width * 0.003,
    backgroundColor: 'black',
    borderRadius: height * 0.2,
  },
  mainBotton: {
    flex: 1,
  },
  mainText: {
    fontFamily: Fonts.BalooChettan2,
    fontSize: width * 0.05,
    color: 'rgb(77, 77, 77)',
  },
  selectGenderView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: width * 0.01,
  },
  selectGenderText: {
    fontFamily: Fonts.BalooChettan2,
    fontSize: width * 0.05,
  },
  // Modal Styling
  modalContainer: {
    backgroundColor: 'white',
    maxHeight: height * 0.7,
    maxWidth: width * 1,
    top: height * 0.12,
    borderRadius: width * 0.1,
  },
  modalInner: {
    height: height * 0.65,
    width: width * 0.83,
    backgroundColor: '#97C9EE',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    elevation: width * 0.03,
    borderRadius: width * 0.1,
  },
  modalImage: {
    height: height * 0.65,
    width: width * 0.83,
    position: 'absolute',
    borderRadius: width * 0.1,
  },
  headerContainer: {
    height: height * 0.1,
    width: width * 0.78,
  },
  headerInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBackBotton: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: width * -0.02,
  },
  headerHeading1: {
    width: width * 0.65,
    fontFamily: Fonts.BalooChettan2,
    fontSize: height * 0.03,
    color: 'black',
    textAlign: 'center',
    textShadowOffset: {
      width: width * 0.001,
      height: height * 0.001,
    },
    textShadowRadius: width * 0.005,
    textShadowColor: 'white',
  },
  headerHeading2: {
    fontFamily: Fonts.BalooChettan2,
    fontSize: height * 0.03,
    color: 'white',
    textAlign: 'center',
    textShadowOffset: {
      width: width * 0.001,
      height: height * 0.001,
    },
    textShadowRadius: width * 0.005,
    textShadowColor: 'black',
  },
  headerContainer2: {
    height: height * 0.06,
    width: width * 0.83,
  },
  headerInner2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerHeadin2: {
    fontFamily: Fonts.BalooChettan2,
    fontSize: width * 0.07,
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
    height: height * 0.38,
    width: width * 0.83,
  },
  bodyInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.01,
  },
  multiRow: {
    margin: width * 0.01,
    paddingLeft: width * 0.05,
    borderRadius: width * 0.1,
    width: width * 0.8,
    height: height * 0.08,
    elevation: width * 0.01,
  },
  multiLabel: {
    paddingLeft: width * 0.35,
    fontSize: width * 0.045,
    fontFamily: Fonts.Handlee,
  },
  textInputView: {
    alignItems: 'center',
    flexDirection: 'row',
    width: width * 0.5,
    height: height * 0.07,
    backgroundColor: '#41404098',
    borderRadius: width * 0.1,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
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
  textInputText: {
    color: 'white',
    fontSize: width * 0.05,
    position: 'relative',
    fontFamily: Fonts.BalooChettanBold,
    right: width * 0.02,
  },
  footerContainer: {
    height: height * 0.11,
    width: width * 0.83,
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
