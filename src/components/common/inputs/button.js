import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import style, { colors } from "../../../styles";

export class PlayButton extends Component {

    render() {
        return(
            <TouchableOpacity
                onPress={() => this.props.onButtonPress()}
                style={this.props.style}
            >
                <View
                    style={style.Button.PlayButton}
                >
                    <Icon name="caretright" size={42} color={colors.white}
                        style={{
                            alignSelf: 'center',
                            marginTop: 24
                        }}
                    />
                </View>
            </TouchableOpacity>
        );
    }
}