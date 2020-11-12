import {AsyncStorage} from 'react-native';
import {SUB_EXER_SUCCESS, SUB_EXER_FAIL} from '../actions/types';

const initialState = {
  audio: null,
  isLoading: true,
};

export default function(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case SUB_EXER_SUCCESS:
      return {
        ...state,
        audio: payload,
        isLoading: false,
      };
    case SUB_EXER_FAIL:
      return {
        ...state,
        isLoading: false,
        audio: null,
      };
    default:
      return state;
  }
}
