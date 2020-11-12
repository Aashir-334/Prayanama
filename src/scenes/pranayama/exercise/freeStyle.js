import { StyleSheet, Dimensions } from "react-native"
import { Fonts } from '../../../utils/fonts';

//Packages
const { width, height } = Dimensions.get('window');

//Files
export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  mainInner: {
    height: height * .6,
    width: width * 1,
  },
  MainContainer: {
    flex: 1,
    marginTop: height * .65
  },
  remainHeading: {
    fontSize: height * .035,
    width: width * 1,
    padding: width * .02,
    backgroundColor: '#0000008a',
    color:'#ffff',
    textAlign:'center',
    fontFamily: Fonts.Handlee,
    textShadowOffset: {
      width: width * 0.001,
      height: height * 0.001,
    },
  },
  animatedBox:
  {
    width: width * 1,
    position:'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectExerText: {
    fontSize: height * .025,
    width: width * 0.8,
    textAlign: 'center',
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
    marginTop: height * .3,
    width: height * .121,
    height: height * .121,
    borderRadius: width * .3,
    backgroundColor: '#cacaca7c',
    elevation: width * .05,
    // borderBottomWidth: width * .02,
    // borderRightWidth: width * .02,
    // borderLeftWidth: width * .02,
    // borderColor: 'lightgrey',
    // paddingBottom: height * .02,
  },
  okBotton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * .2,
    height: height * .05,
    backgroundColor: 'white',
    borderRadius: width * .01,
    elevation: width * .01
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
    backgroundColor: 'white',
    maxHeight: height * 0.7,
    maxWidth: width * 1,
    top: height * .1,
    borderTopLeftRadius: width * .1,
    borderBottomRightRadius: width * .1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  modalLinear: {
    width: width * .87,
    height: height * .68,
    borderTopLeftRadius: width * .1,
    borderBottomRightRadius: width * .1,
    backgroundColor: 'white',
    borderRadius: width * .01,
  },
  modalHeaderContainer: {
    width: width * .87,
    height: height * .18,

  },
  modalHeader: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',

  },

  modalBodyContainer: {
    width: width * .87,
    height: height * .4,

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
    backgroundColor: '#2627296f',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
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
    flexDirection: "row",
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
});