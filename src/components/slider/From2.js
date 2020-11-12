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
  AsyncStorage,
  Alert,
} from 'react-native';
import Next from 'react-native-vector-icons/MaterialIcons';
import {Item, Input, Thumbnail, Text} from 'native-base';
import {SelectDefault} from '../common/inputs/Select';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import CheckBox from 'react-native-check-box'
// import { CheckBox } from 'react-native-elements';
import SelectMultiple from 'react-native-select-multiple';
import {Fonts} from '../../utils/fonts';
import style from './styleFrom2';
import {strings} from '../../Locatization';

const Arch = [
  {label: strings.defender, value: 'Defender'},
  {label: strings.manager, value: 'Manager'},
  {label: strings.preserver, value: 'Preserver'},
  {label: strings.artist, value: 'Artist'},
  {label: strings.producer, value: 'Producer'},
  {label: strings.missionary, value: 'Missionary'},
  {label: strings.strategist, value: 'Strategist'},
  {label: strings.leader, value: 'Leader'},
  {label: strings.teacher, value: 'Teacher'},
];

const {width, height} = Dimensions.get('window');

export default class SliderFormBehaviour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedArch: [],
      labelsArch: [],
    };
  }

  onSelectionsChange = selectedArch => {
    // selectedFruits is array of { label, value }

    this.setState({selectedArch});
  };
  _takeCondition = () => {
    if (this.state.selectedArch == '') {
      Alert.alert(strings.alert, strings.selectAnyone, [{text: strings.ok}]);
    } else {
      this.state.selectedArch.map(arch =>
        this.state.labelsArch.push(arch.value),
      );
      this.props.navigation.navigate('Selection2', {
        category: this.state.labelsArch,
        user: this.props.navigation.state.params.user,
      });
    }
  };
  // checkAndTrue = ()
  render() {
    console.log(this.state.selectedArch);
    console.log(this.state.labelsArch);
    return (
      <View style={style.Main}>
        <StatusBar backgroundColor="#4E4044" />
        <Image
          source={require('../../../image/signup2.jpg')}
          style={style.imageBackground}
        />
        {/* header */}
        <View style={style.headerContainer}>
          <View style={style.headerInner}>
            <Text style={style.headerText}>{strings.form2Heading}</Text>
            <Text style={style.headerText2}>{strings.form2Heading2}</Text>
          </View>
        </View>
        {/* Body */}
        <View style={style.bodyContainer}>
          <View style={style.bodyInner}>
            <ScrollView
              style={style.scrollView}
              showsVerticalScrollIndicator={false}>
              <SelectMultiple
                rowStyle={style.multiRow}
                labelStyle={style.multiLabel}
                selectedLabelStyle={{color: 'white'}}
                selectedRowStyle={{backgroundColor: '#527f99'}}
                selectedCheckboxStyle={{backgroundColor: 'white'}}
                items={Arch}
                selectedItems={this.state.selectedArch}
                onSelectionsChange={this.onSelectionsChange}
              />
            </ScrollView>
          </View>
        </View>
        {/* Footer */}
        <View style={style.footerContainer}>
          <View style={style.footerInner}>
            <TouchableOpacity 
             activeOpacity={0.7}
              onPress={() => this._takeCondition()}
              // onPress={() => this.props.navigation.navigate('Selection2')}
            >
              <View style={style.bottonContainer}>
                <Text style={style.bottonText}>{strings.next}</Text>
                <Next
                  name={'navigate-next'}
                  size={30}
                  color={'white'}
                  style={{position: 'absolute', right: width * 0.02}}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
