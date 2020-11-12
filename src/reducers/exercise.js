import {EXERCISE_SUCCESS, EXERCISE_FAIL} from '../actions/types';

const initialState = {
  exercises: [],
  isLoading: true,
};

export default function(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case EXERCISE_SUCCESS:
      return {
        ...state,
        exercises: payload,
        isLoading: false,
      };
    case EXERCISE_FAIL:
      return {
        ...state,
        exercises: false,
        audio: null,
      };
    default:
      return state;
  }
}
