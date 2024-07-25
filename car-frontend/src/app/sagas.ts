import { fork } from 'redux-saga/effects';

//watchers
import userWatchers from 'features/user/userWatchers';
import carWatchers from 'features/car/carWatchers';

export default function* startforman() {
  yield fork(userWatchers);
  yield fork(carWatchers);
}
