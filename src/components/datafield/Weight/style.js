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
    selectGenderView: {
        position: 'absolute',
        right: width * .04,
        flexDirection: 'row',
        alignItems: 'center',
    },
    selectGenderText: {
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
        maxHeight: height * 0.45,
        maxWidth: width * 1,
        top: height * 0.1,
        borderTopLeftRadius: width * 0.01,
        borderTopRightRadius: width * 0.1,
        borderBottomLeftRadius: width * 0.1,
        borderBottomRightRadius: width * 0.01,
    },
    modalInner: {
        flex: 1,
        backgroundColor: '#000000',
        borderTopLeftRadius: width * 0.01,
        borderTopRightRadius: width * 0.1,
        borderBottomLeftRadius: width * 0.1,
        borderBottomRightRadius: width * 0.01,
    },
    modalImage: {
        width: width * 0.9,
        height: height * 0.45,
        opacity: 0.8,
        position: 'absolute',
        borderTopLeftRadius: width * 0.01,
        borderTopRightRadius: width * 0.1,
        borderBottomLeftRadius: width * 0.1,
        borderBottomRightRadius: width * 0.01,
    },
    headerContainer: {
        height: height * 0.07,
        width: width * 0.9,
    },
    headerInner: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerHeading1: {
        fontFamily: Fonts.BalooChettan2,
        fontSize: width * .09,
        color: 'white',
        textShadowOffset: {
            width: width * 0.001,
            height: height * 0.001,
        },
        textShadowRadius: width * 0.05,
        textShadowColor: 'white',
    },
    headerContainer2: {
        height: height * 0.06,
        width: width * 0.9
    },
    headerInner2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerHeadin2: {
        fontFamily: Fonts.BalooChettan2,
        fontSize: width * .07,
        color: 'white',
        textShadowOffset: {
            width: width * 0.001,
            height: height * 0.001,
        },
        textShadowRadius: width * 0.05,
        textShadowColor: 'white',
    },
    switchBottonContainer: {
        width: width * 0.15,
        height: height * 0.038,
        borderRadius: width * 0.04,
        padding: width * 0.01,
        elevation: width * 0.005,
        marginLeft: width * 0.02,
    },
    switchBottonCircle: {
        width: width * 0.052,
        height: height * 0.029,
        borderRadius: width * 0.1,
        backgroundColor: 'white',
    },
    bodyContainer: {
        height: height * 0.21,
        width: width * 0.9
    },
    bodyInner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInputView: {
        alignItems: 'center',
        flexDirection: 'row',
        width: width * 0.5,
        height: height * 0.08,
        backgroundColor: '#ffffff6c',
        borderRadius: width * 0.1,
        justifyContent: 'center',
        paddingHorizontal: width * 0.05,
        elevation: width * 0.005,
    },
    textInput: {
        fontFamily: Fonts.BalooChettanBold,
        textAlign: 'center',
        fontSize: width * 0.06,
        width: width * 0.3,
        // marginLeft:width * .08,
        color: 'white',
    },
    textInputText:{
        color: 'white',
        fontSize: width * 0.05,
        position: 'relative',
        fontFamily: Fonts.BalooChettanBold,
        right: width * 0.02,
      },
    footerContainer: { 
        height: height * 0.11, 
        width: width * 0.9 
    },
    footerInner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottonContainer: {
        backgroundColor: '#9eb329',
        padding: width * 0.02,
        paddingLeft: width * 0.06,
        alignItems: 'center',
        borderRadius: width * 0.1,
        elevation: width * 0.005,
        height: height * 0.06,
        width: width * 0.5,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    bottonText: {
        color: '#fff',
        fontSize: width * 0.04,
        position: 'relative',
        // left: width * .01,
        fontFamily: Fonts.BalooChettan2,
        marginRight: width * 0.02,
    },

});