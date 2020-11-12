import {
  SONGS_SUCCESS,
  SONGS_FAIL,
  EXERCISE_SUCCESS,
  EXERCISE_FAIL,
} from '../actions/types';

const initialState = {
  songs: null,
  isLoading: true,
};

export default function(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case SONGS_SUCCESS:
      return {
        ...state,
        songs: payload,
        isLoading: false,
      };
    case SONGS_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
