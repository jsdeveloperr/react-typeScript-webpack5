import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { delayedImport } from '@/utilities/delayedImport';
import Loader from '@/components/Loader/Loader';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Login = React.lazy(() => delayedImport(() => import('@/pages/Login/Login')));
const Movies = React.lazy(() => delayedImport(() => import('@/pages/Movies/Movies')));
const MovieDetail = React.lazy(() => delayedImport(() => import('@/pages/MovieDetail/MovieDetail')));
const NotFound = React.lazy(() => delayedImport(() => import('@/pages/NotFound/NotFound')));

const AppRouter = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/movies"
          element={
            <PrivateRoute>
              <Movies />
            </PrivateRoute>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <PrivateRoute>
              <MovieDetail />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </Router>
);

export default AppRouter;

