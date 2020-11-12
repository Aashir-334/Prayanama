import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    FlatList,
    TouchableOpacity,
    Dimensions,
    Image,
    BackHandler,
    Alert
} from 'react-native';

const { width, height } = Dimensions.get('window');

const arr = [1,2,3,4,5]
var conNum = 0;

export default class App extends Component {
    static navigationOptions = {
        title: 'Exercise',
    };
    constructor(props) {
        super(props);
        this.state = {
            arr : [1000,2,3,4,5],
            display: '',
            seconds: 4,
            indexState: 0,
            pause: false
        };
    }
    // componentDidMount(){ 
    //     for (let i in arr ) {
    //         setTimeout(() => {
    //             this.setState({
    //                 display: arr[i]
    //             });
    //         }, this.state.display * i );
    //     }
    // }

    // componentDidMount(){
    //     var index = 0;
    //     this.timer = setInterval(() => {
    //         this.setState({display: arr[index]});
    //         index = (index + 1)%(arr.length);
    //         this.setState({indexState: index})
    //     }, 2000*(arr[0]));
    // }
    // componentWillUnmount(){
    //     clearInterval(this.timer);
    // }

    componentDidMount(){
        arr.forEach((item , index) => {
            setTimeout(() => {
                this.setState({ display : item})
                const itemAsNo = Number(item)
                conNum = itemAsNo
                }, 2000*(index+2));
        })
    }

    render() {
        console.log(conNum.valueOf())
        return (
            <View style={{flex: 1 , justifyContent: 'center' , alignItems: 'center'}}> 
                <Text style={{fontSize: height * .2}} >{this.state.display}</Text>
            </View>
        );
    }
}