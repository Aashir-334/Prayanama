import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import {createAppContainer} from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {Transition} from 'react-native-reanimated';

import Signin from '../scenes/signIn/index';
import Signup from '../components/slider/SignUp';
import AuthNavigator from '../scenes/splash/Splash';
import HomeNavigator from './home-navigator';
import Paranyama from './app-navigator';
import Exercise from '../scenes/pranayama/exercise';
// import GetFiery from '../scenes/pranayama/exercise/get fiery';
// import AntiInfla from '../scenes/pranayama/exercise/anti inflammatory';
// import StopProcast from '../scenes/pranayama/exercise/Stop Procastination';
// import BringAwaer from '../scenes/pranayama/exercise/Bring Awaeness';
import {RootStack} from './auth-navigator';
import Loader from '../components/spinnerLoader';

const AuthStack = createStackNavigator(
  {
    Signin,
    Signup,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
      header: null,
      headerForceInset: {top: 'never', bottom: 'never'},
    },
  },
);

const RootNavigator = createAnimatedSwitchNavigator(
  {
    AuthLoading: AuthNavigator,
    Auth: AuthStack, //AuthNavigator,
    App: RootStack,
    // Home: HomeNavigator,
    // Paranyama: Paranyama,
    // Exercise: Exercise,
  },
  {
    initialRouteName: 'AuthLoading',
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-left"
          durationMs={400}
          interpolation="linear"
        />
        <Transition.In type="slide-right" durationMs={500} />
      </Transition.Together>
    ),
  },
);

export default createAppContainer(RootNavigator);
