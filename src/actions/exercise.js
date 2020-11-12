import axios from 'axios';
import {EXERCISE_SUCCESS, EXERCISE_FAIL} from './types';

//SUB_EXERCISE DOWNLOAD
export const getExercise = () => async dispatch => {
  try {
    const res = await axios.get(
      `http://ec2-18-218-255-66.us-east-2.compute.amazonaws.com/yoga/api/exercise`,
    );
    dispatch({
      type: EXERCISE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    console.log('getExercise', errors);
    if (errors) {
      errors.forEach(error => Alert.alert('Error', error.msg));
    }
    dispatch({
      type: EXERCISE_FAIL,
    });
  }
};
