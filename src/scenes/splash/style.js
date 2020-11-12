import { StyleSheet,Dimensions} from "react-native"
import {Fonts} from '../../utils/fonts';

//Packages
const { width, height } = Dimensions.get('window');

//Files
export default styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:'#165BAA',
        justifyContent:'center',
        alignItems:'center',
        // alignItems:'center',        
    },
    logoContainer: {
        // 
        // marginTop:100
    },
    logo: {
        width:('50%'),
        alignSelf:'center'
    },
    activityIndi:{
        // position:'relative',
        // bottom:160
    },
    textHeading:{
        // flexDirection:'row',
        
    },
    textStyle1:{
        color:'white',
        fontSize: width*.06,
        letterSpacing: 3,
        bottom:height * .3,
        alignSelf:'center',
        fontFamily: Fonts.Handlee,

        


    }



});