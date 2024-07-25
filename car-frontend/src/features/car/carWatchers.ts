import { takeLatest } from 'redux-saga/effects';

//actions
import * as carSlice from './carSlice';

//saga
import * as carSaga from './carSaga';

export default function* watchers() {
  yield takeLatest(carSlice.fetchCarListStart.type, carSaga.fetchCarList);
  yield takeLatest(carSlice.fetchCarDetailStart.type, carSaga.fetchCarDetail);
  yield takeLatest(carSlice.createCarStart.type, carSaga.createCar);
  yield takeLatest(carSlice.deleteCarStart.type, carSaga.deleteCar);
  yield takeLatest(carSlice.updateCarStart.type, carSaga.updateCar);
}
