import React, { useReducer, createContext, ReactNode } from 'react';
import { setToken, getFromStorage, setUser, clearStorage } from 'common/utils/storage';
import createDataContext from './createDataContext';

interface UserState {
  isAuthenticated: boolean;
  user: any;
  token: string;
}

interface UserAction {
  type: string;
  payload?: any;
}

interface UserContextProps {
  state: UserState;
  login: (user: any, token: string) => void;
  logout: () => void;
  setUserData: (user: any) => void;
}

const initialState: UserState = {
  isAuthenticated: false,
  user: null,
  token: '',
};

// Define actions
const actions = {
  login: (dispatch: React.Dispatch<UserAction>) => (user: any, token: string) => {
    setToken(token);
    setUser(user);
    dispatch({ type: 'LOGIN', payload: { user, token } });
  },
  logout: (dispatch: React.Dispatch<UserAction>) => () => {
    clearStorage();
    dispatch({ type: 'LOGOUT' });
  },
  setUserData: (dispatch: React.Dispatch<UserAction>) => (user: any) => {
    setUser(user);
    dispatch({ type: 'SET_USER', payload: user });
  },
};

// Define reducer
const reducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: '',
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export const { Context, Provider } = createDataContext(reducer, actions, initialState);
