import axios from 'axios';
import {SONGS_SUCCESS, SONGS_FAIL} from './types';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import ErrorHandle from './ErrorHandle';

// UPDATE TARGET CATEGORY
export const getSongs = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': await AsyncStorage.getItem('token'),
    },
  };
  try {
    const res = await axios.get(
      'http://ec2-18-218-255-66.us-east-2.compute.amazonaws.com/yoga/api/song',
    );

    dispatch({
      type: SONGS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log('errerr', err);

    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => Alert.alert('Error', error.msg));
    }
    dispatch({
      type: SONGS_FAIL,
    });
  }
};
