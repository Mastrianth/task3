import {
  SET_CURRENT_USER,
} from '../constants/actionTypes';

export const initialState = {
  currentUser: {
    name: '',
    email: '',
    avatarSrc: '',
    isLoaded: false,
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
        },
      };
    }
    default:
      return state;
  }
}

export const getCurrentUser = (state) => (state.auth.currentUser);
