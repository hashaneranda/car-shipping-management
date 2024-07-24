import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// types
import { InitialState } from './types';

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
  registerUserPayloadSocial: {
    loading: false,
    data: null,
    error: null,
  },
  loginUserPayloadSocial: {
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
    registerUser(state, action: PayloadAction<any | void>) {
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
    loginUser(state, action: PayloadAction<any | void>) {
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    registerUserSocial(state, action: PayloadAction<any | void>) {
      return {
        ...state,
        registerUserPayloadSocial: { ...state.registerUserPayloadSocial, loading: true },
      };
    },
    registerUserSocialSuccess(state, action: PayloadAction<any | void>) {
      if (action?.payload?.user && action?.payload?.userData)
        return {
          ...state,
          registerUserPayloadSocial: {
            ...state.registerUserPayloadSocial,
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
        registerUserPayloadSocial: {
          ...state.registerUserPayloadSocial,
          loading: false,
          data: action?.payload,
          error: null,
        },
      };
    },
    registerUserSocialError(state, action: PayloadAction<any | void>) {
      return {
        ...state,
        registerUserPayloadSocial: {
          ...state.registerUserPayloadSocial,
          loading: false,
          data: null,
          error: action?.payload,
        },
      };
    },
    registerUserSocialReset(state) {
      return {
        ...state,
        registerUserPayloadSocial: initialState.registerUserPayloadSocial,
      };
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    loginUserSocial(state, action: PayloadAction<any | void>) {
      return {
        ...state,
        loginUserPayloadSocial: { ...state.loginUserPayloadSocial, loading: true },
      };
    },
    loginUserSocialSuccess(state, action: PayloadAction<any | void>) {
      if (action?.payload?.user && action?.payload?.userData)
        return {
          ...state,
          loginUserPayloadSocial: {
            ...state.loginUserPayloadSocial,
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
        loginUserPayloadSocial: {
          ...state.loginUserPayloadSocial,
          loading: false,
          data: null,
          error: {
            error: 'Something went wrong! Please try again',
          },
        },
      };
    },
    loginUserSocialError(state, action: PayloadAction<any | void>) {
      return {
        ...state,
        loginUserPayloadSocial: {
          ...state.loginUserPayloadSocial,
          loading: false,
          data: null,
          error: action?.payload,
        },
      };
    },
    loginUserSocialReset(state) {
      return {
        ...state,
        loginUserPayloadSocial: initialState.loginUserPayloadSocial,
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
  registerUserSocial,
  registerUserSocialSuccess,
  registerUserSocialError,
  registerUserSocialReset,
  loginUserSocial,
  loginUserSocialSuccess,
  loginUserSocialError,
  loginUserSocialReset,
} = actions;

export default reducer;
