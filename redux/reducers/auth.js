import {
  SET_CURRENT_USER,
  CLEAR_CURRENT_USER,
} from '../constants/actionTypes';

export const initialState = {
  currentUser: {
    name: '',
    email: '',
    avatarSrc: '',
    isLoaded: false,
    showButton: false,
  },
};

export default function auth(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_CURRENT_USER: {
      const { name, email, photo: avatarSrc } = payload;
      return {
        ...state,
        currentUser: {
          name,
          email,
          avatarSrc,
          isLoaded: true,
          showButton: true,
        },
      };
    }
    case CLEAR_CURRENT_USER: {
      return {
        ...state,
        currentUser: {
          name: '',
          email: '',
          avatarSrc: '',
          isLoaded: false,
          showButton: false,
        },
      };
    }
    default:
      return state;
  }
}

export const getCurrentUser = (state) => (state.auth.currentUser);
