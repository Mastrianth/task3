import {
  PAGE_LOADED,
  OPEN_SIDEDRAWER,
  CLOSE_SIDEDRAWER,
  SET_SCROLL_POSITION,
  SHOW_USER_BTN_SPINNER,
  HIDE_USER_BTN_SPINNER,
  SHOW_SUCCESS_POPUP,
  HIDE_SUCCESS_POPUP,
} from '../constants/actionTypes';

export const initialState = {
  isPageLoaded: false,
  isSideDrawerOpen: false,
  isUserBtnSpinnerActive: false,
  scrollPosition: 0,
  isSuccessPopupActive: false,
  showCookiesPolicy: false,
  showApiError: false,
};

export default function ui(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PAGE_LOADED:
      return { ...state, isPageLoaded: true };
    case OPEN_SIDEDRAWER:
      return { ...state, isSideDrawerOpen: true };
    case CLOSE_SIDEDRAWER:
      return { ...state, isSideDrawerOpen: false };
    case SET_SCROLL_POSITION:
      return { ...state, scrollPosition: payload };
    case SHOW_USER_BTN_SPINNER:
      return { ...state, isUserBtnSpinnerActive: true };
    case HIDE_USER_BTN_SPINNER:
      return { ...state, isUserBtnSpinnerActive: false };
    case SHOW_SUCCESS_POPUP:
      return { ...state, isSuccessPopupActive: true };
    case HIDE_SUCCESS_POPUP:
      return { ...state, isSuccessPopupActive: false };
    default:
      return state;
  }
}

export const getIsPageLoaded = (state) => state.ui.isPageLoaded;
export const getIsSideDrawerOpen = (state) => state.ui.isSideDrawerOpen;
export const getScrollPosition = (state) => state.ui.scrollPosition;
export const getIsUserBtnSpinnerActive = (state) => state.ui.isUserBtnSpinnerActive;
export const getIsSuccessPopupActive = (state) => state.ui.isSuccessPopupActive;
export const hideCookiesPolicy = (state) => state.ui.showCookiesPolicy(false);
export const showCookiesPolicy = (state) => state.ui.showCookiesPolicy(true);
