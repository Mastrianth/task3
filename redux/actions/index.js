import {
  PAGE_LOADED,
  OPEN_SIDEDRAWER,
  CLOSE_SIDEDRAWER,
  SET_SCROLL_POSITION,
  SHOW_USER_BTN_SPINNER,
  HIDE_USER_BTN_SPINNER,
  SHOW_SUCCESS_POPUP,
  HIDE_SUCCESS_POPUP,

  FETCH_CURRENT_USER,
  FETCH_CURRENT_USER_FAIL,
  SET_CURRENT_USER,

  FETCH_USERS,
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  ADD_USERS,
  CLEAR_USERS,

  GET_POSITIONS,
  GET_POSITIONS_START,
  GET_POSITIONS_SUCCESS,
  GET_POSITIONS_FAIL,
  SIGN_UP,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_UP_CLEAR,
  CLEAR_CURRENT_USER,
  HIDE_COOKIES_POLICY,
  SHOW_COOKIES_POLICY,
  SET_USERS_VALUES,
  SET_FORM_FILLED,
  SET_FORM_UNFILLED,
  SET_API_ERROR,
  HIDE_API_ERROR,
  SHOW_API_ERROR,
  SHOW_POSITIONS_ERROR,
  CHECK_FORM_FILLED,
  HIDE_USER_PLACEHOLDER,
  SHOW_USERS_PLACEHOLDER,
  HIDE_USERS_PLACEHOLDER
} from "../constants/actionTypes";

export const pageLoaded = () => ({ type: PAGE_LOADED });
export const openSideDrawer = () => ({ type: OPEN_SIDEDRAWER });
export const closeSideDrawer = () => ({ type: CLOSE_SIDEDRAWER });
export const setScrollPosition = (scrollPosition) => ({
  type: SET_SCROLL_POSITION,
  payload: scrollPosition,
});
export const showUserBtnSpinner = () => ({ type: SHOW_USER_BTN_SPINNER });
export const hideUserBtnSpinner = () => ({ type: HIDE_USER_BTN_SPINNER });
export const showSuccessPopup = () => ({ type: SHOW_SUCCESS_POPUP });
export const hideSuccessPopup = () => ({ type: HIDE_SUCCESS_POPUP });

export const fetchCurrentUser = (id) => ({ type: FETCH_CURRENT_USER, payload: id });
export const fetchCurrentUserFail = (error) => ({ type: FETCH_CURRENT_USER_FAIL, payload: error });
export const setCurrentUser = (user) => ({ type: SET_CURRENT_USER, payload: user });
export const clearCurrentUser = () => ({ type: CLEAR_CURRENT_USER });

export const fetchUsers = (currentLength, imperativeCount) => ({
  type: FETCH_USERS,
  payload: currentLength,
  imperativeCount,
});
export const fetchUsersStart = (numberToFetch) => ({
  type: FETCH_USERS_START,
  payload: numberToFetch,
});
export const fetchUsersSuccess = (numberToFetch, apiUsersLength) => ({
  type: FETCH_USERS_SUCCESS,
  payload: { numberToFetch, apiUsersLength },
});
export const fetchUsersFail = (error, numberToFetch) => ({
  type: FETCH_USERS_FAIL,
  payload: { error, numberToFetch },
});
export const addUsers = (users) => ({ type: ADD_USERS, payload: users });
export const clearUsers = () => ({ type: CLEAR_USERS });

export const getPositions = () => ({ type: GET_POSITIONS });
export const getPositionsStart = () => ({ type: GET_POSITIONS_START });
export const getPositionsSuccess = (positions) => ({
  type: GET_POSITIONS_SUCCESS,
  payload: positions,
});
export const getPositionsFail = () => ({ type: GET_POSITIONS_FAIL });
export const signUp = (formData) => ({ type: SIGN_UP, payload: formData });
export const signUpStart = () => ({ type: SIGN_UP_START });
export const signUpSuccess = () => ({ type: SIGN_UP_SUCCESS });
export const signUpFail = (errors) => ({ type: SIGN_UP_FAIL, payload: errors });
export const signUpClear = () => ({ type: SIGN_UP_CLEAR });

export const selectAuthorizedUserData = (state) => state.auth.currentUser;

export const hideCookiesPolicy = () => ({ type: HIDE_COOKIES_POLICY });
export const showCookiesPolicy = () => ({ type: SHOW_COOKIES_POLICY });
export const setUserValues = (data) => ({ type: SET_USERS_VALUES, payload: data });
export const setFormFilled = () => ({ type: SET_FORM_FILLED });
export const setFormUnFilled = () => ({ type: SET_FORM_UNFILLED });
export const apiError = () => ({ type: SET_API_ERROR });
export const hideApiError = () => ({ type: HIDE_API_ERROR });
export const showApiError = () => ({ type: SHOW_API_ERROR });
export const showSignUpPopUp = () => ({ type: SHOW_SUCCESS_POPUP });

export const showPositionsError = () => ({ type: SHOW_POSITIONS_ERROR });

export const checkFormFilled = () => ({ type: CHECK_FORM_FILLED });

export const hideUserPlaceholder = () => ({ type: HIDE_USER_PLACEHOLDER });

export const hideUsersPlaceholder = () => ({ type: HIDE_USERS_PLACEHOLDER });
