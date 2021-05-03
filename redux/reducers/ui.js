import {
  OPEN_SIDEDRAWER,
  CLOSE_SIDEDRAWER,
  SET_SCROLL_POSITION,
  SHOW_USER_BTN_SPINNER,
  HIDE_USER_BTN_SPINNER,
  PAGE_LOADED,
} from '../constants/actionTypes';

export const initialState = {
  isSideDrawerOpen: false,
  isUserBtnSpinnerActive: false,
  scrollPosition: 0,
  isPageLoaded: false,
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
    default:
      return state;
  }
}

export const getIsPageLoaded = (state) => state.ui.isPageLoaded;
export const getIsSideDrawerOpen = (state) => state.ui.isSideDrawerOpen;
export const getScrollPosition = (state) => state.ui.scrollPosition;
export const getIsUserBtnSpinnerActive = (state) => state.ui.isUserBtnSpinnerActive;
