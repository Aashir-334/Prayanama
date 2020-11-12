import React, { Component,useEffect } from "react";
import { TouchableOpacity, Text, FlatList, AsyncStorage } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { SelectContainer, SelectItemContainer } from "../../layout/index";

class SelectItem extends Component {

    state = {
        toggle: false,
        dataPersonality:''
    };
    componentWillMountMount() {
        AsyncStorage.setItem('value',this.state.dataPersonality );
     };
    render() {
        console.log(this.state.dataPersonality)

        const {item: {title,value}} = this.props;
        return (
            <TouchableOpacity
                onPress={() => {
                    this.setState({
                        toggle: !this.state.toggle,
                        dataPersonality: value
                    }) 
                }}>
                <SelectItemContainer>
                    <Text style={{
                        fontWeight:'bold',
                    }}>
                        {title}
                    </Text>
                    {this.state.toggle && <Icon style={{ alignSelf: 'center' }} size={16} color={'#165BAA'} name="checkcircle" />}
                </SelectItemContainer>
            </TouchableOpacity>
        );
    }
}

export class SelectDefault extends Component {

    render() {
        const { data } = this.props;
        return (
            <SelectContainer>
                <FlatList 
                    style={{
                        width:300,
                        alignSelf:'center', 
                    }}
                    data={data}
                    renderItem={({item}) => {
                        return <SelectItem item={item}/>
                    }}
                    keyExtractor={item => item.Id.toString()}
                    showsVerticalScrollIndicator={false}
                />
                
            </SelectContainer>
        )
    }
}