import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  Animated,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
//
import LinearGradient from 'react-native-linear-gradient';
import {Fonts} from '../utils/fonts';
// import {connect} from 'react-redux';
import Next from 'react-native-vector-icons/MaterialIcons';

const {height, width} = Dimensions.get('window');
export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      animationhello: new Animated.Value(0),
      animationwelcome: new Animated.Value(0),
      LogoAnime: new Animated.Value(0),

      loader: false,
    };
  }

  componentDidMount() {
    Animated.timing(this.state.animationhello, {
      toValue: 1,
      duration: 3000,
    }).start(() => {
      Animated.timing(this.state.animationhello, {
        toValue: 0,
        duration: 2000,
      }).start();
    });
    setTimeout(() => {
      this.setState({loader: true});
    }, 5000);
    Animated.timing(this.state.animationwelcome, {
      toValue: 0,
      duration: 3000,
    }).start(() => {
      Animated.timing(this.state.animationwelcome, {
        toValue: 1,
        duration: 8000,
      }).start();
    });
    const {LogoAnime, LogoText} = this.state;
    setTimeout(() => {
      Animated.parallel([
        Animated.spring(LogoAnime, {
          toValue: 1,
          tension: 2,
          friction: 3,
        }).start(),
      ]);
    }, 10000);
  }

  render() {
    // const { name }= this.props.userData.name;
    const animationhello = {
      opacity: this.state.animationhello,
    };
    const animationwelcome = {
      opacity: this.state.animationwelcome,
    };

    return (
      <View style={styles.MainContainer}>
        <StatusBar
          backgroundColor="black"
          barStyle="default"
          hidden={true}
          showHideTransition={'fade'}
        />

        {this.state.loader == false ? (
          <Animated.View style={[styles.animatedBox, animationhello]}>
            <LinearGradient
              colors={['#0051ff', '#5381e4', '#cecece']}
              style={styles.linearGradientback}>
              <Text
                style={{
                  fontSize: width * 0.18,
                  color: 'white',
                  fontFamily: Fonts.Handlee,
                }}>
                Hi !
              </Text>
            </LinearGradient>
          </Animated.View>
        ) : (
          <View>
            <View>
              <Animated.View
                style={[styles.animatedBoxWelcome, animationwelcome]}>
                <Image
                  source={require('../../image/welcom.png')}
                  style={{
                    // flex:1,
                    width: width * 1,
                    height: height * 1,
                    position: 'absolute',
                  }}
                />
                <Text style={styles.welcomeText}>Welcome To Pranayama</Text>
              </Animated.View>
            </View>
            <View
              style={{
                position: 'absolute',
                right: width * 0,
                bottom: height * 0,
                margin: width * 0.05,
              }}>
              <Animated.View
                style={{
                  opacity: this.state.LogoAnime,
                  bottom: this.state.LogoAnime.interpolate({
                    inputRange: [0, 1],
                    outputRange: [700, 0],
                    // bottom: height * .005
                  }),
                }}>
                <TouchableOpacity 
                  activeOpacity={0.7}
                  onPress={() => this.props.navigation.navigate('Paranyama')}>
                  <LinearGradient
                    colors={['#0051ff', '#5381e4', '#cecece']}
                    style={styles.linearGradient}>
                    <Next
                      name={'navigate-next'}
                      size={width * 0.1}
                      color={'white'}
                    />
                  </LinearGradient>
                </TouchableOpacity>
              </Animated.View>
            </View>
          </View>
        )}
      </View>
    );
  }
}
// const mapStateToProps = state => ({
//     userData: state.auth.user,
//   });
//   export default connect(
//     mapStateToProps,
//     // {},
//   )(HomeScreen);

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e5ab9',
  },
  animatedBox: {
    width: width * 1,
    height: height * 1,
    backgroundColor: '#1e5ab9',
  },
  animatedBoxWelcome: {
    width: width * 1,
    height: height * 1,
    backgroundColor: '#1e5ab9',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  welcomeText: {
    fontSize: width * 0.09,
    color: 'white',
    fontFamily: Fonts.Handlee,
    marginBottom: height * 0.01,

    // textAlign:'center'
  },
  linearGradientback: {
    width: width * 1,
    height: height * 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    width: width * 0.15,
    elevation: width * 0.003,
    height: height * 0.09,
    borderRadius: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
    // paddingLeft: 15,
    // paddingRight: 15,
    // borderRadius: 5
  },
});
