import { StyleSheet, Dimensions } from "react-native"
import { Fonts } from '../../utils/fonts';

//Packages
const { width, height } = Dimensions.get('window');

//Files
export default styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    marginTop: height * .6
  },
  animatedBox:
  {
    flex: 1,
    width: width * 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  readyHeading: {
    fontFamily: Fonts.Handlee,
    textShadowOffset: {
      width: width * 0.001,
      height: height * 0.001,
    },
    textShadowRadius: width * 0.05,
    textShadowColor: 'black',
    color: 'white',
    textAlign: 'center',
    fontSize: height * .035,
    width: width * 1,
    padding: width * .02,
    backgroundColor: '#0000008a',
  },
  remainHeading: {
    fontSize: height * .035,
    width: width * 1,
    padding: width * .02,
    backgroundColor: '#0000008a',
    fontFamily: Fonts.Handlee,
    textShadowOffset: {
      width: width * 0.001,
      height: height * 0.001,
    },
    textShadowRadius: width * 0.05,
    textShadowColor: 'black',
    color: 'white',
    textAlign: 'center'
  },
});