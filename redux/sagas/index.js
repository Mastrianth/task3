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
  SHOW_COOKIES_POLICY,
  HIDE_COOKIES_POLICY,
  SET_USERS_VALUES,
  CLEAR_USERS,
  SET_FORM_FILLED,
  SET_FORM_UNFILLED,
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
  hideCookiesPolicy,
  apiError,
  showCookiesPolicy, setFormFilled, setFormUnFilled, showApiError, showPositionsError,
} from '../actions';
import {
  getScrollPosition, selectCookiesPolicy,
} from '../reducers/ui';
import {
  onFetchCurrentUser,
  onFetchCurrentUserFail,
  clearUserData,
  setUserDataFromLocalStorage,
} from './user';

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
    numberToFetch = window.matchMedia('(max-width: 599px)').matches
      ? 3 : window.matchMedia('(max-width: 900px)').matches ? 6 : 9;
  }

  yield put(fetchUsersStart(numberToFetch));

  try {
    const page = (currentLength / numberToFetch) + 1;

    // const response = yield call(fetch, `https://test2021backend-yaroslav-task5.abztrainee.com/api/v1/users?page=${Math.round(page)}&limit=${numberToFetch}`);
    // if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    // const data = yield response.json();
    // if (!data.status) throw new Error(data.data.message);
    //
    // yield put(fetchUsersSuccess(numberToFetch, data.total_models));
    // yield put(addUsers(data.data.data));

    const response = yield call(fetch, `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${Math.round(page)}&count=${numberToFetch}`);
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);

    const data = yield response.json();
    if (!data.success) throw new Error(data.message);

    yield put(fetchUsersSuccess(numberToFetch, data.total_users));
    yield put(addUsers(data.users));
  } catch (error) {
    yield put(fetchUsersFail(error, numberToFetch));
    yield put(showApiError());
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

    //  const response = yield call(fetch, 'https://test2021backend-yaroslav-task5.abztrainee.com/api/v1/positions');
    //  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    //
    //  const data = yield response.json();
    // if (!data.status) throw new Error(data.data.message);
    //  const positions = Object.values(data.data.data).map(({ id, name }) => ({
    //    value: id,
    //    title: name,
    //  }));

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
    yield put(showApiError());
    yield put(showPositionsError());
  }
}

function* onSignUpSuccess() {
  // yield put(showSuccessPopup());
  yield put(clearUsers());
}

function* popUpActive() {
  yield put(showSuccessPopup());
}

function* onCookiesPolicy() {
  yield put(hideCookiesPolicy());
  localStorage.setItem('accept-cookies-policy', 'false');
}

function* acceptCookiesPolicy() {
  yield put(selectCookiesPolicy());
  localStorage.setItem('accept-cookies-policy', 'true');
}

function* makeFormFilled() {
  yield put(setFormFilled());
}

function* makeFormUnFilled() {
  yield put(setFormUnFilled());
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
  yield takeEvery(SHOW_COOKIES_POLICY, acceptCookiesPolicy);
  yield takeEvery(HIDE_COOKIES_POLICY, onCookiesPolicy);
  yield takeLatest(SET_USERS_VALUES, onFetchCurrentUser);
  yield takeEvery(CLEAR_USERS, clearUserData);
}
