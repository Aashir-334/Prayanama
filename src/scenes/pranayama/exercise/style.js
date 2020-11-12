import { StyleSheet, Dimensions } from "react-native"
import { Fonts } from '../../../utils/fonts';

//Packages
const { width, height } = Dimensions.get('window');

//Files
export default styles = StyleSheet.create({
  mainContainer:{
    flex: 1
  },
  mainLenear:{
    flex: 1
  },
  backgroundImage:{
    width: width * 1,
    height: height * 1,
    opacity: .8,
    position: 'absolute',
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
    elevation: width * .003,
    backgroundColor: '#ffffff86',
    borderTopRightRadius: width * .07,
    borderBottomRightRadius: width * .07,
    position:'absolute',
    left:width * 0,
    borderColor: '#89CCFE',
    height: height * .07,
    width: width * .16,
  },
  headerHeading:{
    fontSize: width * .09,
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
  bodyContainer:{
    width: width * 1,
    height: height * .8,
  },
  bodyInner:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
});