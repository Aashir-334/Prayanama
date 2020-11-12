import { StyleSheet, Dimensions } from "react-native"
import { Fonts } from '../../../../utils/fonts';

//Packages
const { width, height } = Dimensions.get('window');

//Files
export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  mainInner: {
    height: height * .4,
    width: width * 1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:height * .02,
  },
  headerHeading:{
    fontSize: height * .045,
    width: width * .7,
    marginTop:height * .02,
    textAlign:'center',
    fontFamily: Fonts.Handlee,
    textShadowOffset: {
      width: width * 0.001,
      height: height * 0.001,
    },
    textShadowRadius: width * 0.05,
    textShadowColor: 'black',
    color: 'white'
  },
  headerRefreshHeading:{
    fontSize: height * .025,
    width: width * .7,
    marginTop:height * .02,
    textAlign:'center',
    fontFamily: Fonts.Handlee,
    textShadowOffset: {
      width: width * 0.001,
      height: height * 0.001,
    },
    textShadowRadius: width * 0.05,
    textShadowColor: 'black',
    color: 'white'
  },
  infoText:{
    width: width * 1,
    // backgroundColor:'#ffffffb1',
    justifyContent:'center',
    alignItems:'center',
    marginTop:height * .8
  },
  insideHeading:{
    fontSize: height * .025,
    width: width * 1,
    padding:width * .02,
    backgroundColor:'#ffffffb1',
    marginTop:height * .02,
    textAlign:'center',
    fontFamily: Fonts.Handlee,
    textShadowOffset: {
      width: width * 0.001,
      height: height * 0.001,
    },
    textShadowRadius: width * 0.05,
    textShadowColor: 'white',
    color: 'black',
  },
  selectExerText: {
    fontSize: height * .025,
    width: width * 0.8,
    textAlign:'center',
    fontFamily: Fonts.Handlee,
    textShadowOffset: {
      width: width * 0.001,
      height: height * 0.001,
    },
    textShadowRadius: width * 0.05,
    textShadowColor: 'black',
    color: 'white'
  },
  pickerStyle: {
    color: 'white',
    width: width * .4,
  },
  playBotton: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: height * .121,
    height: height * .121,
    borderRadius: width * .3,
    backgroundColor: '#cacaca7c'
  },
  refreshBotton: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: height * .1,
    height: height * .1,
    borderRadius: width * .3,
    backgroundColor: '#9c9c9c',
    borderWidth:5,
    borderColor:'#5D5D5D',
    elevation:width * .01
  },
  okBotton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * .2,
    height: height * .05,
    backgroundColor: 'white',
    borderRadius: width * .01,
    elevation: width * .01,
    borderWidth:2,
    borderColor:'black',
  },
  alertText: {
    fontSize: width * .07,
    color: 'white',
    fontFamily: Fonts.BalooChettan2,
    textAlign: 'center',
    width: width * .7,
    marginTop: height * .02,
    textShadowOffset: {
      width: width * 0.001,
      height: height * 0.001,
    },
    textShadowRadius: width * 0.03,
    textShadowColor: 'black',
  },
  okText: {
    fontSize: width * .04,
    color: 'black',
    fontFamily: Fonts.Handlee,
  },


  // Modal Style

  modalMainContainer: {
    backgroundColor: '#ffffff92',
    maxHeight: height * 0.5,
    maxWidth: width * 1,
    top: height * .1,
    borderTopLeftRadius: width * .1,
    borderBottomRightRadius: width * .1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  modalLinear: {
    width: width * .86,
    height: height * .48,
    borderTopLeftRadius: width * .1,
    borderBottomRightRadius: width * .1,
    backgroundColor: 'white',
    borderRadius: width * .01,
    borderWidth: 2,
    borderColor: '#727272f1',
    elevation: width * .01,
  },
  modalHeaderContainer: {
    width: width * .87,
    height: height * .19,
  },
  modalHeader: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',

  },

  modalBodyContainer: {
    width: width * .87,
    height: height * .19,

  },
  modalBodyInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  timeInMinHeading: {
    fontSize: width * .045,
    fontFamily: Fonts.Handlee,
    textShadowOffset: {
      width: width * 0.001,
      height: height * 0.001,
    },
    textShadowRadius: width * 0.05,
    textShadowColor: 'black',
    color: 'white',
    textAlign: 'center',
    width: width * .85
  },
  minInputView: {
    width: width * .4,
    height: height * .07,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderWidth:5,
    borderColor:'#ffffff89',
    borderRadius: width * .005,
    marginVertical: height * .02
  },
  songInputView: {
    width: width * .7,
    height: height * .07,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderWidth:5,
    borderColor:'#ffffff89',
    borderRadius: width * .005,
    marginVertical: height * .02
  },
  minIput: {
    fontSize: width * .04,
    color: 'white',
    // width:width *
  },
  timeInSecHeading: {
    fontSize: width * .045,
    fontFamily: Fonts.Handlee,
    textShadowOffset: {
      width: width * 0.001,
      height: height * 0.001,
    },
    textShadowRadius: width * 0.05,
    textShadowColor: 'black',
    color: 'white',
    textAlign: 'center',
    width: width * .85
  },

  modalFooterContainer: {
    width: width * .87,
    height: height * .1,

  },
  modalFooter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },



});