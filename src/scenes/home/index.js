import React, { Component } from "react";
import { View, Text, StatusBar, FlatList, BackHandler } from "react-native";
import { colors } from "../../styles/index";
import { Container } from "../../components/layout/index";
import { PlayButton } from "../../components/common/inputs/button";
import { StackedAreaChart, Grid } from "react-native-svg-charts";
import * as shape from "d3-shape";

const ListItem = ({ item }) => {
    return (
        <View
            style={{
                backgroundColor: colors.primaryColor,
                padding: 16,
                paddingHorizontal: 24,
                marginVertical: 8,
                borderRadius: 32,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}
        >
            <Text
                style={{
                    color: '#fff'
                }}
            >
                {item.title}
            </Text>
            <Text style={{ alignSelf: 'center', color: '#fff' }}>{item.value} b/m</Text>
        </View>
    );
}

const DetailViewWrapper = (prop) => <View
    style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 24
    }}>{prop.children}</View>

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggle: true
        };
    }

    toggle() {
        if (this.state.toggle) {
            this.setState({
                toggle: !this.state.toggle
            });
        }
        else {
            this.switchToParanyamaScreen();
        }
    }

    switchToParanyamaScreen() {
        this.props.navigation.navigate('Paranyama')
    }

    returnData() {
        if (this.state.toggle) {
            return [
                {
                    month: new Date(2015, 0, 1),
                    right: 0,
                    left: 100
                },
                {
                    month: new Date(2015, 0, 1),
                    right: 200,
                    left: 200
                },
                {
                    month: new Date(2015, 0, 1),
                    right: 600,
                    left: 400
                }
            ]
        } else {
            return [
                {
                    month: new Date(2015, 0, 1),
                    right: 3356,
                    left: 7954
                },
                {
                    month: new Date(2015, 0, 1),
                    right: 1234,
                    left: 4563
                },
                {
                    month: new Date(2015, 0, 1),
                    right: 2834,
                    left: 2378
                },
                {
                    month: new Date(2015, 0, 1),
                    right: 2343,
                    left: 1238
                },
                {
                    month: new Date(2015, 0, 1),
                    right: 7894,
                    left: 2344
                },
                {
                    month: new Date(2015, 0, 1),
                    right: 234,
                    left: 123
                },
                {
                    month: new Date(2015, 0, 1),
                    right: 3453,
                    left: 1211
                },
                {
                    month: new Date(2015, 0, 1),
                    right: 34,
                    left: 645
                },
            ]
        }
    }



    

    render() {
        const _colors = [colors.white, colors.secondaryColor];
        const keys = ['right', 'left'];
        const svgs = [
            { onPress: () => console.log('right') },
            { onPress: () => console.log('left') }
        ]
        const DATA = [
            {
                id: 0,
                title: 'Average Breath Per Minutes',
                value: 12
            },
            {
                id: 1,
                title: 'Volume Breath Right Nostril Per Minutes',
                value: 12
            },
            {
                id: 2,
                title: 'Volume Breath Left Nostril Per Minutes',
                value: 12
            },
            {
                id: 3,
                title: 'Volume Total Inhale Per Minutes',
                value: 12
            }
        ];

        return (
            <Container>
                <StatusBar
                    hidden={true}
                />
                <StackedAreaChart
                    style={{
                        flex: 1,
                        backgroundColor: colors.primaryColor,
                        borderBottomColor: colors.white,
                        borderBottomWidth: 1
                    }}
                    data={this.returnData()}
                    keys={keys}
                    colors={_colors}
                    curve={shape.curveNatural}
                    showGrid={true}
                    animate={true}

                >
                    <Grid
                        belowChart={true}
                    />
                </StackedAreaChart>

                <DetailViewWrapper>
                    <PlayButton
                        style={{
                            alignSelf: 'center',
                            position: 'relative',
                            bottom: 24
                        }}
                        onButtonPress={this.toggle.bind(this)} />

                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => {
                            return <ListItem item={item} />
                        }}
                        keyExtractor={item => item.id.toString()}
                    />
                    <Text
                        style={{
                            alignSelf: 'center'
                        }}
                    >View Suggested Exercise</Text>
                </DetailViewWrapper>
            </Container>
        );
    }
}