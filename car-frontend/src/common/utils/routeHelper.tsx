import React from 'react';
import { Route, Navigate } from 'react-router-dom';

interface IRouteProps {
  component: React.ReactNode;
  isAuthenticated: boolean;
  // path: string;
}

export function AppRoute({ component, isAuthenticated }: IRouteProps): JSX.Element {
  return (
    isAuthenticated ? (
      component
    ) : (
      <Navigate
        to={{
          pathname: '/login',
        }}
      />
    )
  ) as JSX.Element;
}
