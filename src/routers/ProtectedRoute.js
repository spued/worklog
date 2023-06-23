import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


const ProtectedRoute = ({
  isAllowed,
  redirectPath = '/'
}) => {
  //console.log(isAllowed());
  if (!isAllowed) {
    return <Navigate to={ redirectPath } replace />;
  }
    return <Outlet/>;
};

export { ProtectedRoute as default }