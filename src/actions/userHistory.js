import axios from 'axios';
import {
  USER_LAST_EXER_SUCCESS,
  USER_LAST_EXER_FAIL,
  INSERT_USER_HISTORY_SUCCESS,
  INSERT_USER_HISTORY_FAIL,
  HISTORY_LIST,
} from './types';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//USER_LAST_EXERCISE
export const last_exer = () => async dispatch => {
  const headers = {
    'x-auth-token': await AsyncStorage.getItem('token'),
  };

  try {
    const res = await axios.get(
      'http://ec2-18-218-255-66.us-east-2.compute.amazonaws.com/yoga/api/history/last',
      {headers: headers},
    );
 
    dispatch({
      type: USER_LAST_EXER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);
    if (errors) {
      errors.forEach(error => Alert.alert('Error', error.msg));
    }
    dispatch({
      type: USER_LAST_EXER_FAIL,
    });
  }
};
//USER_EXERCISES_HISTORY
export const user_exer_history = () => async dispatch => {
  const headers = {
    'x-auth-token': await AsyncStorage.getItem('token'),
  };

  try {
    const res = await axios.get(
      'http://ec2-18-218-255-66.us-east-2.compute.amazonaws.com/yoga/api/history/single',
      {headers: headers},
    );
 
    dispatch({
      type: HISTORY_LIST,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);
    if (errors) {
      errors.forEach(error => Alert.alert('Error', error.msg));
    }
    dispatch({
      type: USER_HISTORY_EXER_FAIL,
    });
  }
};
//insert into user exercise history
export const user_last_exer = ({
  subExerciseName,
  exerciseMinutes,
  exerciseSeconds,
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': await AsyncStorage.getItem('token'),
    },
  };
  const body = JSON.stringify({
    subExerciseName,
    exerciseMinutes,
    exerciseSeconds,
  });

  try {
    const res = await axios.post(
      'http://ec2-18-218-255-66.us-east-2.compute.amazonaws.com/yoga/api/history',
      body,
      config,
    );
    console.warn('Successfully inserted');
    dispatch({
      type: INSERT_USER_HISTORY_SUCCESS,
      payload: res.data,
    });
    dispatch(last_exer());
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(err);
    if (errors) {
      errors.forEach(error => Alert.alert('Error', error.msg));
    }
    dispatch({
      type: INSERT_USER_HISTORY_FAIL,
    });
  }
};
