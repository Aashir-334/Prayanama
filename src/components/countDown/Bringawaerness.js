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
            animationInhaleLeft: new Animated.Value(0),
            animationExhaleRight: new Animated.Value(0),
            animationInhaleRight: new Animated.Value(0),
            animationExhaleLeft: new Animated.Value(0),
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
        const animationInhaleLeft = {
            opacity: this.state.animationInhaleLeft
        }
        const animationExhaleRight = {
            opacity: this.state.animationExhaleRight
        }
        const animationInhaleRight = {
            opacity: this.state.animationInhaleRight
        }
        const animationExhaleLeft = {
            opacity: this.state.animationExhaleLeft
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
                    duration: 18000
                }).start();
            })
            this.inhaleLeft = setTimeout(() => {

                Animated.timing(this.state.animationInhaleLeft, {
                    toValue: 1,
                    duration: 1000
                }).start(() => {
                    Animated.timing(this.state.animationInhaleLeft, {
                        toValue: 0,
                        duration: 1000 * seconds - 1000
                    }).start();
                })
                setInterval(() => {
                    Animated.timing(this.state.animationInhaleLeft, {
                        toValue: 1,
                        duration: 1000
                    }).start(() => {
                        Animated.timing(this.state.animationInhaleLeft, {
                            toValue: 0,
                            duration: 1000 * seconds - 1000
                        }).start();
                    })
                }, 1000 * seconds + 1000 * seconds * 3 + 1000);
            }, 20000);
            this.exhaleRight = setTimeout(() => {

                Animated.timing(this.state.animationExhaleRight, {
                    toValue: 1,
                    duration: 1000
                }).start(() => {
                    Animated.timing(this.state.animationExhaleRight, {
                        toValue: 0,
                        duration: 1000 * seconds - 1000
                    }).start();
                })
                setInterval(() => {
                    Animated.timing(this.state.animationExhaleRight, {
                        toValue: 1,
                        duration: 1000
                    }).start(() => {
                        Animated.timing(this.state.animationExhaleRight, {
                            toValue: 0,
                            duration: 1000 * seconds - 1000
                        }).start();
                    })
                }, 1000 * seconds + 1000 * seconds * 3 + 1000);
            }, 20000 + 1000 * seconds + 1000);
            this.inhaleRight = setTimeout(() => {

                Animated.timing(this.state.animationInhaleRight, {
                    toValue: 1,
                    duration: 1000
                }).start(() => {
                    Animated.timing(this.state.animationInhaleRight, {
                        toValue: 0,
                        duration: 1000 * seconds - 1000
                    }).start();
                })
                setInterval(() => {
                    Animated.timing(this.state.animationInhaleRight, {
                        toValue: 1,
                        duration: 1000
                    }).start(() => {
                        Animated.timing(this.state.animationInhaleRight, {
                            toValue: 0,
                            duration: 1000 * seconds - 1000
                        }).start();
                    })
                }, 1000 * seconds + 1000 * seconds * 3 + 1000);
            }, 20000 + 1000 * seconds * 2 + 1000);
            this.exhaleLeft = setTimeout(() => {

                Animated.timing(this.state.animationExhaleLeft, {
                    toValue: 1,
                    duration: 1000
                }).start(() => {
                    Animated.timing(this.state.animationExhaleLeft, {
                        toValue: 0,
                        duration: 1000 * seconds - 1000
                    }).start();
                })
                setInterval(() => {
                    Animated.timing(this.state.animationExhaleLeft, {
                        toValue: 1,
                        duration: 1000
                    }).start(() => {
                        Animated.timing(this.state.animationExhaleLeft, {
                            toValue: 0,
                            duration: 1000 * seconds - 1000
                        }).start();
                    })
                }, 1000 * seconds + 1000 * seconds * 3 + 1000);
            }, 20000 + 1000 * seconds + 1000 * seconds * 2 + 1000);
        }
        else {
            clearTimeout(this.close);
            clearTimeout(this.inhaleLeft);
            clearTimeout(this.exhaleRight);
            clearTimeout(this.inhaleRight);
            clearTimeout(this.exhaleLeft);
        }
        return (
            <View style={styles.MainContainer}>
                <Animated.View style={[styles.animatedBox, animatedStyle]} >
                    <Text style={style.readyHeading}>{store.getState().language.bringExerciseAnimation}</Text>
                </Animated.View>
                {/* <Animated.View style={[styles.animatedBox, animationwelcome]} >
                <Text style={style.remainHeading}>{strings.closeYourLeftNostril}</Text>
              </Animated.View> */}
                <View style={{ marginTop: height * .15 }}>

                    <Animated.View style={[styles.animatedBox, animationInhaleLeft]} >
                        <Text style={style.remainHeading}>{store.getState().language.inhaleLeftNostril}</Text>
                    </Animated.View>
                    <Animated.View style={[styles.animatedBox, animationExhaleRight]} >
                        <Text style={style.remainHeading}>{store.getState().language.exhaleRightNostril}</Text>
                    </Animated.View>
                    <Animated.View style={[styles.animatedBox, animationInhaleRight]} >
                        <Text style={style.remainHeading}>{store.getState().language.inhaleRightNostril}</Text>
                    </Animated.View>
                    <Animated.View style={[styles.animatedBox, animationExhaleLeft]} >
                        <Text style={style.remainHeading}>{store.getState().language.exhaleLeftNostril}</Text>
                    </Animated.View>
                </View>

            </View>
        );
    }
};

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        marginTop: height * .5
    },
    animatedBox:
    {
        width: width * 1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },
})