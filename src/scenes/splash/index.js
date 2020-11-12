import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Splash from './Splash';
import Login from '../../navigations/auth-navigator';
import {Provider} from 'react-redux';
import store from '../../store';
import {loadUser} from '../../actions/auth';

// import {withNavigation} from "react-navigation"

class Main extends Component {
  // componentDidMount(){
  //     console.log(this.props, "splash")
  // }
  constructor(props) {
    super(props);
    this.state = {currentScreen: 'Splash'};
    // console.log('start doing some tasks for about 3 seconds')
    setTimeout(() => {
      // console.log('Done some tasks for about 3 seconds')
      this.setState({currentScreen: 'Login'});
    }, 3000);
  }

  async componentDidMount() {
    let token = AsyncStorage.getItem('token');
    const route = this.props.navigation;

    this.setState({isLoading: false});

    setTimeout(() => {
      if (!token) {
        route.navigate('Auth');
      } else {
        route.navigate('App');
      }
    }, 3000);
  }

  render() {
    const {currentScreen} = this.state;
    let mainScreen = currentScreen === 'Splash' ? <Splash /> : <Login />;
    return <Provider store={store}>{mainScreen}</Provider>;
  }
}

export default Main;
