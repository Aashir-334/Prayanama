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
import { AsyncStorage } from 'react-native';

const initalState = {
  token: AsyncStorage.getItem('token'),
  loading: true,
  isAuthenticated: null,
  user: null,
  isLogged: false,
};

export default function (state = initalState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      AsyncStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case LOGIN_SUCCESS:
      AsyncStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        isLogged: true,
      };
    case USER_LOADED:
      console.log('payloadpayloadpayload', payload);
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        loading: false,
      };
    case PROFILE_EDIT_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      };
    case EDIT_CATEGORY_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      };

    case EDIT_TARGET_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case PROFILE_EDIT_FAIL:
    case AUTH_ERROR:
      AsyncStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    case LOGOUT:
      AsyncStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
}
