import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ element, isLoggedIn, ...rest }) => {

return (
    <Route
      {...rest}
      element={
        isLoggedIn ? (
          element
        ) : (
          <Navigate to='/login' replace state={{ from: rest.path }} />
        )
      }
    />
  );
};

export default PrivateRoute;