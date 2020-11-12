import React, { Component } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Animated, Text, Dimensions, Easing } from 'react-native';
import { Fonts } from '../../utils/fonts';
import { strings } from '../../Locatization'
import style from './style';
import { store } from '../../store';
const { width, height } = Dimensions.get('window');
export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      animation: new Animated.Value(0),
      animationwelcome: new Animated.Value(0),
      animationInhale: new Animated.Value(0),
      SpringValue:new Animated.Value(0),
      animationExhale: new Animated.Value(0),
      isAnimationComplete:false,
      isAnimationWelcomeComplete:false,
      isAnimationInhaleComplete:false,
      isAnimationExhaleComplete:false,
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
      //  setTimeout(()=>{
         
      //  })
     
      this.anim = setTimeout(()=>{
        // Animated.timing(this.state.animation, {
        //   toValue: 1,
        //   duration:800,
        //   easing: Easing.bounce
        // }).start();
        // // .start(({finished}) => {
        // //   Animated.timing(this.state.animation, {
        // //     toValue: 0,
        // //     duration: 1500,
        // //     easing: Easing.bounce
        // //   }).start();
        // // })
        this.state.animation.setValue(0.4);
        Animated.spring(
          this.state.animation,
          {
            toValue: 1,
            friction: 1,
            useNativeDriver:true
          }
        ).start(()=>{
          setTimeout(()=>{
            this.setState({isAnimationComplete:true})
          },100)
         
        })
      },1000+100)
        
        this.close = setTimeout(() => {
          this.state.animationwelcome.setValue(0.4);
          Animated.spring(
            this.state.animationwelcome,
            {
              toValue: 1,
              friction: 1,
              useNativeDriver:true
            }
          ).start(()=>{
              this.setState({isAnimationComplete:true})
            })
          // Animated.timing(this.state.animationwelcome, {
          //   toValue: 1,
          //   duration:500,
          //   easing: Easing.bounce
          // }).start(()=>{
          //   this.setState({isAnimationComplete:true})
          // })
          // .start(() => {
          //   this.setState({isAnimationComplete:true})
          //   Animated.timing(this.state.animationwelcome, {
          //     toValue: 0,
          //     duration: 1000
          //   }).start();
          // })
        }, 1000*seconds-2000);
        this.inhale = setTimeout(() => {
          
          Animated.timing(this.state.animationInhale, {
            toValue: 1,
            duration: 1000
          }).start(() => {
            this.setState({isAnimationWelcomeComplete:true})
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
          }, (1000 * seconds) * 2 + 500);
        }, 8500);
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
          }, (1000 * seconds) * 2+ 500);
        }, 8500 + (1000 * seconds) + 500);

    }
    else{
      clearTimeout(this.close);
      clearTimeout(this.inhale);
      clearTimeout(this.exhale);
    }
    return (
      <View style={styles.MainContainer}>
           {!this.state.isAnimationComplete&&<Animated.View style={[styles.animatedBox, { transform: [{ scale: this.state.animation }] }]} >
              <Text style={style.readyHeading}>{store.getState().language.setYourPosition}</Text>
            </Animated.View>}
            {!this.state.isAnimationWelcomeComplete &&<Animated.View style={[styles.animatedBox, { transform: [{ scale: this.state.animationwelcome }] }]} >
              <Text style={style.remainHeading}>{store.getState().language.closeYourRightNostril}</Text>
            </Animated.View>}
            <Animated.View style={[styles.animatedBox, animationInhale]} >
              <Text style={style.remainHeading}>{store.getState().language.nowInhale}</Text>
            </Animated.View>
            <Animated.View style={[styles.animatedBox, animationExhale]} >
              <Text style={style.remainHeading}>{store.getState().language.nowExhale}</Text>
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
    position:'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
})
