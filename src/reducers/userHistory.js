import {AsyncStorage} from 'react-native';
import {
  USER_LAST_EXER_SUCCESS,
  USER_LAST_EXER_FAIL,
  INSERT_USER_HISTORY_SUCCESS,
  INSERT_USER_HISTORY_FAIL,
} from '../actions/types';

const initialState = {
  token: AsyncStorage.getItem('token'),
  history: null,
  isLoading: true,
};

export default function(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case USER_LAST_EXER_SUCCESS:
      return {
        ...state,
        history: payload,
        isLoading: false,
      };
    case INSERT_USER_HISTORY_SUCCESS:
      return {
        ...state,
        ...payload,
        isLoading: false,
      };
    case USER_LAST_EXER_FAIL:
    case INSERT_USER_HISTORY_FAIL:
      AsyncStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isLoading: false,
        history: null,
      };
    default:
      return state;
  }
}
