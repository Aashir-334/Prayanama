import { StyleSheet, Dimensions } from "react-native"
import {Fonts} from '../../utils/fonts';

//Packages

//Files
const { width, height } = Dimensions.get('window');

export default styles = StyleSheet.create({
    Main:{
        flex:1
    },
    imageBackground:{
        width: width * 1,
        height: height * 1,
        opacity: 0.8,
        position: 'absolute',
      },
      dataFieldContainer:{
        height: height * .12,
        width: width * 1,
      },
      dataFieldInner:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      headerText:{
        fontFamily: Fonts.BalooChettanBold,
        fontSize: width * 0.08,
        color: 'white',
        textAlign: 'center',
      },
      bodyContainer:{
        width: width * 1,
        height: height * 0.593,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: width * 0.015,
        borderBottomWidth: width * 0.015,
        paddingVertical: height * 0.01,
        borderColor: 'white',
      },
      Text: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: width * 0.1,
        paddingHorizontal: width * 0.02,
      },
      nameContainer:{
        height: height * 0.07,
        width: width * 0.8,
        margin: width * .01,
      },
      nameInput:{
        // fontWeight: 'bold',
        fontFamily: Fonts.BalooChettan2,
        color: 'rgb(77, 77, 77)',
        fontSize: width * .05
      },
      footerContainer:{
        width: width * 1,
        height: height * 0.255,
        alignItems: 'center',
      },
      bottonContainer:{
        height: height * 0.18,
        width: width * 0.8,
      },
      botton:{
        justifyContent: 'center',
        backgroundColor: '#165BAA',
        padding: width * 0.02,
        alignItems: 'center',
        borderRadius: width * 0.1,
        elevation: width * 0.005,
        height: height * 0.08,
        flexDirection: 'row',
        marginVertical:height * .015
      },
      bottonText:{
        color: '#fff',
        fontFamily: Fonts.Handlee,
        fontSize: width * .06,
        position: 'relative',
        // left: wp('28%'),
      },
      footerTextContainer:{
        backgroundColor: '#323335af',
        width: width * 1,
        height: height * 0.14,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
      },
      footerText:{
        color: '#fff',
        fontSize: width * 0.04,
        fontFamily: Fonts.BalooChettanBold,
        textAlign: 'center',
        width: width * 0.86,
      },
});