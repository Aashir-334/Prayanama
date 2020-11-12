import axios from 'axios';
import {SUB_EXER_SUCCESS, SUB_EXER_FAIL} from './types';

//SUB_EXERCISE DOWNLOAD
export const sub_exer = ({name}) => async dispatch => {
  try {
    console.log('DOWNLOADDDDDDDD');
    const res = await axios.get(
      `http://ec2-18-218-255-66.us-east-2.compute.amazonaws.com/yoga/api/subExercise/download/${name}`,
    );
    console.warn('Success Download', res.data);
    dispatch({
      type: SUB_EXER_SUCCESS,
      payload: res.data[0].song.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);
    if (errors) {
      errors.forEach(error => Alert.alert('Error', error.msg));
    }
    dispatch({
      type: SUB_EXER_FAIL,
    });
  }
};
