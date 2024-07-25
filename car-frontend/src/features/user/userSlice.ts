import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// types
import { ILoginUserReq, InitialState, IRegisterUserReq } from './types';

const initialState: InitialState = {
  registerUserPayload: {
    loading: false,
    data: null,
    error: null,
  },
  loginUserPayload: {
    loading: false,
    data: null,
    error: null,
  },

  user: {
    loading: false,
    data: null,
    error: null,
  },
};

const createdSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    registerUser(state, action: PayloadAction<IRegisterUserReq>) {
      return {
        ...state,
        registerUserPayload: { ...state.registerUserPayload, loading: true },
      };
    },
    registerUserSuccess(state, action: PayloadAction<any | void>) {
      if (action?.payload?.user && action?.payload?.userData)
        return {
          ...state,
          registerUserPayload: {
            ...state.registerUserPayload,
            loading: false,
            data: action?.payload,
            error: null,
          },
          user: {
            loading: false,
            data: action?.payload,
            error: null,
          },
        };

      return {
        ...state,
        registerUserPayload: {
          ...state.registerUserPayload,
          loading: false,
          data: action?.payload,
          error: null,
        },
      };
    },
    registerUserError(state, action: PayloadAction<any | void>) {
      return {
        ...state,
        registerUserPayload: {
          ...state.registerUserPayload,
          loading: false,
          data: null,
          error: action?.payload,
        },
      };
    },
    registerUserReset(state) {
      return {
        ...state,
        registerUserPayload: initialState.registerUserPayload,
      };
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    loginUser(state, action: PayloadAction<ILoginUserReq>) {
      return {
        ...state,
        loginUserPayload: { ...state.loginUserPayload, loading: true },
      };
    },
    loginUserSuccess(state, action: PayloadAction<any | void>) {
      if (action?.payload?.user && action?.payload?.userData)
        return {
          ...state,
          loginUserPayload: {
            ...state.loginUserPayload,
            loading: false,
            data: action?.payload,
            error: null,
          },
          user: {
            loading: false,
            data: action?.payload,
            error: null,
          },
        };

      return {
        ...state,
        loginUserPayload: {
          ...state.loginUserPayload,
          loading: false,
          data: action?.payload,
          error: null,
        },
      };
    },
    loginUserError(state, action: PayloadAction<any | void>) {
      return {
        ...state,
        loginUserPayload: {
          ...state.loginUserPayload,
          loading: false,
          data: null,
          error: action?.payload,
        },
      };
    },
    loginUserReset(state) {
      return {
        ...state,
        loginUserPayload: initialState.loginUserPayload,
      };
    },

    userReset(state) {
      return {
        ...state,
        user: initialState.user,
      };
    },
  },
});

const { actions, reducer } = createdSlice;

export const {
  registerUser,
  registerUserSuccess,
  registerUserError,
  registerUserReset,
  loginUser,
  loginUserSuccess,
  loginUserError,
  loginUserReset,
  userReset,
} = actions;

export default reducer;
