import React, {Component} from 'react';
import {
  View,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
  StyleSheet,
  Picker,
  TouchableOpacity,
  addons,
  Dimensions,
  Image,
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import ParameterScreen from './index';
import ProfileScreen from './profile';
import { strings } from '../../Locatization';
import TabIcon from 'react-native-vector-icons/FontAwesome';  

const {width, height} = Dimensions.get('window');
import { Fonts } from '../../utils/fonts';
import { store } from '../../store';
const ParameterNavigatorConfig = {
  
  initialRouteName: 'Parameter',
  defaultNavigationOptions: {
    header: null
  },
  navigationOptions:{  
    tabBarLabel:store.getState().language.parameter,
    tabBarIcon:({tintColor})=>(  
      <TabIcon name="user" color={tintColor} size={height * .03}/>  
  )
  }
};

const RouteConfigs = {
  Parameter: ParameterScreen,
  Profile: ProfileScreen,
};

const ParameterNavigator = createStackNavigator(
  RouteConfigs,
  ParameterNavigatorConfig,
);

export default ParameterNavigator;
