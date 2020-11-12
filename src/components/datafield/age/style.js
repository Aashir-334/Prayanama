import { StyleSheet, Dimensions } from "react-native"
import { Fonts } from '../../../utils/fonts';

//Packages

//Files
const { width, height } = Dimensions.get('window');

export default styles = StyleSheet.create({

    mainContainer: {
        height: height * 0.07,
        width: width * 0.8,
        margin: width * 0.01,
    },
    mainBotton: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: width * 0.1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainText: {
        // fontWeight: 'bold',
        // fontSize: 16,
        fontFamily: Fonts.BalooChettan2,
        fontSize: width * .05,
        color: 'rgb(77, 77, 77)',
        position: 'absolute',
        left: width * .03
    },
    selectAgeView: {
        position: 'absolute',
        right: width * .04,
        flexDirection: 'row',
        alignItems: 'center',
    },
    selectAgeText: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        fontFamily: Fonts.BalooChettan2,
        fontSize: width * .04,
        padding: height * 0.007,
        marginRight: width * .035
    },
    // Modal Styling


    modalContainer: {
        backgroundColor: 'white',
        maxHeight: height * 0.4,
        maxWidth: width * 1,
        top: height * 0.1,
        borderTopLeftRadius: width * 0.01,
        borderTopRightRadius: width * 0.1,
        borderBottomLeftRadius: width * 0.1,
        borderBottomRightRadius: width * 0.01,
    },
    modalInner: {
        flex: 1,
        backgroundColor: '#00000088',
        borderTopLeftRadius: width * 0.01,
        borderTopRightRadius: width * 0.1,
        borderBottomLeftRadius: width * 0.1,
        borderBottomRightRadius: width * 0.01,
    },
    modalImage: {
        width: width * 0.9,
        height: height * 0.4,
        borderTopLeftRadius: width * 0.01,
        borderTopRightRadius: width * 0.1,
        borderBottomLeftRadius: width * 0.1,
        borderBottomRightRadius: width * 0.01,
        // borderTopRightRadius: width * .1,
        // borderTopLeftRadius: width * .1,
        opacity: .5,
        position: 'absolute',
    },
    headerContainer: {
        height: height * 0.13,
        width: width * 0.9
    },
    headerInner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerHeading1: {
        fontFamily: Fonts.Handlee,
        fontSize: width * .06,
        color: 'white',
        textShadowOffset: {
            width: width * 0.002,
            height: height * 0.002,
        },
        textShadowRadius: width * 0.05,
        textShadowColor: 'white',
    },
    headerHeading2: {
        fontFamily: Fonts.Handlee,
        fontSize: width * .05,
        color: 'white',
        textShadowOffset: {
            width: width * 0.002,
            height: height * 0.002,
        },
        textShadowRadius: width * 0.05,
        textShadowColor: 'white',
    },
    bodyContainer: { 
        height: height * 0.17, 
        width: width * 0.9 
    },
    bodyInner: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      textInputView: {
        alignItems: 'center',
        flexDirection: 'row',
        width: width * 0.6,
        height: height * 0.1,
        justifyContent: 'center',
        paddingHorizontal: width * 0.05,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: 'white'

      },
    textInput: {
        fontFamily: Fonts.BalooChettan2,
        fontSize: width * .07,
        textAlign: 'center',
        width: width * 0.4,
        height: height * 0.08,
        // paddingHorizontal:width * .06,
        letterSpacing: width * 0.05,
        backgroundColor: '#cfcacac7',
        borderTopLeftRadius: width * 0.01,
        borderTopRightRadius: width * 0.05,
        borderBottomLeftRadius: width * 0.05,
        borderBottomRightRadius: width * 0.01,
      },
    footerContainer:{ 
        
        height: height * 0.1,
        width: width * 0.9 
    },
    footerInner:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    bottonContainer:{
        backgroundColor: '#9eb329',
        padding: width * 0.02,
        paddingLeft: width * 0.05,
        alignItems: 'center',
        borderRadius: width * 0.1,
        elevation: width * 0.005,
        height: height * 0.06,
        width: width * 0.5,
        flexDirection: 'row',
        justifyContent: 'center',
      },
      bottonText:{
        color: '#fff',
        fontFamily: Fonts.BalooChettan2,
        fontSize: width * .04,
        position: 'relative',
        // left: width * .01,
        marginRight: width * 0.02,
      },

});