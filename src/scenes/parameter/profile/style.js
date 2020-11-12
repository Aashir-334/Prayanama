import { StyleSheet, Dimensions } from "react-native"
import { Fonts } from '../../../utils/fonts';

//Packages

//Files
const { width, height } = Dimensions.get('window');

export default styles = StyleSheet.create({
    contain: {
        height: height * 1,
        width: width * 1,
        backgroundColor: 'white',
    },
    backgroundImage: {
        width: width * 1,
        height: height * 1,
        // opacity: .8,
        position: 'absolute',
        // backgroundColor: '#75c3ff',
    },
    headerBackBotton: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: width * .0,
        top: height * .03,
        borderColor: '#89CCFE',
        height: width * .12,
        width: width * .16,
        elevation: width * .003,
        backgroundColor: 'black',
        borderColor: 'white',
        borderTopRightRadius: width * .07,
        borderBottomRightRadius: width * .07,
    },
    headerMenuBotton: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: width * .05,
        bottom: height * .01,
        borderColor: '#89CCFE',
        height: height * .07,
        width: height * .07,
        elevation: width * .003,
        backgroundColor: 'black',
        borderRadius: width * .2,
        paddingLeft: width * .015
    },
    avatarView: {
        width: height * .16,
        height: height * .16,
        backgroundColor: 'white',
        borderRadius: width * 1,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: width * .01
    },
    avatar: {
        width: height * .15,
        height: height * .15,
        // opacity: .5,
    },
    headerContainer: {
        height: height * .2,
        width: width * 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    itemViewInner: {
        height: height * 0.28,
        width: width * .92,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        margin: width * .02,
        elevation: width * .02,
        borderRadius: width * .1,
        marginBottom: height * .02
    },
    itemView: {
        height: height * 0.07,
        width: width * .87,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#97C9EE',
        margin: width * .01,
        elevation: width * .02,
        borderRadius: width * .1,
        paddingLeft: width * .03,
    },
    itemViewArchAndTargetInner: {
        width: width * .92,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        margin: width * .02,
        elevation: width * .02,
        borderRadius: width * .1,
        marginBottom: height * .02,
        padding: height * .025,
    },
    itemViewArchAndTarget: {
        width: width * .38,
        alignItems: 'center',
        padding: height * .02,
        elevation: width * .02,
        backgroundColor: '#97C9EE',
        margin: width * .02,
        borderRadius: width * .05,
    },
    archTypeHeading: {
        fontSize: height * 0.03,
        fontFamily: Fonts.Handlee,
    },
    archTypeDataView: {
        flexDirection: 'row',
        width: width * 0.35,
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    archTypeDataText:{
        fontSize: height * 0.023,
        fontFamily: Fonts.BalooChettan2,
        color: 'white',
      },
    dataText: {
        fontSize: width * 0.055,
        fontFamily: Fonts.Handlee,
    },
    fetchDataText: {
        fontSize: width * 0.05,
        fontFamily: Fonts.BalooChettan2,
        color: 'white',
    },
    textInputView: {
        width: width * .62,
        fontSize: height * 0.02,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInputEdit: {
        width: width * .6,
        fontSize: width * 0.05,
        fontFamily: Fonts.BalooChettan2,
    },


});