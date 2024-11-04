import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Movie, FavoriteMoviesContextProps } from '@/types/types';

const FavoriteMoviesContext = createContext<FavoriteMoviesContextProps | undefined>(undefined);

export const FavoriteMoviesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie: Movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };

  const removeFavorite = (movieId: number) => {
    setFavorites((prevFavorites) => prevFavorites.filter((movie) => movie.id !== movieId));
  };

  const toggleFavorite = (movie: Movie) => {
    if (favorites.find((fav) => fav.id === movie.id)) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  const resetFavorites = () => {
    setFavorites([]);
    localStorage.removeItem('favorites');
  };

  const favoriteCount = favorites.length;

  const isFavorite = (movieId: number) => favorites.some((movie) => movie.id === movieId);

  return (
    <FavoriteMoviesContext.Provider value={{ favorites, addFavorite, removeFavorite, toggleFavorite, resetFavorites, favoriteCount, isFavorite }}>
      {children}
    </FavoriteMoviesContext.Provider>
  );
};

export const useFavoriteMovies = () => {
  const context = useContext(FavoriteMoviesContext);
  if (!context) {
    throw new Error('useFavoriteMovies must be used within a FavoriteMoviesProvider');
  }
  return context;
};
