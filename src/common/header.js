import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    FlatList,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Image,
    ToastAndroid,
    StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Back from 'react-native-vector-icons/MaterialIcons';
import { Fonts } from '../utils/fonts';
const { width, height } = Dimensions.get('window');

export default class CustomHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (

            <View style={styles.headerContainer}>
                <View style={styles.headerInner}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                        style={styles.headerBackBotton}>
                        <Back
                            size={width * 0.08}
                            color="white"
                            name="keyboard-backspace"
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerHeading}>
                        {this.props.title}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    backgroundImage: {
        width: width * 1,
        height: height * 1,
        opacity: .9,
        position: 'absolute',
        // backgroundColor: '#75c3ff',

    },
    headerContainer: {
        height: height * .12,
        width: width * 1,
    },
    headerInner: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerBackBotton: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: width * .0,
        borderColor: '#89CCFE',
        height: height * .07,
        width: width * .16,
        elevation: width * .003,
        backgroundColor: 'black',
        borderTopRightRadius: width * .07,
        borderBottomRightRadius: width * .07,
    },
    headerBackBottonModal: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: width * .0,
        borderColor: '#89CCFE',
        height: height * .07,
        width: width * .16,

    },
    headerHeading: {
        fontSize: width * .08,
        fontFamily: Fonts.Handlee,
        textShadowOffset: {
            width: width * 0.001,
            height: height * 0.001,
        },
        textShadowRadius: width * 0.05,
        textShadowColor: 'white',
        color: 'black'
    },
});
