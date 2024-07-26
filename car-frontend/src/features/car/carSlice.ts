import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// types
import { InitialState, Car, CarRequest } from './types';

const initialState: InitialState = {
  carList: {
    loading: false,
    data: null,
    error: null,
  },
  carDetail: {
    loading: false,
    data: null,
    error: null,
  },
  createdCar: {
    loading: false,
    data: null,
    error: null,
  },
  deletedCar: {
    loading: false,
    data: null,
    error: null,
  },
  updatedCar: {
    loading: false,
    data: null,
    error: null,
  },
};

const createdSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    // Fetch car list actions
    fetchCarListStart(state, action: PayloadAction<any>) {
      return {
        ...state,
        carList: {
          ...state.carList,
          loading: true,
          error: null,
        },
      };
    },
    fetchCarListSuccess(state, action: PayloadAction<Car[]>) {
      return {
        ...state,
        carList: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };
    },
    fetchCarListError(state, action: PayloadAction<string>) {
      return {
        ...state,
        carList: {
          loading: false,
          data: null,
          error: action.payload,
        },
      };
    },
    fetchCarListReset(state) {
      return {
        ...state,
        carList: initialState.carList,
      };
    },

    // Fetch car detail actions
    fetchCarDetailStart(state) {
      return {
        ...state,
        carDetail: {
          ...state.carDetail,
          loading: true,
          error: null,
        },
      };
    },
    fetchCarDetailSuccess(state, action: PayloadAction<Car>) {
      return {
        ...state,
        carDetail: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };
    },
    fetchCarDetailError(state, action: PayloadAction<string>) {
      return {
        ...state,
        carDetail: {
          loading: false,
          data: null,
          error: action.payload,
        },
      };
    },
    fetchCarDetailReset(state) {
      return {
        ...state,
        carDetail: initialState.carDetail,
      };
    },

    // Create car actions
    createCarStart(state, action: PayloadAction<CarRequest>) {
      return {
        ...state,
        createdCar: {
          ...state.createdCar,
          loading: true,
          error: null,
        },
      };
    },
    createCarSuccess(state, action: PayloadAction<Car>) {
      return {
        ...state,
        createdCar: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };
    },
    createCarError(state, action: PayloadAction<string>) {
      return {
        ...state,
        createdCar: {
          loading: false,
          data: null,
          error: action.payload,
        },
      };
    },
    createCarReset(state) {
      return {
        ...state,
        createdCar: initialState.createdCar,
      };
    },

    // Delete car actions
    deleteCarStart(state, action: PayloadAction<string>) {
      return {
        ...state,
        deletedCar: {
          ...state.deletedCar,
          loading: true,
          error: null,
        },
      };
    },
    deleteCarSuccess(state, action: PayloadAction<any>) {
      return {
        ...state,
        deletedCar: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };
    },
    deleteCarError(state, action: PayloadAction<string>) {
      return {
        ...state,
        deletedCar: {
          loading: false,
          data: null,
          error: action.payload,
        },
      };
    },
    deleteCarReset(state) {
      return {
        ...state,
        deletedCar: initialState.deletedCar,
      };
    },

    // Update car actions
    updateCarStart(state, action: PayloadAction<any>) {
      return {
        ...state,
        updatedCar: {
          ...state.updatedCar,
          loading: true,
          error: null,
        },
      };
    },
    updateCarSuccess(state, action: PayloadAction<Car>) {
      return {
        ...state,
        updatedCar: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };
    },
    updateCarError(state, action: PayloadAction<string>) {
      return {
        ...state,
        updatedCar: {
          loading: false,
          data: null,
          error: action.payload,
        },
      };
    },
    updateCarReset(state) {
      return {
        ...state,
        updatedCar: initialState.updatedCar,
      };
    },
  },
});

const { actions, reducer } = createdSlice;

export const {
  fetchCarListStart,
  fetchCarListSuccess,
  fetchCarListError,
  fetchCarListReset,
  fetchCarDetailStart,
  fetchCarDetailSuccess,
  fetchCarDetailError,
  fetchCarDetailReset,
  createCarStart,
  createCarSuccess,
  createCarError,
  createCarReset,
  deleteCarStart,
  deleteCarSuccess,
  deleteCarError,
  deleteCarReset,
  updateCarStart,
  updateCarSuccess,
  updateCarError,
  updateCarReset,
} = actions;

export default reducer;
