//services
import * as services from 'services/carService';

//actions
import * as actions from './carSlice';

import { returnSaga } from 'common/utils/sagaHelper';

export const fetchCarList = returnSaga(
  services.fetchCarList,
  actions.fetchCarListStart,
  actions.fetchCarListSuccess,
  actions.fetchCarListError,
);

export const fetchCarDetail = returnSaga(
  services.fetchCarDetail,
  actions.fetchCarDetailStart,
  actions.fetchCarDetailSuccess,
  actions.fetchCarDetailError,
);

export const createCar = returnSaga(services.createCar, actions.createCarStart, actions.createCarSuccess, actions.createCarError);

export const deleteCar = returnSaga(services.deleteCar, actions.deleteCarStart, actions.deleteCarSuccess, actions.deleteCarError);

export const updateCar = returnSaga(services.updateCar, actions.updateCarStart, actions.updateCarSuccess, actions.updateCarError);
