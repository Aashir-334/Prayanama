import { StyleSheet, Dimensions } from "react-native"
import { Fonts } from '../../utils/fonts';

//Packages

//Files
const { width, height } = Dimensions.get('window');

export default styles = StyleSheet.create({
    Main: {
        flex: 1
    },
    imageBackground: {
        width: width * 1,
        height: height * 1,
        opacity: 0.8,
        position: 'absolute',
    },
    headerContainer: {
        height: height * 0.2,
        width: width * 1,
    },
    headerInner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontFamily: Fonts.BalooChettanBold,
        fontSize: width * 0.08,
        color: 'white',
        textAlign: 'center',
    },
    headerText2: {
        fontFamily: Fonts.BalooChettanBold,
        fontSize: width * 0.05,
        color: 'white',
        textAlign: 'center',
    },
    bodyContainer: {
        height: height * 0.47,
        width: width * 1,
    },
    bodyInner: {
        flex: 1,
    },
    selcetMultyContainer: {
        marginTop: height * 0.05,
        borderTopWidth: width * 0.015,
        borderBottomWidth: width * 0.015,
        paddingVertical: height * 0.01,
        borderColor: 'white',
        width: width * 1,
        alignItems: 'center',
    },
    multiRow: {
        margin: width * .01,
        paddingLeft: width * .05,
        borderRadius: width * .1,
        width: width * .8,
        height: height * .08,
        // marginLeft: wp('10%'),
    },
    multiLabel: {
        paddingLeft: width * .35,
        fontSize: width * .045,
        fontFamily: Fonts.Handlee,
    },
    footerContainer: {
        height: height * 0.3,
        width: width * 1,
    },
    footerInner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // backgroundColor:'red'

    },
    bottonContainer: {
        backgroundColor: '#165BAA',
        alignItems: 'center',
        borderRadius: width * 0.1,
        elevation: width * 0.006,
        height: height * 0.08,
        flexDirection: 'row',
        justifyContent: 'center',
        width: width * 0.8,
        // marginTop: height * 0.05,
    },
    bottonText: {
        color: '#fff',
        fontSize: width * .06,
        fontFamily: Fonts.Handlee,
    },
    footerTextContainer: {
        backgroundColor: '#abb6bd52',
        width: width * 1,
        height: height * 0.16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        color: '#fff',
        fontSize: width * 0.04,
        fontFamily: Fonts.BalooChettanBold,
        textAlign: 'center',
        width: width * 0.8,

    },

});