import { StyleSheet, Dimensions } from "react-native"
import { Fonts } from '../../../utils/fonts';

//Packages
const { width, height } = Dimensions.get('window');

//Files
export default styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  backgroundImage:{
    width: width * 1,
    height: height * 1,
    opacity: .9,
    position: 'absolute',
    // backgroundColor: '#75c3ff',

  },
  headerContainer:{
    height: height * .12,
    width: width * 1,    
  },
  headerInner:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBackBotton:{
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    left:width * .0,
    borderColor: '#89CCFE',
    height: height * .07,
    width: width * .16,
    elevation: width * .003,
    backgroundColor: 'black',
    borderTopRightRadius: width * .07,
    borderBottomRightRadius: width * .07,
  },
  headerBackBottonModal:{
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    left:width * .0,
    borderColor: '#89CCFE',
    height: height * .07,
    width: width * .16,
   
  },
  headerHeading:{
    fontSize: width * .09,
    fontFamily: Fonts.Handlee,
    textShadowOffset: {
      width: width * 0.001,
      height: height * 0.001,
    },
    textShadowRadius: width * 0.05,
    textShadowColor: 'white',
    color: 'black'
  },
  scrollView: {
    height: height * 1,
    width: width * 1,
    // backgroundColor:'#B6D8FE'
  },
  scrollViewContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom:height * .21,
    // alignItems:'center'
  },
  scrollViewContainerPaid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom:height * .1,
    // alignItems:'center'
  },
  cardContainer: {
    height: height * .34,
    width: width * .48,
  },
  cardInner: {
    // backgroundColor: 'red',
    flex: 1,
    margin: width * .05,
    borderTopRightRadius: width * .05,
    borderBottomLeftRadius: width * .05,
    elevation: width * .003,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    borderTopRightRadius: width * .05,
    borderBottomLeftRadius: width * .05,
    width: width * .35,
    height: height * .27,
    opacity: .5,
    position: 'absolute',
  },
  cardContainerPaid: {
    height: height * .3,
    width: width * .93,
  },
  cardInnerPaid: {
    // backgroundColor: 'red',
    flex: 1,
    borderTopRightRadius: width * .05,
    borderBottomLeftRadius: width * .05,
    elevation: width * .003,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:height * .02,
  },
  cardImagePaid: {
    borderTopRightRadius: width * .05,
    borderBottomLeftRadius: width * .05,
    width: width * .88,
    height: height * .24,
    opacity: .5,
    position: 'absolute',
  },
  cardHeaderContainerPaid: {
    width: width * .88,
    height: height * .07,
  },
  cardBodyPaid: {
    width: width * .85,
    height: height * .18,
  },
  bodyContainerPaid: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    // backgroundColor:'red'
  },
  cardHeaderContainer: {
    width: width * .35,
    height: height * .07,
  },
  cardHeaderInnerLock: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems:'center'
    // backgroundColor:'red'
  },
  cardHeaderInner: {
    flex: 1,
    // backgroundColor:'red'
  },
  heart: {
    margin: width * .02,
    elevation: width * .008,
    width:width * .05,
  },
  cardBody: {
    width: width * .35,
    height: height * .11,
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    // backgroundColor:'red'
  },
  mainHeading: {
    fontSize: height * .03,
    color: 'white',
    fontFamily: Fonts.Handlee,
    textShadowOffset: {
      width: width * 0.003,
      height: height * 0.003,
    },
    textShadowRadius: width * 0.05,
    textShadowColor: 'black',
    textAlign: 'center'
  },
  mainHeadingPaid:{
    fontSize: height * .04,
    color: 'white',
    top:height * .02,
    fontFamily: Fonts.Handlee,
    textShadowOffset: {
      width: width * 0.003,
      height: height * 0.003,
    },
    textShadowRadius: width * 0.05,
    textShadowColor: 'black',
    textAlign: 'center'
  },
  cardFooter: {
    width: width * .35,
    height: height * .1,
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  footerText: {
    fontSize: height * .015,
    color: 'white',
    fontFamily: Fonts.BalooChettan2,
    textShadowOffset: {
      width: width * 0.003,
      height: height * 0.003,
    },
    textShadowRadius: width * 0.05,
    textShadowColor: 'black',
    textAlign: 'center',
    // top:height * .05
  },
  
  // modal
  modalNoteMainContainer:{
    backgroundColor: 'white',
    maxHeight: height * 0.6,
    maxWidth: width * .9,
    top: height * .1,
    borderTopLeftRadius: width * .1,
    borderBottomRightRadius: width * .1,
    alignItems:'center',
  },
  modalNoteLinear:{
    width:width * .856,        
    height: height * .58,  
    borderTopLeftRadius: width * .1,
    borderBottomRightRadius: width * .1,
    elevation:width * .01,
    justifyContent:'center',
    alignItems:'center'
  },
  modalNoteHeaderContainer: {
    width:width * .85,        
    height: height * .1,

  },
  modalNoteHeader: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  selectNoteText:{
    fontSize: width * .1,
    fontFamily: Fonts.Handlee,
    textShadowOffset: {
      width: width * 0.001,
      height: height * 0.001,
    },
    textShadowRadius: width * 0.05,
    textShadowColor: 'black',
    color: 'white'
  },
  noteText:{
    fontSize: height * .028,
    fontFamily: Fonts.WorkSansBold,
    textAlign:'center',
    textShadowOffset: {
      width: width * 0.001,
      height: height * 0.001,
    },
    textShadowRadius: width * 0.05,
    textShadowColor: 'white',
    color: 'black'
  },
  noteModalBodyContainer: {
    width:width * .8,        
    height: height * .38,

  },
  noteModalBodyInner: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  modalNoteFooterContainer: {
    width:width * .85,        
    height: height * .1,

  },
  modalNoteFooter: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  okNoteBotton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * .4,
    height: height * .05,
    backgroundColor: 'white',
    borderRadius: width * .005,
    elevation: width * .01
  },
  okNoteText: {
    fontSize: width * .06,
    color: 'black',
    fontFamily: Fonts.Handlee,
  },


// end modal

  footerTextPaid:{
    fontSize: height * .032,
    color: 'white',
    fontFamily: Fonts.BalooChettan2,
    textShadowOffset: {
      width: width * 0.001,
      height: height * 0.001,
    },
    textShadowRadius: width * 0.03,
    textShadowColor: 'black',
    textAlign: 'center',
    // top:height * .05
  },
  goDeeperContainer:{
    width:width * 1,
    height:height * .09,
  },
  goDeeperInner:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black',
    marginVertical:height * .01,
    elevation: width * .003,
  },
  goDeeperheading:{
    fontSize: width * .06,
    color: 'white',
    fontFamily: Fonts.Handlee,
  },
  okBotton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * .2,
    height: height * .05,
    backgroundColor: '#305bb9',
    borderRadius: width * .01,
    elevation: width * .005

  },
  alertText:{
    fontSize: width * .07,
    color: 'black',
    fontFamily: Fonts.BalooChettan2,
    textAlign:'center',
    width:width * .7,        
    marginTop:height *.02,
    textShadowOffset: {
      width: width * 0.001,
      height: height * 0.001,
    },
    textShadowRadius: width * 0.03,
    textShadowColor: 'white',
  },
  okText: {
    fontSize: width * .04,
    color: 'white',
    fontFamily: Fonts.Handlee,
  },
  modalHeaderContainer: {
    width:width * .9,        
    height: height * .3,

  },
  modalHeader: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  modalFooterContainer: {
    width:width * .9,        
    height: height * .1,

  },
  modalFooter: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  }





});