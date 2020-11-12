import React, { Component } from 'react';
import { createBottomTabNavigator, createMaterialTopTabNavigator, createTabNavigator } from 'react-navigation-tabs';
import ParanyamaScreen from '../scenes/pranayama/route';
import HistoryScreen from '../scenes/history';
import ParameterScreen from '../scenes/parameter/route';
import { View, Text } from 'native-base';
import { StatusBar, TouchableOpacity, Dimensions,Image } from 'react-native';
import { Fonts } from '../utils/fonts';
import LastExercise from '../scenes/pranayama/last';
const { width, height } = Dimensions.get('window');

const AuthNavigatorConfig = {
  // initialRouteName: 'Prana',
  swipeEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    inactiveTintColor: 'white',
    activeTintColor: 'black',
    labelStyle: {
      fontSize: width * 0.032,
      fontFamily: Fonts.Handlee,
      padding:5,
      // fontWeight: 'bold'
    },
    style: {
      backgroundColor: '#97C9EE',
      padding: width * 0.035,
      height: height * 0.1,
      width: width * 0.9,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: width * 0.07,
      position: 'absolute',
      elevation: width * 0.005,
      marginBottom: height * 0.01,
      // bottom: height * .10
    },
  },
};

const RouteConfigs = {
  Pranayama:{
    screen:ParanyamaScreen,
    navigationOptions: {
      tabBarLabel: 'Pranayama',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('../../image/Logo.png')} style={{width:height * .03,height:height * .03,tintColor:tintColor,resizeMode:'contain'}} />
      )
    }
  },
  History: HistoryScreen,
  Parameter: ParameterScreen,
  LastExercise: LastExercise,
};

const ParanyamaNavigator = createBottomTabNavigator(
  RouteConfigs,
  AuthNavigatorConfig,
);


export default ParanyamaNavigator;

