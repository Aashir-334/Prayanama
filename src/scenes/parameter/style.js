import { StyleSheet, Dimensions } from "react-native"
import { Fonts } from '../../utils/fonts';

//Packages

//Files
const { width, height } = Dimensions.get('window');

export default styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  backgroundImage: {
    width: width * 1,
    height: height * 1,
    position: 'absolute',
    // backgroundColor: '#75c3ff',
  },
  viewContainerHeader: {
    width: width * 1,
    height: height * .07,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#97C9EE',
    flexDirection: 'row',
    paddingHorizontal: width * .05,
  },
  containerHeaderText: {
    color: 'black',
    fontSize: height * .02,
    fontFamily: Fonts.WorkSansBold,
    marginLeft: width * .01,
  },
  viewContainer: {
    width: width * 1,
    height: height * .1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#00000098',
    flexDirection: 'row',
    paddingHorizontal: width * .03,
    borderBottomWidth: 1,
    borderColor: 'white'
  },
  iconAndName: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  iconViewBlue: {
    width: height * .045,
    height: height * .045,
    backgroundColor: '#007AFF',
    borderRadius: width * .01,
    elevation: width * .005,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconNameText: {
    color: 'white',
    fontSize: height * .023,
    fontFamily: Fonts.WorkSansBold,
    marginLeft: width * .01,
  },
// Modal Style
  modalContainer: {
    backgroundColor: 'white',
    maxHeight: height * 0.62,
    maxWidth: width * 1,
    top: height * 0.09,
    borderRadius: width * .1,
  },
  modalInner: {
    height: height * 0.58,
    width: width * .83,
    backgroundColor: '#97C9EE',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    elevation: width * .06,
    borderRadius: width * .1,
  },
  modalImage: {
    height: height * 0.58,
    width: width * .83,
    position: 'absolute',
    borderRadius: width * .1,
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
  headerBackBotton: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: width * .02,
    height: width * .12,
    width: width * .16,
},
  headerHeading1: {
    fontFamily: Fonts.BalooChettan2,
    fontSize: height * 0.035,
    // fontWeight: 'bold',
    color: 'white',
    textShadowOffset: {
      width: width * 0.001,
      height: height * 0.001,
    },
    textShadowRadius: width * 0.005,
    textShadowColor: 'black',
  },
  bodyContainer: {
    height: height * 0.4,
    width: width * 0.9
  },
  bodyInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageBotton:{
    width:width * .6,
    height:height * .07,
    backgroundColor:'white',
    borderRadius:width * .1,
    elevation:width * .02,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    marginBottom:height * .02
  },
  handleCheckIcon:{
    position:'absolute',
    right:width * .05,
  },
  languageText:{
    fontSize:height * .025,
    fontFamily:Fonts.BalooChettanBold,
    color:'black'
  },
  textStyle: {
    marginLeft: width * 0.18,
    fontSize: width * 0.035,
    fontFamily: Fonts.BalooChettan2,
    color: 'black',
  },
  textInputCustomView: {
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
  textInputCustom: {
    fontFamily: Fonts.BalooChettan2,
    textAlign: 'center',
    color: 'white',
    fontSize: width * 0.04,
    width: width * 0.45,
  },
  footerContainer: {
    height: height * 0.1,
    width: width * 0.9
  },
  footerInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottonContainer: {
    backgroundColor: 'black',
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