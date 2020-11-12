import axios from 'axios';
import {SELECT_LANGUAGE} from './types';
import { Alert} from 'react-native';

export const selectLanguage = val => {
  console.log('valvalval', val);

  return {
    type: SELECT_LANGUAGE,
    payload: val,
  };
};
