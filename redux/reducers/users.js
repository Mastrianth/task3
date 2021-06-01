import {
  ADD_USERS,
  CLEAR_USERS,
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL, SHOW_USERS_PLACEHOLDER, HIDE_USERS_PLACEHOLDER,
} from '../constants/actionTypes';

export const initialState = {
  usersArr: [], apiUsersLength: 0, isInitialLoadingComplete: false, showUsersPlaceholder: true,
};

export default function users(state = initialState, action) {
  const { usersArr } = state;
  const { type, payload } = action;

  switch (type) {
    case FETCH_USERS_START: {
      const dummyUsers = Array(payload).fill({
        name: '',
        email: '',
        phone: '',
        position: '',
        avatarSrc: '',
        isLoaded: false,
      }).map((user) => ({ ...user, id: (Math.random() + 1) * 10000 }));
      return {
        ...state, usersArr: [...usersArr, ...dummyUsers],
      };
    }
    case FETCH_USERS_SUCCESS: {
      const { numberToFetch, apiUsersLength } = payload;

      return {
        ...state,
        usersArr: usersArr.slice(0, -numberToFetch),
        apiUsersLength,
        isInitialLoadingComplete: true,
      };
    }
    case FETCH_USERS_FAIL: {
      const { numberToFetch } = payload;
      return {
        ...state, usersArr: usersArr.slice(0, -numberToFetch),
      };
    }
    case ADD_USERS: {
      return {
        ...state,
        usersArr: [...usersArr, ...payload.map(({
          id, name, email, phone, position, photo,
        }) => ({
          id,
          name,
          email,
          phone,
          position,
          avatarSrc: photo,
          isLoaded: true,
        }))],
      };
    }
    case CLEAR_USERS: {
      return {
        ...initialState,
      };
    }
    case HIDE_USERS_PLACEHOLDER: {
      return {
        ...state, showUsersPlaceholder: false,
      };
    }
    default:
      return state;
  }
}

export const getUsers = (state) => ([...state.users.usersArr]);
export const getApiUsersLength = (state) => (state.users.apiUsersLength);
export const getIsInitialLoadingComplete = (state) => (state.users.isInitialLoadingComplete);

export const selectUsersPlaceholder = (state) => state.users.showUsersPlaceholder;
