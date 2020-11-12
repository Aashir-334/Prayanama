import {combineReducers} from 'redux';

import auth from './auth';
import userHistory from './userHistory';
import subExercise from './subExercise';
import language from './language';
import exercise from './exercise';
import songs from './songs';

export default combineReducers({
  auth,
  userHistory,
  subExercise,
  language,
  exercise,
  songs,
});
