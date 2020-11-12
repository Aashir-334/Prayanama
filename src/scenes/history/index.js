import React, { Component } from "react";
import { View, Text, StatusBar, FlatList, TouchableOpacity,Dimensions } from "react-native";
import style from "../../styles/index";
import { Header } from "native-base";
import Icon from "react-native-vector-icons/AntDesign";
import { Fonts } from '../../utils/fonts';
import { strings } from '../../Locatization';
import TabIcon from 'react-native-vector-icons/FontAwesome5';  
import { store } from "../../store";



const {width, height} = Dimensions.get('window');

const ListItem = ({item}) => {
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
                activeOpacity={0.7}
            >
                <Text
                    style={{
                        color: '#fff'
                    }}
                >
                    {item.title}
                </Text>
                <Icon name="rightcircle" color="#fff" size={16}/>
            </TouchableOpacity>
    );
}

const DATA = [
    {
        id: 0,
        title: 'Paranyama Practiced'
    },
    {
        id: 1,
        title: 'Average Breath Per Minute'
    },
    {
        id: 2,
        title: 'Volume of Air Per Minute'
    },
    {
        id: 3,
        title: 'Total Volume of Air'
    }
]

export default class HistoryScreen extends Component {
    static navigationOptions = {
        title: store.getState().language.history,
        tabBarIcon:({tintColor})=>(  
            <TabIcon name="clipboard-list" color={tintColor} size={height * .03}/>  
        )
      };
    render() {

        return(
            <View style={style.Layout.safeArea}>
                <StatusBar
                      translucent={false}
                      backgroundColor={'rgba(0, 0, 0, 0.0)'}
                      barStyle={'dark-content'}
                    />
                    
                <View style={[style.Layout.container, {
                    padding: width * .05
                }]}>
                    
                    <FlatList 
                            data={DATA}
                            renderItem={({item}) => {
                                return <ListItem item={item}/>
                            }}
                            keyExtractor={item => item.id.toString()}
                            scrollEnabled={true}
                        />
                </View>
            </View>
        );
    }
}