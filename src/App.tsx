import React from 'react';
import AppRouter from './router/AppRouter';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { FavoriteMoviesProvider } from './context/FavoriteMoviesContext';
import { MovieProvider } from './context/MovieContext';

const App = () => {
  return (
    <ErrorBoundary>
      <FavoriteMoviesProvider>
        <MovieProvider>
          <AppRouter />
        </MovieProvider>
      </FavoriteMoviesProvider>
    </ErrorBoundary>
  );
};

export default App;
