import React from 'react';
import { Navigate } from 'react-router-dom';
import { RouteProps } from '../types/types';

const PrivateRoute = ({ children }: RouteProps) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
};

export default PrivateRoute;
