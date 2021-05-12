import { call, put } from 'redux-saga/effects';

import {
  clearCurrentUser, fetchCurrentUserFail, setCurrentUser, setUserValues,
} from '../actions';

export function* onFetchCurrentUser({ payload }) {
  try {
    const response = yield call(fetch, `https://frontend-test-assignment-api.abz.agency/api/v1/users/${payload}`);
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);

    const data = yield response.json();
    if (!data.success) throw new Error(data.message);

    yield put(setCurrentUser(data.user));
    localStorage.setItem('user', JSON.stringify(data));
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
  yield put(setUserValues(data));
  localStorage.setItem('user', JSON.stringify(data));
}
