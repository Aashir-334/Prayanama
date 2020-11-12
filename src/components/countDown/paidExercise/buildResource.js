import React, { Component } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Animated, Text, Dimensions } from 'react-native';
// import { strings } from '../../Locatization'
import style from './style';
import { store } from '../../../store';
const { width, height } = Dimensions.get('window');


export default class HomeScreen extends Component {

    constructor() {
        super();
        this.state = {
            hold1Animated: new Animated.Value(0),
            hold2Animated: new Animated.Value(0),
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

        const hold1Animated = {
            opacity: this.state.hold1Animated,
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
        const hold2Animated = {
            opacity: this.state.hold2Animated,
        }
        if (!this.props.onBotton) {
            // const seconds = this.props.second;
            // setTimeout(() => {
            //   this.setState({ loop: 1 })
            // }, 7000);

            Animated.timing(this.state.animationInhaleLeft, {
                toValue: 1,
                duration: 1500
            }).start(() => {
                Animated.timing(this.state.animationInhaleLeft, {
                    toValue: 0,
                    duration: 2500
                }).start();
            })
            setInterval(() => {
                Animated.timing(this.state.animationInhaleLeft, {
                    toValue: 1,
                    duration: 1500
                }).start(() => {
                    Animated.timing(this.state.animationInhaleLeft, {
                        toValue: 0,
                        duration: 2500
                    }).start();
                })
            }, 1000 * 44);
            this.exhaleRight = setTimeout(() => {
                Animated.timing(this.state.animationExhaleRight, {
                    toValue: 1,
                    duration: 2000
                }).start(() => {
                    Animated.timing(this.state.animationExhaleRight, {
                        toValue: 0,
                        duration: 6000
                    }).start();
                })
                setInterval(() => {
                    Animated.timing(this.state.animationExhaleRight, {
                        toValue: 1,
                        duration: 2000
                    }).start(() => {
                        Animated.timing(this.state.animationExhaleRight, {
                            toValue: 0,
                            duration: 6000
                        }).start();
                    })
                }, 1000 * 44);
            }, 1000 * 4);
            this.hold1 = setTimeout(() => {
                Animated.timing(this.state.hold1Animated, {
                    toValue: 1,
                    duration: 2000
                }).start(() => {
                    Animated.timing(this.state.hold1Animated, {
                        toValue: 0,
                        duration: 6000
                    }).start();
                })
                setInterval(() => {
                    Animated.timing(this.state.hold1Animated, {
                        toValue: 1,
                        duration: 2000
                    }).start(() => {
                        Animated.timing(this.state.hold1Animated, {
                            toValue: 0,
                            duration: 6000
                        }).start();
                    })
                }, 1000 * 44);
            }, 1000 * 12);
            this.inhaleRight = setTimeout(() => {
                Animated.timing(this.state.animationInhaleRight, {
                    toValue: 1,
                    duration: 2000
                }).start(() => {
                    Animated.timing(this.state.animationInhaleRight, {
                        toValue: 0,
                        duration: 6000
                    }).start();
                })
                setInterval(() => {
                    Animated.timing(this.state.animationInhaleRight, {
                        toValue: 1,
                        duration: 2000
                    }).start(() => {
                        Animated.timing(this.state.animationInhaleRight, {
                            toValue: 0,
                            duration: 6000
                        }).start();
                    })
                }, 1000 * 44);
            }, 1000 * 20);
            this.exhaleLeft = setTimeout(() => {

                Animated.timing(this.state.animationExhaleLeft, {
                    toValue: 1,
                    duration: 2000
                }).start(() => {
                    Animated.timing(this.state.animationExhaleLeft, {
                        toValue: 0,
                        duration: 6000
                    }).start();
                })
                setInterval(() => {
                    Animated.timing(this.state.animationExhaleLeft, {
                        toValue: 1,
                        duration: 2000
                    }).start(() => {
                        Animated.timing(this.state.animationExhaleLeft, {
                            toValue: 0,
                            duration: 6000
                        }).start();
                    })
                }, 1000 * 44);
            }, 1000 * 28);
            this.hold2 = setTimeout(() => {
                Animated.timing(this.state.hold2Animated, {
                    toValue: 1,
                    duration: 2000
                }).start(() => {
                    Animated.timing(this.state.hold2Animated, {
                        toValue: 0,
                        duration: 6000
                    }).start();
                })
                setInterval(() => {
                    Animated.timing(this.state.hold2Animated, {
                        toValue: 1,
                        duration: 2000
                    }).start(() => {
                        Animated.timing(this.state.hold2Animated, {
                            toValue: 0,
                            duration: 6000
                        }).start();
                    })
                }, 1000 * 44);
            }, 1000 * 36);
        }
        else {
            clearTimeout(this.hold2);
            clearTimeout(this.inhaleLeft);
            clearTimeout(this.exhaleRight);
            clearTimeout(this.inhaleRight);
            clearTimeout(this.exhaleLeft);
            clearTimeout(this.hold1);

        }
        return (
            <View style={styles.MainContainer}>
                <Animated.View style={[styles.animatedBox, animationInhaleLeft]} >
                    <Text style={style.remainHeading}>{store.getState().language.inhaleLeftNostril4Seconds}</Text>
                </Animated.View>
                <Animated.View style={[styles.animatedBox, animationExhaleRight]} >
                    <Text style={style.remainHeading}>{store.getState().language.nowHold8Seconds}</Text>
                </Animated.View>
                <Animated.View style={[styles.animatedBox, hold1Animated]} >
                    <Text style={style.remainHeading}>{store.getState().language.exhaleRightNostril8Seconds}</Text>
                </Animated.View>
                <Animated.View style={[styles.animatedBox, animationInhaleRight]} >
                    <Text style={style.remainHeading}>{store.getState().language.inhaleRightNostril8Seconds}</Text>
                </Animated.View>
                <Animated.View style={[styles.animatedBox, animationExhaleLeft]} >
                    <Text style={style.remainHeading}>{store.getState().language.nowHold8Seconds}</Text>
                </Animated.View>
                <Animated.View style={[styles.animatedBox, hold2Animated]} >
                    <Text style={style.remainHeading}>{store.getState().language.exhaleLeftNostril8Seconds}</Text>
                </Animated.View>
            </View >
        );
    }
};

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        marginTop: height * .5,
        // backgroundColor:'red'
    },
    animatedBox:
    {
        width: width * 1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },
})