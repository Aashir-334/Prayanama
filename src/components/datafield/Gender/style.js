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
        top: height * 0.09,
        alignSelf: 'center',
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
        height: height * 0.45,
        opacity: 0.3,
        position: 'absolute',
        borderTopLeftRadius: width * 0.01,
        borderTopRightRadius: width * 0.1,
        borderBottomLeftRadius: width * 0.1,
        borderBottomRightRadius: width * 0.01,
      },
    headerContainer: { 
        height: height * 0.07, 
        width: width * 0.9 
    },
    headerInner: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
    headerHeading1: {
        fontFamily: Fonts.BalooChettan2,
        fontSize: width * 0.08,
        // fontWeight: 'bold',
        color: '#3e4557',
        textShadowOffset: {
          width: width * 0.002,
          height: height * 0.002,
        },
        textShadowRadius: width * 0.05,
        textShadowColor: '#d8f726a8',
      },
    bodyContainer: { 
        height: height * 0.28, 
        width: width * 0.9 
    },
    bodyInner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      boxStyle: {
        width: width * 0.6,
        height: height * 0.02,
        backgroundColor: '#3e4557',
        borderWidth: width * 0.01,
        elevation: width * 0.006,
        marginBottom: -4,
      },
      textStyle: {
        marginLeft: width * 0.18,
        fontSize: width * 0.035,
        fontFamily: Fonts.BalooChettan2,
        color: 'white',
      },
      textInputCustomView:{
        alignItems: 'center',
        flexDirection: 'row',
        width: width * 0.5,
        height: height * 0.06,
        backgroundColor: '#41404098',
        borderRadius: width * 0.1,
        justifyContent: 'center',
        paddingHorizontal: width * 0.05,
        elevation: width * 0.005,
        marginTop: height * 0.02,
      },
      textInputCustom:{
        fontFamily: Fonts.BalooChettan2,
        textAlign: 'center',
        color: 'white',
        fontSize: width * 0.04,
        width: width * 0.45,
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
        paddingLeft: width * 0.06,
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
        fontSize: width * 0.04,
        position: 'relative',
        // left: width * .01,
        fontFamily: Fonts.BalooChettan2,
        marginRight: width * 0.02,
      },

});