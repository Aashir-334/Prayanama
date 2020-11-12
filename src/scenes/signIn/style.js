import { StyleSheet, Dimensions } from "react-native"
import {Fonts} from '../../utils/fonts';

//Packages

//Files
const { width, height } = Dimensions.get('window');

export default styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    imageContainer: {
        height: height * .7,
        width: width * 1
    },
    imageBackGround: {
        width: width * 1,
        height: height * 1,
    },
    bottonContainer: {
        height: height * .3,
        width: width * 1,
        alignItems: 'center'
    },
    loginContainer: {
        justifyContent: 'center',
        backgroundColor: '#3a6475',
        // padding: 16,
        alignItems: 'center',
        borderRadius: width * .1,
        elevation: width * .004,
        marginTop: width * .06,
        width: width * .9,
        height: height * .08,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    loginText: {
        color: 'white',
        fontSize: width * .06,
        fontFamily: Fonts.Handlee,
    },
    signupContainer: {
        // padding: 16,
        alignItems: 'center',
        borderRadius: width * .1,
        elevation: width * .004,
        // marginTop: width * .06,
        width: width * .9,
        height: height * .08,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#7e6161',
        
    },
    signupText: {
        color: 'white',
        fontSize: width * .06,
        // position: 'relative',
        // left: width * .29,
        // fontWeight: 'bold',
        fontFamily: Fonts.Handlee,
        // marginLeft: width * .04
    },

    // Modal Styling

    mainModalStyle: {
        backgroundColor: 'white',
        maxHeight: height * .5,
        maxWidth: width * 1,
        top: height * -.03,
        borderBottomRightRadius: width * .1,
        borderBottomLeftRadius: width * .1,
        position: 'relative'
    },
    modalBackImage: {
        width: width * .9,
        height: height * .5,
        borderBottomRightRadius: width * .1,
        borderBottomLeftRadius: width * .1,
        opacity: .6,
        position: 'absolute'
    },
    textInputView: {
        backgroundColor: "#fffdfdd5",
        elevation: width * .005,
        width: width * .7,
        borderRadius: width * .1,
        marginTop: height * .03,
        paddingHorizontal: width * .02
    },
    textInput: {
        fontSize: width * .045,
        // fontWeight: 'bold',
        fontFamily: Fonts.BalooChettanBold,
        
    },
    modalLoginBottonContainer: {
        backgroundColor: '#3a6475',
        alignItems: 'center',
        borderRadius: width * .1,
        elevation: width * .005,
        marginTop: height * .02,
        marginLeft: width * .1,
        width: width * .5,
        height: height * .06,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    modalSignupBottonContainer: {
        backgroundColor: '#7e6161',
        alignItems: 'center',
        borderRadius: width * .1,
        elevation: width * .005,
        // marginTop: height * .01,
        marginLeft: width * .1,
        width: width * .5,
        height: height * .06,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    modalBottonText: {
        color: 'white',
        fontSize: width * .04,
        position: 'relative',
        // fontWeight: 'bold',
        marginRight: width * .01,
        fontFamily: Fonts.Handlee,

    },
    orText: {
        color: 'white',
        fontSize: width * .07,
        // position: 'relative',
        // fontWeight: 'bold',
        // marginRight: width * .12,
        alignSelf: 'center',
        textShadowOffset: { width: width * .003, height: height * .002 },
        textShadowRadius: width * .01,
        textShadowColor: 'black',
        fontFamily: Fonts.BalooChettanBold,

    },
    orTextModal: {
        color: 'white',
        fontSize: width * .05,
        // position: 'relative',
        // fontWeight: 'bold',
        // marginRight: width * .13,
        alignSelf: 'center',
        textShadowOffset: { width: width * .003, height: height * .002 },
        textShadowRadius: width * .01,
        textShadowColor: 'black',
        fontFamily: Fonts.BalooChettanBold,

    }

});