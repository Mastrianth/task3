import {
  call, put, takeEvery, takeLatest, select,
} from 'redux-saga/effects';
import ReactTooltip from 'react-tooltip';

import {
  OPEN_SIDEDRAWER,
  CLOSE_SIDEDRAWER,
  FETCH_CURRENT_USER,
  FETCH_CURRENT_USER_FAIL,
  FETCH_USERS,
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  GET_POSITIONS,
  SIGN_UP_SUCCESS,
} from '../constants/actionTypes';
import {
  setScrollPosition,
  fetchCurrentUserFail,
  setCurrentUser,
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFail,
  addUsers,
  clearUsers,
  showUserBtnSpinner,
  hideUserBtnSpinner,
  showSuccessPopup,
  getPositionsStart,
  getPositionsSuccess,
  getPositionsFail,
} from '../actions';
import {
  getScrollPosition,
} from '../reducers/ui';
import { onFetchCurrentUser, onFetchCurrentUserFail } from './user';

function* onOpenSideDrawer() {
  const scrollPosition = window.pageYOffset;
  const mainEl = document.querySelector('.main-content');
  mainEl.classList.add('show-overlay');
  mainEl.style.top = `${-scrollPosition}px`;
  yield put(setScrollPosition(scrollPosition));
}
function* onCloseSideDrawer() {
  const scrollPosition = yield select((state) => getScrollPosition(state));
  const mainEl = document.querySelector('.main-content');
  mainEl.classList.remove('show-overlay');
  mainEl.style.top = 0;
  yield call(window.scrollTo, 0, scrollPosition);
}

function* onFetchUsers({ payload: currentLength, imperativeCount }) {
  let numberToFetch;
  if (imperativeCount) {
    numberToFetch = imperativeCount;
  } else {
    numberToFetch = window.innerWidth < 600 ? 3 : 9;
  }

  yield put(fetchUsersStart(numberToFetch));

  try {
    const page = (currentLength / numberToFetch) + 1;

    const response = yield call(fetch, `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${numberToFetch}`);
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);

    const data = yield response.json();
    if (!data.success) throw new Error(data.message);

    yield put(fetchUsersSuccess(numberToFetch, data.total_users));
    yield put(addUsers(data.users));
  } catch (error) {
    yield put(fetchUsersFail(error, numberToFetch));
  }
}

function* onFetchUsersStart() {
  yield put(showUserBtnSpinner());
}

function* onFetchUsersSuccess() {
  yield put(hideUserBtnSpinner());
  yield setTimeout(ReactTooltip.rebuild);
}

function* onFetchUsersFail({ error }) {
  yield console.log(error);
  yield put(hideUserBtnSpinner());
}

function* onGetPositions() {
  try {
    yield put(getPositionsStart());

    const response = yield call(fetch, 'https://frontend-test-assignment-api.abz.agency/api/v1/positions');
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);

    const data = yield response.json();
    if (!data.success) throw new Error(data.message);

    const positions = Object.values(data.positions).map(({ id, name }) => ({
      value: id,
      title: name,
    }));

    yield put(getPositionsSuccess(positions));
  } catch (error) {
    console.log(error);
    yield put(getPositionsFail());
  }
}

function* onSignUpSuccess() {
  yield put(showSuccessPopup());
  yield put(clearUsers());
}

export default function* rootSaga() {
  yield takeEvery(OPEN_SIDEDRAWER, onOpenSideDrawer);
  yield takeEvery(CLOSE_SIDEDRAWER, onCloseSideDrawer);
  yield takeLatest(FETCH_CURRENT_USER, onFetchCurrentUser);
  yield takeEvery(FETCH_CURRENT_USER_FAIL, onFetchCurrentUserFail);
  yield takeLatest(FETCH_USERS, onFetchUsers);
  yield takeEvery(FETCH_USERS_START, onFetchUsersStart);
  yield takeEvery(FETCH_USERS_SUCCESS, onFetchUsersSuccess);
  yield takeEvery(FETCH_USERS_FAIL, onFetchUsersFail);
  yield takeLatest(GET_POSITIONS, onGetPositions);
  yield takeEvery(SIGN_UP_SUCCESS, onSignUpSuccess);
}
