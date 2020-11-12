import { StyleSheet, Dimensions } from "react-native"
import { Fonts } from '../../utils/fonts';

//Packages
const { width, height } = Dimensions.get('window');

//Files
export default styles = StyleSheet.create({
    prayanamaWrapper: {
        flexDirection: 'column',
        height: height * .83,
        justifyContent: 'center',
        margin: width * 0.05,
        // borderTopLeftRadius: width * 0.01,
        // borderTopRightRadius: width * 0.05,
        // borderBottomLeftRadius: width * 0.05,
        // borderBottomRightRadius: width * 0.01,
        overflow: 'hidden',
        // elevation: width * .025,
    },
    paranyamaButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
         borderTopLeftRadius: width * 0.01,
        borderTopRightRadius: width * 0.05,
        borderBottomLeftRadius: width * 0.05,
        borderBottomRightRadius: width * 0.01,
        marginBottom:10,
        overflow: 'hidden',
    },
    paranyamaButtonImage: {
        position: 'absolute',
        transform: [{ rotate: '90deg' }],
        resizeMode:'cover',
        opacity: 0.5,
    },
    paranyamaButtonText: {
        fontSize: width * 0.08,
        textAlign: 'center',
        fontFamily: Fonts.WorkSansBold,
        // fontWeight: 'bold',
        color: 'black',
        textShadowOffset: {
            width: width * 0.003,
            height: height * 0.003,
        },
        textShadowRadius: width * 0.05,
        textShadowColor: 'white',
    },
});