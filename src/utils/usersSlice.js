import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    nextUrl: null,
    error: null,
    isLoading: false,
    isFormLoading: false,
    showPlaceholder: true,
    showApiError: false,
    positions: [],
    positionsError: false,
    token: null,
    tokenError: false,
    isFormFilled: false,
    authorizedUser: {},
    showPlaceholderForAuthorizedUser: true,
    showCookiesPolicy: false,
  },
  reducers: {

    hideCookiesPolicy: (state) => {
      state.showCookiesPolicy = false;
    },
    showCookiesPolicy: (state) => {
      state.showCookiesPolicy = true;
    },

    clearLoadedUsers: (state) => {
      state.users = [];
      state.showPlaceholder = true;
    },

    hideUserPlaceholder: (state) => {
      state.showPlaceholderForAuthorizedUser = false;
    },
    startFormLoading: (state) => {
      state.isFormLoading = true;
    },
    clearUser: (state) => {
      state.authorizedUser = {};
    },
    setUserValues: (state, action) => {
      state.authorizedUser = action.payload;
    },
    setFormFilled: (state) => {
      state.isFormFilled = true;
    },
    setFormUnFilled: (state) => {
      state.isFormFilled = false;
    },
    startLoading: (state) => {
      state.isLoading = true;
    },

    usersSuccess: (state, action) => {
      state.users = action.payload.users;
      state.nextUrl = action.payload.nextUrl;
      state.isLoading = false;
      state.showPlaceholder = false;
    },

    usersError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    apiError: (state) => {
      state.showApiError = true;
    },

    positionsSuccess: (state, action) => {
      state.positions = action.payload.positions;
      // state.isLoading = false;
      // state.showPlaceholder=false;
    },
    positionsApiError: (state) => {
      state.positionsError = true;
    },

    tokenSuccess: (state, action) => {
      state.token = action.payload.token;
    },
    tokenApiError: (state) => {
      state.tokenError = true;
      state.isFormLoading = false;
    },

    usersAddMore: (state, action) => {
      state.isLoading = false;
      state.users.push(...action.payload.users);
      state.nextUrl = action.payload.nextUrl;
      state.showApiError = false;
    },
  },
});

const {
  startLoading,
  usersSuccess,
  usersAddMore,
  usersError,
  apiError,
  positionsSuccess,
  positionsApiError,
  tokenSuccess,
  tokenApiError,
  setFormFilled,
  setFormUnFilled,
  setUserValues,
  clearUser,
  startFormLoading,
  hideUserPlaceholder,
  clearLoadedUsers,
  showCookiesPolicy,
  hideCookiesPolicy,
} = usersSlice.actions;

export { clearLoadedUsers, showCookiesPolicy };

export const acceptCookiesPolicy = () => async (dispatch) => {
  dispatch(hideCookiesPolicy());
  localStorage.setItem('accept-cookies-policy', 'true');
};

export const hideAuthorizedPlaceholder = () => async (dispatch) => {
  dispatch(hideUserPlaceholder());
};

export const showApiError = () => async (dispatch) => {
  dispatch(apiError());
};

export const clearUserData = () => async (dispatch) => {
  dispatch(clearUser());
  localStorage.removeItem('user');
};

export const setUserDataFromLocalStorage = (data) => async (dispatch) => {
  dispatch(setUserValues(data));
  localStorage.setItem('user', JSON.stringify(data));
};

export const fetchAndSetUserData = (getUserInfo, userId) => async (dispatch) => {
  // dispatch(startLoading());
  try {
    const response = await getUserInfo(userId);
    const data = await response.json();
    dispatch(setUserValues(data));
    localStorage.setItem('user', JSON.stringify(data));
  } catch (error) {
    // dispatch(apiError());
    // dispatch(usersError(error.message));
  }
};

export const makeFormFilled = () => async (dispatch) => {
  dispatch(setFormFilled());
};

export const makeFormUnFilled = () => async (dispatch) => {
  dispatch(setFormUnFilled());
};

export const fetchToken = (getToken) => async (dispatch) => {
  dispatch(startFormLoading());
  try {
    const response = await getToken();
    const data = await response.json();
    dispatch(tokenSuccess(data));
  } catch (error) {
    dispatch(tokenApiError());
  }
};

export const fetchPositions = (getPositions) => async (dispatch) => {
  // dispatch(startLoading());
  try {
    const response = await getPositions();
    const data = await response.json();
    if (data.positions.length === 0) {
      throw Error('Position array is empty');
    }
    dispatch(positionsSuccess(data));
  } catch (error) {
    // console.log(error);
    dispatch(positionsApiError());
  }
};

export const fetchUsers = (getUsers, usersCount) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const response = await getUsers(usersCount);
    const data = await response.json();

    dispatch(usersSuccess(data));
  } catch (error) {
    dispatch(apiError());
    dispatch(usersError(error.message));
  }
};

export const fetchMoreUsers = (getUrl) => async (dispatch, getState) => {
  dispatch(startLoading());
  try {
    const url = getState().users.nextUrl;
    const response = await getUrl(url);
    const data = await response.json();
    dispatch(usersAddMore(data));
  } catch (error) {
    dispatch(apiError());
    dispatch(usersError(error.message));
  }
};


export const selectPlaceholderForAuthorizedUser = (state) => state.users.showPlaceholderForAuthorizedUser;
export const selectPlaceholder = (state) => state.users.showPlaceholder;
export const selectUsers = (state) => state.users.users;
export const selectError = (state) => state.users.error;
export const selectLoading = (state) => state.users.isLoading;
export const selectnextUrl = (state) => state.users.nextUrl;
export const selectApiError = (state) => state.users.showApiError;
export const selectToken = (state) => state.users.token;

export const selectPositions = (state) => state.users.positions;
export const selectPositionsError = (state) => state.users.positionsError;
export const selectFormFilled = (state) => state.users.isFormFilled;

export const selectAuthorizedUserData = (state) => state.users.authorizedUser;
export const selectLoadingForm = (state) => state.users.isFormLoading;
export const selectCookiePolicy = (state) => state.users.showCookiesPolicy;

export default usersSlice.reducer;
