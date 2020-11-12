import React, { Component } from "react";
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
import { createStackNavigator } from "react-navigation-stack";
import { ParanyamaScreen } from "./index";
import CourseScreen from "./course";
import FreeExercise from "./freeExercise";
const { width, height } = Dimensions.get('window');
import { Fonts } from '../../utils/fonts';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HealthManagement from "./healthManagement";
import CosmicRuler from "./cosmicRuler";
import OnTheGoPranayama from "./onTheGoPranayama";

const ParanyamaNavigatorConfig = {
  initialRouteName: 'Paranyama',

  defaultNavigationOptions: {
    headerShown: false,
  },
  navigationOptions: {
    tabBarLabel: 'Pranayama',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="clipboard-list" color={tintColor} size={height * .03} />
    )
  }

};

const RouteConfigs = {
  Paranyama: ParanyamaScreen,
  Course: CourseScreen,
  HealthManagement:HealthManagement,
  CosmicRuler:CosmicRuler,
  StateOfMind: FreeExercise,
  OnTheGoPranayama:OnTheGoPranayama
};

const ParanyamaNavigator = createStackNavigator(RouteConfigs, ParanyamaNavigatorConfig);

export default ParanyamaNavigator;