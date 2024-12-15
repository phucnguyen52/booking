import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { hasRole, isAuthenticated } from '../utils/AuthCheck';
import { APP_ROUTER } from '../utils/Constants';

const PrivateRoutes = ({role }) => {
  const token = isAuthenticated()
  const isRole = hasRole(role)
console.log(token)
  if (!token) {
    return <Navigate to={APP_ROUTER.LOGIN} />; 
  }
  if (!isRole) {
    return <Navigate to={APP_ROUTER.HOME} />; 
  }

  return (<Outlet/>)
};

export default PrivateRoutes;
