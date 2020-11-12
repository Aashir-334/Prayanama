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
    //transform: [{ rotate: '180deg'}],
    opacity: .9,
    position: 'absolute',
    // backgroundColor: '#75c3ff',

  },
  heading: {
    fontSize: width * .28,
    textAlign:'center',
    fontFamily: Fonts.Handlee,
    textShadowOffset: {
        width: width * 0.001,
        height: height * 0.001,
    },
    textShadowRadius: width * 0.05,
    textShadowColor: 'white',
    color: 'black'
},
});