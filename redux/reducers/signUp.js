import {
  GET_POSITIONS_SUCCESS,
  GET_POSITIONS_FAIL,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_UP_CLEAR,
} from '../constants/actionTypes';

export const initialState = {
  isSignedUp: false,
  isSignUpActive: true,
  positions: [],
  globalError: '',
  errors: {},
};

export default function signUp(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSITIONS_SUCCESS:
      return { ...state, positions: [...payload] };
    case GET_POSITIONS_FAIL:
      return { ...state, isSignUpActive: false };
    case SIGN_UP_SUCCESS:
      return { ...state, isSignedUp: true };
    case SIGN_UP_FAIL: {
      return { ...state, errors: [...payload] };
    }
    case SIGN_UP_CLEAR:
      return { ...initialState };
    default:
      return state;
  }
}

export const getIsSignedUp = (state) => state.signUp.isSignedUp;
export const getIsSignUpActive = (state) => state.signUp.isSignUpActive;
export const getPositions = (state) => state.signUp.positions;
export const getErrors = (state) => (state.signUp.errors);
