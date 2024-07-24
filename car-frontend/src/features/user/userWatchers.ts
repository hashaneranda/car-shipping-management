import { takeLatest } from 'redux-saga/effects';

//actions
import * as userSlice from './userSlice';

//saga
import * as userSaga from './userSaga';

export default function* watchers() {
  yield takeLatest(userSlice.registerUser.type, userSaga.registerUser);
  yield takeLatest(userSlice.loginUser.type, userSaga.loginUser);
}
