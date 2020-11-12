import React, { Component } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Animated, Text, Dimensions } from 'react-native';
import { strings } from '../../Locatization'
import style from './style';
import {store} from '../../store';
const { width, height } = Dimensions.get('window');


export default class HomeScreen extends Component {

  constructor() {
    super();
    this.state = {
      animation: new Animated.Value(0),
      animationwelcome: new Animated.Value(0),
      animationInhale: new Animated.Value(0),
      animationExhale: new Animated.Value(0),
      time: 0,
      loop: 0
    }
  }

  componentWillMount() {

  }
  startAnimation = () => {
  }

  render() {

    const animatedStyle = {
      opacity: this.state.animation,
    }
    const animationwelcome = {
      opacity: this.state.animationwelcome
    }
    const animationInhale = {
      opacity: this.state.animationInhale
    }
    const animationExhale = {
      opacity: this.state.animationExhale
    }
    if (!this.props.onBotton) {
      const seconds = this.props.second;
      // setTimeout(() => {
      //   this.setState({ loop: 1 })
      // }, 7000);

      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 2000
      }).start(() => {
        Animated.timing(this.state.animation, {
          toValue: 0,
          duration: 8000
        }).start();
      })


      // this.close = setTimeout(() => {

      //   Animated.timing(this.state.animationwelcome, {
      //     toValue: 1,
      //     duration: 1500
      //   }).start(() => {
      //     Animated.timing(this.state.animationwelcome, {
      //       toValue: 0,
      //       duration: 2000
      //     }).start();
      //   })
      // }, 3000);
      this.inhale = setTimeout(() => {

        Animated.timing(this.state.animationInhale, {
          toValue: 1,
          duration: 1000
        }).start(() => {
          Animated.timing(this.state.animationInhale, {
            toValue: 0,
            duration: 1000 * seconds - 1000
          }).start();
        })
        setInterval(() => {
          Animated.timing(this.state.animationInhale, {
            toValue: 1,
            duration: 1000
          }).start(() => {
            Animated.timing(this.state.animationInhale, {
              toValue: 0,
              duration: 1000 * seconds - 1000
            }).start();
          })
        }, (1000 * seconds) * 2 + 1000);
      }, 10500);
      this.exhale = setTimeout(() => {

        Animated.timing(this.state.animationExhale, {
          toValue: 1,
          duration: 1000
        }).start(() => {
          Animated.timing(this.state.animationExhale, {
            toValue: 0,
            duration: 1000 * seconds - 1000
          }).start();
        })
        setInterval(() => {
          Animated.timing(this.state.animationExhale, {
            toValue: 1,
            duration: 1000
          }).start(() => {
            Animated.timing(this.state.animationExhale, {
              toValue: 0,
              duration: 1000 * seconds - 1000
            }).start();
          })
        }, (1000 * seconds) * 2 + 1000);
      }, 10500 + (1000 * seconds) + 1000);
      // this.inhale = setTimeout(() => {
      //   this.setState({ time: null })
      // }, 1000 * 4);
      // Animated.timing(this.state.animationExhale, {
      //   toValue: 1,
      //   duration: 1000
      // }).start(() => {
      //   Animated.timing(this.state.animationExhale, {
      //     toValue: 0,
      //     duration: 2000
      //   }).start();
      // })

    }
    else {
      clearTimeout(this.close);
      clearTimeout(this.inhale);
      clearTimeout(this.exhale);
    }
    return (
      <View style={styles.MainContainer}>
        <Animated.View style={[styles.animatedBox, animatedStyle]} >
          <Text style={style.readyHeading}>{store.getState().language.inhaleRightNostrilAndExhaleLeftNostril}</Text>
        </Animated.View>
        <Animated.View style={[styles.animatedBox, animationInhale]} >
          <Text style={style.remainHeading}>{store.getState().language.inhaleRightNostril}</Text>
        </Animated.View>
        <Animated.View style={[styles.animatedBox, animationExhale]} >
          <Text style={style.remainHeading}>{store.getState().language.exhaleLeftNostril}</Text>
        </Animated.View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    marginTop: height * .65
  },
  animatedBox:
  {
    width: width * 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
})