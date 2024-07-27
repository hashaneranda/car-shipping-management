//services
import * as services from 'services/carService';

//actions
import * as actions from './carSlice';

import { returnSaga } from 'common/utils/sagaHelper';
import { call, put, select } from 'redux-saga/effects';
import { RootState } from 'app/rootReducer';

const CACHE_DURATION = 60000;

export function* fetchCarList({ payload }: ReturnType<typeof actions.fetchCarListStart>): Generator<any> {
  const lastFetched: any = yield select((state: RootState) => state.car.lastFetched);
  const now = Date.now();

  if (lastFetched && now - lastFetched < CACHE_DURATION) {
    return;
  }

  let response: any = null;

  try {
    response = yield call(services.fetchCarList, payload);

    console.log('response', response);

    if (response && !response?.error) {
      yield put({
        type: actions.fetchCarListSuccess.type,
        payload: response,
      });
    } else {
      yield put({ type: actions.fetchCarListError.type, payload: response });
    }
  } catch (err: any) {
    yield put({ type: actions.fetchCarListError.type, payload: err?.response });
  }
}

export const fetchCarDetail = returnSaga(
  services.fetchCarDetail,
  actions.fetchCarDetailStart,
  actions.fetchCarDetailSuccess,
  actions.fetchCarDetailError,
);

export const createCar = returnSaga(services.createCar, actions.createCarStart, actions.createCarSuccess, actions.createCarError);

export const deleteCar = returnSaga(services.deleteCar, actions.deleteCarStart, actions.deleteCarSuccess, actions.deleteCarError);

export const updateCar = returnSaga(services.updateCar, actions.updateCarStart, actions.updateCarSuccess, actions.updateCarError);
