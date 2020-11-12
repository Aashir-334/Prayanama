import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ActivityIndicator,
  StatusBar,
  Animated,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
//Packages
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
const {width, height} = Dimensions.get('window');

class Splash extends Component {
  state = {
    LogoAnime: new Animated.Value(0),
    LogoText: new Animated.Value(0),
    loadingSpinner: false,
    token: '',
    isLoading: true,
  };

  async componentDidMount() {
    const {LogoAnime, LogoText} = this.state;
    let token = await AsyncStorage.getItem('token');
    const route = this.props.navigation;

    Animated.parallel([
      Animated.spring(LogoAnime, {
        toValue: 1,
        tension: 2,
        friction: 3,
      }).start(),
    ]);
    setTimeout(() => {
      this.setState({loadingSpinner: true});
    }, 2000);

    this.setState({isLoading: false});

    setTimeout(() => {
      if (!token) {
        route.navigate('Auth');
      } else {
        route.navigate('App');
      }
    }, 3000);
  }
  render() {
    if (this.props.isAuthenticated.isAuthenticated) {
      console.log(this.props.isAuthenticated.isAuthenticated);
    }
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="black"
          barStyle="default"
          hidden={true}
          showHideTransition={'fade'}
        />

        <View style={styles.logoContainer}>
          <Animated.View
            style={{
              opacity: this.state.LogoAnime,
              bottom: this.state.LogoAnime.interpolate({
                inputRange: [0, 1],
                outputRange: [500, 0],
                bottom: height * 0.01,
              }),
            }}>
            <Image
              resizeMode="contain"
              style={styles.logo}
              source={require('../../../image/Logo.png')}
            />
            <Text style={styles.textStyle1}>Pranayama</Text>
          </Animated.View>
          {!this.state.loadingSpinner == true ? (
            <Text />
          ) : (
            <ActivityIndicator
              size="large"
              color="white"
              style={styles.activityIndi}
            />
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth,
});
export default connect(
  mapStateToProps,
  {},
)(Splash);
