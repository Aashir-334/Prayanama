import axios from 'axios';
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
  EDIT_CATEGORY_FAIL,
  EDIT_CATEGORY_SUCCESS,
  EDIT_TARGET_SUCCESS,
  EDIT_TARGET_FAIL,
  SELECT_LANGUAGE,
} from './types';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import ErrorHandle from './ErrorHandle';

//REGISTER USER
export const register = ({
  email,
  password,
  name,
  age,
  gender,
  weight,
  heights,
  category,
  targetCategory,
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    email,
    password,
    name,
    age,
    gender,
    weight,
    height: heights,
    archtypes: category,
    targetCategory,
  });
  try {
    const res = await axios.post(
      'http://ec2-18-218-255-66.us-east-2.compute.amazonaws.com/yoga/api/users',
      body,
      config,
    );
    console.warn('Success', res.data.token);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => Alert.alert('Error', error.msg));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

//LOGIN USER
export const login = ({email, password}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({email, password});

  try {
    const res = await axios.post(
      'http://ec2-18-218-255-66.us-east-2.compute.amazonaws.com/yoga/api/auth',
      body,
      config,
    );
    console.warn('Login Success', res);
    AsyncStorage.setItem('token', res.data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => Alert.alert('Error', error.msg));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Load User
export const loadUser = () => async dispatch => {
  try {
    const headers = {
      'x-auth-token': await AsyncStorage.getItem('token'),
    };
    console.log('headersheaders', headers);
    const res = await axios.get(
      'http://ec2-18-218-255-66.us-east-2.compute.amazonaws.com/yoga/api/auth',
      {headers: headers},
    );
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => Alert.alert('Error', error.msg));
    }
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//Logout
export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT,
  });
  Alert.alert('Logout', 'You are Logout now. See you again!');
};

//User Profile Edit
export const profile_edit = ({
  email,
  name,
  age,
  gender,
  weight,
  height,
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': await AsyncStorage.getItem('token'),
    },
  };

  console.log('resresresres11222222*', {email, name});
  const body = JSON.stringify({
    email,
    name,
    age,
    gender,
    weight,
    height,
  });
  try {
    const res = await axios.post(
      'http://ec2-18-218-255-66.us-east-2.compute.amazonaws.com/yoga/api/users/edit',
      body,
      config,
    );

    dispatch({
      type: PROFILE_EDIT_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => Alert.alert('Error', error.msg));
    }
    dispatch({
      type: PROFILE_EDIT_FAIL,
    });
  }
};

// UPDATE ARCHTYPE
export const updateArchType = ({targetCategory}) => async dispatch => {
  console.log('targetCategory', targetCategory);

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': await AsyncStorage.getItem('token'),
    },
  };

  const body = JSON.stringify({
    targetCategory,
  });
  try {
    const res = await axios.post(
      // 'http://ec2-18-218-255-66.us-east-2.compute.amazonaws.com/yoga/api/users/update-archtype',

      // "http://192.168.1.108:3000/yoga/api/users/update-archtype",
      'http://ec2-18-218-255-66.us-east-2.compute.amazonaws.com/yoga/api/users/update-archtype',
      body,
      config,
    );

    console.log('targetCategory', res);

    dispatch({
      type: EDIT_TARGET_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    console.log('errerrerr', err);

    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => Alert.alert('Error', error.msg));
    }
    dispatch({
      type: EDIT_TARGET_SUCCESS,
    });
  }
};

// UPDATE TARGET CATEGORY
export const updateCategory = ({targetCategory}) => async dispatch => {
  console.log('updateCategoryupdateCategory', targetCategory);

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': await AsyncStorage.getItem('token'),
    },
  };
  const body = JSON.stringify({
    targetCategory,
  });
  try {
    const res = await axios.post(
      // 'http://ec2-18-218-255-66.us-east-2.compute.amazonaws.com/yoga/api/users/update-target',
      'http://ec2-18-218-255-66.us-east-2.compute.amazonaws.com/yoga/api/users/update-target',
      body,
      config,
    );

    dispatch({
      type: EDIT_CATEGORY_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    console.log('errerr', err);
    // if (error.response) {
    //   // Request made and server responded
    //   console.log(error.response.data);
    //   console.log(error.response.status);
    //   console.log(error.response.headers);
    // } else if (error.request) {
    //   // The request was made but no response was received
    //   console.log(error.request);
    // } else {
    //   // Something happened in setting up the request that triggered an Error
    //   console.log('Error', error.message);
    // }

    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => Alert.alert('Error', error.msg));
    }
    dispatch({
      type: EDIT_CATEGORY_FAIL,
    });
  }
};
