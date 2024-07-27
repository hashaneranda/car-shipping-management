export interface Car {
  _id: string;
  make: string;
  model: string;
  year: number;
  shippingStatus: string;
}
export interface CarRequest {
  make: string;
  model: string;
  year: number;
  shippingStatus: string;
}

interface CarState {
  loading: boolean;
  data: Car | Car[] | null | { data: Car[]; count: number };
  error: string | null;
}

export interface InitialState {
  carList: CarState;
  carDetail: CarState;
  createdCar: CarState;
  deletedCar: CarState;
  updatedCar: CarState;
  lastFetched: number | null;
}
