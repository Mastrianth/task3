import { call, put } from 'redux-saga/effects';

import { fetchCurrentUserFail, setCurrentUser } from '../actions';

export function* onFetchCurrentUser({ payload }) {
  try {
    const response = yield call(fetch, `https://frontend-test-assignment-api.abz.agency/api/v1/users/${payload}`);
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);

    const data = yield response.json();
    if (!data.success) throw new Error(data.message);

    yield put(setCurrentUser(data.user));
  } catch (error) {
    yield put(fetchCurrentUserFail(error));
  }
}

export function* onFetchCurrentUserFail({ payload }) {
  yield console.log(payload);
}
