import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  USER_LOADED,
  LOGOUT,
  PROFILE_EDIT_SUCCESS,
  PROFILE_EDIT_FAIL,
  EDIT_TARGET_SUCCESS,
  EDIT_TARGET_FAIL,
  EDIT_CATEGORY_SUCCESS,
  EDIT_CATEGORY_FAIL,
  SELECT_LANGUAGE,
} from '../actions/types';
import {AsyncStorage} from 'react-native';

import {languages} from '../language/language';

const initalState = languages.en;

export default function(state = initalState, action) {
  const {type, payload} = action;
  switch (type) {
    case SELECT_LANGUAGE:
      return action.payload;

    default:
      return state;
  }
}
