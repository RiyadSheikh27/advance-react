import { call, put, takeLatest } from 'redux-saga/effects';

const fetchUsersApi = () =>
  fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Worker saga: আসল কাজ করে
function* fetchUsersWorker() {
  try {
    const users = yield call(fetchUsersApi);
    yield put({ type: 'FETCH_USERS_SUCCESS', payload: users });
  } catch (err) {
    yield put({ type: 'FETCH_USERS_FAILURE', error: err.message });
  }
}

// Watcher saga: action এর জন্য অপেক্ষা করে
export default function* usersWatcher() {
  yield takeLatest('FETCH_USERS_REQUEST', fetchUsersWorker);
}