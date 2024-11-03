import React from 'react';
import { Navigate } from 'react-router-dom';
import { RouteProps } from '../types/types';

const PublicRoute = ({ children }: RouteProps) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  return isAuthenticated ? <Navigate to="/movies" /> : <>{children}</>;
};

export default PublicRoute;
