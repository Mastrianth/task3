import {
  OPEN_SIDEDRAWER,
  CLOSE_SIDEDRAWER,
  SET_SCROLL_POSITION,
  SHOW_USER_BTN_SPINNER,
  HIDE_USER_BTN_SPINNER,

  FETCH_CURRENT_USER,
  FETCH_CURRENT_USER_FAIL,
  SET_CURRENT_USER,

  FETCH_USERS,
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  ADD_USERS,
  CLEAR_USERS,
} from '../constants/actionTypes';

export const openSideDrawer = () => ({ type: OPEN_SIDEDRAWER });
export const closeSideDrawer = () => ({ type: CLOSE_SIDEDRAWER });
export const setScrollPosition = (scrollPosition) => ({
  type: SET_SCROLL_POSITION,
  payload: scrollPosition,
});
export const showUserBtnSpinner = () => ({ type: SHOW_USER_BTN_SPINNER });
export const hideUserBtnSpinner = () => ({ type: HIDE_USER_BTN_SPINNER });

export const fetchCurrentUser = (id) => ({ type: FETCH_CURRENT_USER, payload: id });
export const fetchCurrentUserFail = (error) => ({ type: FETCH_CURRENT_USER_FAIL, payload: error });
export const setCurrentUser = (user) => ({ type: SET_CURRENT_USER, payload: user });

export const fetchUsers = (currentLength) => ({
  type: FETCH_USERS,
  payload: currentLength,
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
