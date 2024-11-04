import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { fetchMovies } from '@/api/movies/moviesApi';
import { Movie, MovieContextProps } from '@/types/types';
import { CONSTANTS } from '@/utilities/constants';

const MovieContext = createContext<MovieContextProps | undefined>(undefined);

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchResult, setSearchResult] = useState<Movie[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getMovies = async () => {
    try {
      const moviesData = await fetchMovies();
      setMovies(moviesData);
      setSearchResult(moviesData);
    } catch (err) {
      setError(CONSTANTS.MOVIE_CONTEXT.ERROR_MESSAGE);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const resetMovies = () => {
    setMovies([]);
    setSearchResult([]);
  };

  const searchMovies = (query: string) => {
    setIsSearching(true);
    const filteredMovies = movies.filter((movie) =>
      movie.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResult(filteredMovies);
    setIsSearching(false);
  };

  return (
    <MovieContext.Provider value={{ movies, resetMovies,getMovies, searchResult, searchMovies, isSearching, error }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
};
