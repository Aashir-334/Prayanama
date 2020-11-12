import React, { Component } from "react";
import { Text } from "react-native";

import Splash from "./Splash";
import Login from "../navigations/app-navigator";
// import Hello from "./hello";


// import {withNavigation} from "react-navigation"

 class Main extends Component {

    constructor(props){
        super(props);
        this.state = { 
            currentScreen:'Splash',
            route:null
        };
        // console.log('start doing some tasks for about 3 seconds')
        setTimeout(() => {
            // console.log('Done some tasks for about 3 seconds')
            this.setState({currentScreen:'Login'})
        }, 10000)
    }
    componentDidMount(){
        var rou = () => this.props.navigation.navigate('Paranyama')
       this.setState({route:rou}) 
    }
    
    render(){
        const  {currentScreen,route} = this.state 
        let mainScreen = currentScreen === 'Splash' ? <Splash /> : <Login />
        return mainScreen
    }
}

export default Main;
