import React, { Component } from "react";
import { View, Text, StatusBar, FlatList, TouchableOpacity,Dimensions } from "react-native";
import style from "../../../styles/index";
import Icon from "react-native-vector-icons/AntDesign";
import { strings } from '../../../Locatization';
import Back from 'react-native-vector-icons/MaterialIcons';
import Notification from 'react-native-vector-icons/MaterialIcons';


const { width, height } = Dimensions.get('window');
const ListItem = ({ item, navigation }) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: '#89CCFE',
                padding: 16,
                paddingHorizontal: 24,
                marginVertical: 8,
                borderRadius: 32,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}
            onPress={() => {
                navigation.navigate('Exercise')
            }}
        >
            <Text
                style={{
                    color: '#fff'
                }}
            >
                {item.title}
            </Text>
            <Icon name="rightcircle" color="#fff" size={16} />
        </TouchableOpacity>
    );
}

const DATA = [
    {
        id: 0,
        title: '21 Day Modi Shodhana'
    },
    {
        id: 1,
        title: '40 Day 3 Minute'
    },
    {
        id: 2,
        title: '40 Day 7 Minute'
    },
    {
        id: 3,
        title: 'More Courses'
    },
    {
        id: 4,
        title: '40 Day 3 Minute'
    },
    {
        id: 5,
        title: '40 Day 3 Minute'
    },
    {
        id: 6,
        title: '40 Day 3 Minute'
    },
]

export default class CourseScreen extends Component {

    static navigationOptions = {
        title: strings.courseOffered,
    }

    render() {

        return (
            <View style={style.Layout.safeArea}>
                <View style={{
                    height: height * .09,
                    width: width * 1,
                }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: width * .03,
                        elevation: width * .01,
                        backgroundColor: 'white',
                        borderBottomLeftRadius: width * .05,
                        borderBottomRightRadius: width * .05,
                        borderBottomWidth: 3,
                        borderLeftWidth: 1,
                        borderRightWidth: 1,
                        borderColor: '#89CCFE'


                    }}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Back size={width * .08} color='#89CCFE' name='keyboard-backspace' />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Notification size={width * .08} color='#89CCFE' name='notifications' />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[style.Layout.container, {
                    padding: 16
                }]}>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => {
                            return <ListItem item={item} {...this.props} />
                        }}
                        keyExtractor={item => item.id.toString()}
                        scrollEnabled={true}
                    />
                </View>
            </View>
        );
    }
}