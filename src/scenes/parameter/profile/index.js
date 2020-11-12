import React, { Component } from 'react';
import { Container, Input, Content, Form, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import {
  TextInput,
  TouchableOpacity,
  addons,
  Dimensions,
  Image,
  View,
  ScrollView,
} from 'react-native';
// import {CustomFontText} from '../../../styles/customFontText';
const { width } = Dimensions.get('window');
import { Fonts } from '../../../utils/fonts';
import { strings } from '../../../Locatization';
import {
  profile_edit,
  updateCategory,
  updateArchType,
} from '../../../actions/auth';
import style from './style';
import styleGender from './gender';
import Modal from 'react-native-modal';
import { loadUser } from '../../../actions/auth';
import Gender from './gender';
import Height from './Height';
import Arch from './arch';
import Target from './target';
import Weight from './Weight';
import Back from 'react-native-vector-icons/MaterialIcons';
import Edit from 'react-native-vector-icons/FontAwesome5';
import EditText from 'react-native-vector-icons/Entypo';
import Save from 'react-native-vector-icons/MaterialCommunityIcons';
import Arrows from 'react-native-vector-icons/AntDesign';
import Next from 'react-native-vector-icons/AntDesign';
import RadioButtonRN from 'radio-buttons-react-native';
import { arc } from 'd3-shape';
import { store } from '../../../store';

import SpinnerLoader from '../../../components/spinnerLoader';


class ParameterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      email: this.props.userData.email,
      name: this.props.userData.name,
      age: this.props.userData.age,
      gender: this.props.userData.gender,
      weight: this.props.userData.weight,
      height: this.props.userData.height,
      genderModal: [
        { label: store.getState().language.male, value: store.getState().language.male },
        { label: store.getState().language.female, value: store.getState().language.female },
        { label: store.getState().language.custom, value: store.getState().language.custom },
      ],
      selectGender: store.getState().language.male,
      customValue: '',
      toggle: false,
      custum: store.getState().language.male,
      archtypesList: [],
      isLoading: false
    };
  }
  componentDidMount() {
    // console.log('update', this.props);
    // !this.state.edit && this.props.loadUser();
    this.unsubscribe = store.subscribe(() => {
      this.setState({ isLoading: false })

    });
  }
  onHandleEdit() {
    this.setState({
      edit: true,
    });
  }
  onHandleSave() {
    this.setState({
      edit: false,
      isLoading: true
    });
    // console.log(this.state.name);
    const { email, name, age, gender, weight, height } = this.state;
    this.props.profile_edit({ email, name, age, gender, weight, height });
  }

  gettingArch(data) {
    // this.setState({ archTypes: data })

  }
  gettingWieght = (child) => {
    this.setState({ weight: child })
  }
  gettingHeight = (child) => {
    this.setState({ height: child })
  }
  gettingGender = (child) => {
    this.setState({ gender: child })
  }
  gettingTargets(data) {
    // this.setState({ targets: data })

  }

  renderLoader() {
    let { isLoading } = this.state;
    return <SpinnerLoader isLoading={isLoading} />;
  }

  render() {
    const {
      name,
      email,
      age,
      gender,
      weight,
      height,
      archtypesList,
      targetList,
    } = this.props.userData;


    return (
      <View style={{ flex: 1 }}>
        <View style={style.contain}>


          <Image
            source={require('../../../../image/profileBack1.jpg')}
            style={style.backgroundImage}
          />
          <View style={style.headerContainer}>
            <TouchableOpacity 
             activeOpacity={0.7}
              onPress={() => this.props.navigation.goBack()}
              style={style.headerBackBotton}>
              <Back
                size={width * 0.08}
                color="white" 
                name="keyboard-backspace"
              />
            </TouchableOpacity>
            <View style={style.avatarView}>
              <Image
                source={require('../../../../image/FinalAvatar.png')}
                style={style.avatar}
              />
            </View>
            {!this.state.edit ? (
              <TouchableOpacity 
               activeOpacity={0.7}
                onPress={this.onHandleEdit.bind(this)}
                // onPress={() => alert("fsD")}
                style={style.headerMenuBotton}>
                <Edit size={width * 0.06} color="white" name="user-edit" />
              </TouchableOpacity>
            ) : (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={this.onHandleSave.bind(this)}
                  style={style.headerMenuBotton}>
                  <Save
                    size={width * 0.075}
                    color="white"
                    name="content-save-edit"
                  />
                </TouchableOpacity>
              )}
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ alignItems: 'center', marginBottom: 180 }}>
              <View style={style.itemViewInner}>
                <View style={style.itemView}>
                  <Text style={style.dataText}>
                    {store.getState().language.user} : {''}
                  </Text>
                  {this.state.edit ? (
                    <View style={style.textInputView}>
                      <TextInput
                        style={style.textInputEdit}
                        placeholder={name}
                        value={this.state.name}
                        onChangeText={name => this.setState({ name })}
                      />
                      <EditText
                        size={width * 0.05}
                        color="black"
                        name="edit"
                        style={{ left: width * 0.035 }}
                      />
                    </View>
                  ) : (
                      <Text style={style.fetchDataText}>{name}</Text>
                    )}
                </View>
                <View style={style.itemView}>
                  <Text style={style.dataText}>{store.getState().language.email} : </Text>

                  <Text style={style.fetchDataText}>{email}</Text>
                </View>
                <View style={style.itemView}>
                  <Text style={style.dataText}>{store.getState().language.age} : </Text>
                  {this.state.edit ? (
                    <View style={style.textInputView}>
                      <TextInput
                        style={style.textInputEdit}
                        placeholder={age.toString()}
                        value={this.state.age}
                        onChangeText={age =>
                          this.setState({ age: parseInt(age) })
                        }
                      />
                      <EditText
                        size={width * 0.05}
                        color="black"
                        name="edit"
                        style={{ left: width * 0.045 }}
                      />
                    </View>
                  ) : (
                      <Text style={style.fetchDataText}>{age}</Text>
                    )}
                </View>
              </View>
              <View style={style.itemViewInner}>
                <View style={style.itemView}>
                  <Text style={style.dataText}>{store.getState().language.gender} : </Text>
                  {this.state.edit ? (
                    <View style={style.textInputView}>
                      <Gender selectGender={this.gettingGender}/>
                      <EditText size={width * 0.05} color="black" name="edit" />
                    </View>
                  ) : (
                      <Text style={style.fetchDataText}>{gender}</Text>
                    )}
                </View>
                <View style={style.itemView}>
                  <Text
                    style={{
                      fontSize: width * 0.055,
                      fontFamily: Fonts.Handlee,
                    }}>
                    {store.getState().language.weight} :{' '}
                  </Text>
                  {this.state.edit ? (
                    <View style={style.textInputView}>
                      <Weight weightKg={this.gettingWieght} />
                      <EditText size={width * 0.05} color="black" name="edit" />
                    </View>
                  ) : (
                      <Text style={style.fetchDataText}>{weight}</Text>
                    )}
                </View>
                <View style={style.itemView}>
                  <Text
                    style={{
                      fontSize: width * 0.055,
                      fontFamily: Fonts.Handlee,
                    }}>
                    {store.getState().language.height1} :{' '}
                  </Text>
                  {this.state.edit ? (
                    <View style={style.textInputView}>
                      <Height selectHeight={this.gettingHeight} />
                      <EditText size={width * 0.05} color="black" name="edit" />
                    </View>
                  ) : (
                      <Text style={style.fetchDataText}>{height}</Text>
                    )}
                  {/* <Input placeholder="Height" /> */}
                </View>
              </View>
              <View style={style.itemViewArchAndTargetInner}>
                <View style={style.itemViewArchAndTarget}>
                  {this.state.edit ? <Arch getData={this.gettingArch} /> : null}
                  <Text
                    style={style.archTypeHeading}>
                    {store.getState().language.youAre}
                  </Text>
                  <View
                    style={style.archTypeDataView}>
                    {archtypesList.length && archtypesList.map((arh, key) => {
                      return (
                        <Text
                          key={key}
                          style={style.archTypeDataText}>
                          {(arh.category == 'Defender' && store.getState().language.defender) ||
                            (arh.category == 'Manager' && store.getState().language.manager) ||
                            (arh.category == 'Preserver' && store.getState().language.preserver) ||
                            (arh.category == 'Artist' && store.getState().language.artist) ||
                            (arh.category == 'Producer' && store.getState().language.producer) ||
                            (arh.category == 'Missionary' && store.getState().language.missionary) ||
                            (arh.category == 'Strategist' && store.getState().language.strategist) ||
                            (arh.category == 'Leader' && store.getState().language.leader) ||
                            (arh.category == 'Teacher' && store.getState().language.teacher)}
                          ,
                        </Text>
                      );
                    })}
                  </View>
                </View>
                <View style={style.itemViewArchAndTarget}>
                  {this.state.edit ? (
                    <Target getData={this.gettingTargets} />
                  ) : null}
                  <Text
                    style={style.archTypeHeading}>
                    {store.getState().language.yourTarget}
                  </Text>
                  {targetList.map((arh, key) => {
                    return (
                      <Text
                        key={key}
                        style={style.archTypeDataText}>
                        {(arh.targetCategory == 'Mind' && store.getState().language.mind) ||
                          (arh.targetCategory == 'Body' && store.getState().language.body) ||
                          (arh.targetCategory == 'Emotion' && store.getState().language.emotion) ||
                          (arh.targetCategory == 'Ethic Body' && store.getState().language.ethicBody)}
                        ,
                      </Text>
                    );
                  })}
                  {
                    this.renderLoader()
                  }
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  userData: state.auth.user,
});
export default connect(
  mapStateToProps,
  { profile_edit, loadUser, updateArchType, updateCategory },
)(ParameterScreen);
