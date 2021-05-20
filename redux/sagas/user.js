import { call, put } from 'redux-saga/effects';

import {
  clearCurrentUser, fetchCurrentUserFail, setCurrentUser, setUserValues,
} from '../actions';

export function* onFetchCurrentUser({ payload }) {
  try {
    const response = yield call(fetch, `https://test2021backend-yaroslav-task5.abztrainee.com/api/v1/users/${payload}`);
    // if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);

    const data = yield response.json();
    console.log(data.data);
    // if (!data.status) throw new Error(data.message);
    localStorage.setItem('user', JSON.stringify(data.data));
    yield put(setCurrentUser(data.data));
  } catch (error) {
    yield put(fetchCurrentUserFail(error));
  }
}

export function* onFetchCurrentUserFail({ payload }) {
  yield console.log(payload);
}

export function* clearUserData() {
  yield put(clearCurrentUser());
  localStorage.removeItem('user');
}

export function* setUserDataFromLocalStorage(data) {
  yield put(setUserValues(data.data));
  localStorage.setItem('user', JSON.stringify(data.data));
}

// export function* fetchAndSetUserData(getUserInfo, userId) {
//   try {
//     const response = yield call(getUserInfo(userId));
//     const data = response.json();
//     yield put(setUserValues(data));
//     localStorage.setItem('user', JSON.stringify(data));
//   } catch (error) {
//
//   }
// }
