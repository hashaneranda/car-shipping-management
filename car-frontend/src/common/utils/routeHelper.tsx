import React from 'react';
import { Route, Navigate } from 'react-router-dom';

interface IRouteProps {
  component: React.ReactNode;
  isAuthenticated: boolean;
  path: string;
  exact: boolean;
}

export function AppRoute({ component, isAuthenticated, path, exact, ...rest }: IRouteProps) {
  return (
    <Route
      {...rest}
      path={path}
      element={
        isAuthenticated ? (
          component
        ) : (
          <Navigate
            to={{
              pathname: '/login',
            }}
          />
        )
      }
    />
  );
}

// interface

// function AdminRoute({ component, isAuthenticated, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         isAuthenticated ? (
//           React.createElement(component, props)
//         ) : (
//           <Redirect
//             to={{
//               pathname: '/admin',
//             }}
//           />
//         )
//       }
//     />
//   );
// }
