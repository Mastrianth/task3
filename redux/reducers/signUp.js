import {
  GET_POSITIONS_SUCCESS,
  GET_POSITIONS_FAIL,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_UP_CLEAR, SET_FORM_FILLED, SET_FORM_UNFILLED, SET_API_ERROR, SHOW_POSITIONS_ERROR
} from "../constants/actionTypes";

export const initialState = {
  isSignedUp: false,
  isSignUpActive: true,
  positions: [],
  globalError: '',
  errors: {},
  isFormLoading: false,
  showApiError: false,
  isFormFilled: false,
  showPositionsError: false,
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
    case SET_FORM_FILLED:
      return { ...state, isFormFilled: true };
    case SET_FORM_UNFILLED:
      return { ...state, isFormFilled: false };
    case SET_API_ERROR:
      return { ...state, showApiError: true };
    case SHOW_POSITIONS_ERROR:
      return { ...state, showPositionsError: true };
    default:
      return state;
  }
}

export const getIsSignedUp = (state) => state.signUp.isSignedUp;
export const getIsSignUpActive = (state) => state.signUp.isSignUpActive;
export const getPositions = (state) => state.signUp.positions;
export const getErrors = (state) => (state.signUp.errors);
export const selectFormFilled = (state) => (state.signUp.isFormFilled);
export const startFormLoading = (state) => (state.signUp.isFormLoading(true));
export const selectApiError = (state) => state.signUp.showApiError;

export const selectPositionsError = (state) => state.signUp.showPositionsError;
