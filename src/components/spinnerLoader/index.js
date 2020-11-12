import React, {Component} from 'react';
import {ActivityIndicator, Image, Text, View, AsyncStorage} from 'react-native';
import PropTypes from 'prop-types';

import Spinner from 'react-native-loading-spinner-overlay';

export default class SpinnerLoader extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
  };

  static defaultProps = {
    isLoading: false,
  };

  render() {
    const {isLoading} = this.props;
    return (
      <View style={{justifyContent: 'center'}}>
        <Spinner
          visible={isLoading}
          color={'white'}
          textContent={'Loading...'}
          textStyle={{color: 'white'}}
          size="normal"
          customIndicator={<ActivityIndicator size="large" color="white" />} //#0000FF
        />
      </View>
    );
  }
}
