import { combineReducers } from 'redux';

import ui from './ui';
import auth from './auth';
import users from './users';
// import signUp from './signUp';

export default combineReducers({
  ui,
  auth,
  users,
  // signUp,
});
