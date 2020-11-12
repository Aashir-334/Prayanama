import React, {Component} from 'react';
import {
  View,
  Button,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
  StyleSheet,
  Picker,
  TouchableOpacity,
  addons,
  Dimensions,
  Image,
  StatusBar,
  Alert,
} from 'react-native';
import {Item, Input, Thumbnail, Text} from 'native-base';
import {SelectDefault} from '../common/inputs/Select';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SignUp from 'react-native-vector-icons/FontAwesome';
import SelectMultiple from 'react-native-select-multiple';
import {register} from '../../actions/auth';
import {connect} from 'react-redux';
import {Fonts} from '../../utils/fonts';
import style from './styleFrom3';
import {strings} from '../../Locatization';

import {store} from '../../store';

import SpinnerLoader from '../spinnerLoader';

const {width, height} = Dimensions.get('window');

const workOnData = [
  {
    label: strings.mind,
    value: 'Mind',
  },
  {
    label: strings.body,
    value: 'Body',
  },
  {
    label: strings.emotion,
    value: 'Emotion',
  },
  {
    label: strings.ethicBody,
    value: 'Ethic Body',
  },
];
class SliderFormToWorkOn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigateToScreen3: false,
      selectedArch: [],
      isLoading: false,
      targetCategory: [],
    };
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      if (store.getState()?.auth.isAuthenticated) {
        this.setState({
          isLoading: false,
          isModalVisible: false,
        });
      }
    });
  }

  onSelectionsChange = selectedArch => {
    this.setState({selectedArch});
  };

  _takeCondition = async () => {
    if (this.state.selectedArch == '') {
      Alert.alert(strings.alert, strings.selectAnyone, [{text: strings.ok}]);
    } else {
      this.setState({isLoading: true});

      this.state.selectedArch.map(arch =>
        this.state.targetCategory.push(arch.value),
      );
      const {
        email,
        password,
        name,
        age,
        gender,
        weight,
        heights,
      } = this.props.navigation.state.params.user;
      const {category} = this.props.navigation.state.params;
      const {targetCategory} = this.state;

      this.props.register({
        email,
        password,
        name,
        age,
        gender,
        weight,
        heights,
        category,
        targetCategory,
      });
    }
  };

  renderLoader() {
    let {isLoading} = this.state;
    return <SpinnerLoader isLoading={isLoading} />;
  }

  render() {
    this.props.isAuthenticated
      ? this.props.navigation.navigate('WelcomeSplash')
      : null;
    const {
      email,
      password,
      name,
      age,
      gender,
      weight,
      heights,
    } = this.props.navigation.state.params.user;
    const {category} = this.props.navigation.state.params;
    return (
      <View style={style.Main}>
        <StatusBar backgroundColor="#222B3B" />
        <Image
          source={require('../../../image/signup3.jpg')}
          style={style.imageBackground}
        />
        <View style={style.headerContainer}>
          <View style={style.headerInner}>
            <Text style={style.headerText}>{strings.form3Heading}</Text>
            <Text style={style.headerText2}>{strings.form3Heading2}</Text>
          </View>
        </View>

        <View style={style.bodyContainer}>
          <View style={style.bodyInner}>
            <View style={style.selcetMultyContainer}>
              <SelectMultiple
                rowStyle={style.multiRow}
                // maxSelect={1}
                labelStyle={style.multiLabel}
                selectedLabelStyle={{color: 'white'}}
                selectedRowStyle={{backgroundColor: '#527f99'}}
                selectedCheckboxStyle={{backgroundColor: 'white'}}
                items={workOnData}
                selectedItems={this.state.selectedArch}
                onSelectionsChange={this.onSelectionsChange}
              />
            </View>
          </View>
        </View>
        <View style={style.footerContainer}>
          <View style={style.footerInner}>
            <TouchableOpacity onPress={() => this._takeCondition()} activeOpacity={0.7}>
              <View style={style.bottonContainer}>
                <Text style={style.bottonText}>{strings.signUp}</Text>
                <SignUp
                  name={'user-circle'}
                  size={width * 0.05}
                  color={'white'}
                  style={{position: 'absolute', right: width * 0.03}}
                />
              </View>
            </TouchableOpacity>
            <View style={style.footerTextContainer}>
              <Text style={style.footerText}>{strings.form3Footer}</Text>
            </View>
          </View>
        </View>
        {this.renderLoader()}
      </View>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(
  mapStateToProps,
  {register},
)(SliderFormToWorkOn);
