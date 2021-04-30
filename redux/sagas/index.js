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
} from '../constants/actionTypes';
import {
  setScrollPosition,
  fetchCurrentUserFail,
  setCurrentUser,
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFail,
  addUsers,
  showUserBtnSpinner,
  hideUserBtnSpinner,
} from '../actions';
import {
  getScrollPosition,
} from '../reducers/ui';

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
function* onFetchCurrentUser({ payload }) {
  try {
    const response = yield call(fetch, `https://frontend-test-assignment-api.abz.agency/api/v1/users/${payload}`);
    if (!response.ok) throw new Error(`${response.status} ${response.status.text}`);

    const data = yield response.json();
    if (!data.success) throw new Error(data.message);

    yield put(setCurrentUser(data.user));
  } catch (error) {
    yield put(fetchCurrentUserFail(error));
  }
}

function* onFetchCurrentUserFail({ payload }) {
  yield console.log(payload);
}

function* onFetchUsers({ payload: currentLength }) {
  const numberToFetch = window.innerWidth < 600 ? 3 : 9;
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

function* onFetchUsersSFail({ payload: { error } }) {
  yield console.log(error);
  yield put(hideUserBtnSpinner());
}

export default function* rootSaga() {
  yield takeEvery(OPEN_SIDEDRAWER, onOpenSideDrawer);
  yield takeEvery(CLOSE_SIDEDRAWER, onCloseSideDrawer);
  yield takeLatest(FETCH_CURRENT_USER, onFetchCurrentUser);
  yield takeEvery(FETCH_CURRENT_USER_FAIL, onFetchCurrentUserFail);
  yield takeLatest(FETCH_USERS, onFetchUsers);
  yield takeEvery(FETCH_USERS_START, onFetchUsersStart);
  yield takeEvery(FETCH_USERS_SUCCESS, onFetchUsersSuccess);
  yield takeEvery(FETCH_USERS_FAIL, onFetchUsersSFail);
}
